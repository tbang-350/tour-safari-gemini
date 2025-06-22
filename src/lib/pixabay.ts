
'use server';

const API_URL = 'https://pixabay.com/api/';

export async function getImageUrl(query: string, width: number, height: number): Promise<string> {
  const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;
  
  // Use a placeholder if the API key is missing, so the app doesn't break.
  if (!PIXABAY_API_KEY || PIXABAY_API_KEY === 'YOUR_PIXABAY_API_KEY') {
    console.warn("Pixabay API key is not configured. Using placeholder images.");
    return `https://placehold.co/${width}x${height}.png`;
  }

  // Format the query to be URL-friendly, replacing spaces with '+' as recommended by Pixabay docs.
  const formattedQuery = query.trim().replace(/\s+/g, '+');

  // If the query is empty after formatting, return a placeholder.
  if (!formattedQuery) {
    console.warn("Empty query passed to getImageUrl. Using placeholder.");
    return `https://placehold.co/${width}x${height}.png`;
  }

  const params = new URLSearchParams({
    key: PIXABAY_API_KEY,
    q: formattedQuery,
    image_type: 'photo',
    orientation: 'horizontal', // Prefer landscape images for better layout fit
    per_page: '3',
  });

  try {
    const response = await fetch(`${API_URL}?${params.toString()}`);
    if (!response.ok) {
        // Provide more context in the error message for easier debugging
        const errorText = await response.text();
        throw new Error(`Pixabay API request failed with status ${response.status}: ${errorText}`);
    }
    const data = await response.json();

    if (data.hits && data.hits.length > 0) {
      // Use the first result, which is usually the most relevant.
      return data.hits[0].largeImageURL;
    }
  } catch (error) {
    console.error(`Failed to fetch image for query "${query}":`, error);
  }

  // Fallback to placeholder if the API call fails or returns no results.
  console.warn(`No image found for query "${query}". Using placeholder.`);
  return `https://placehold.co/${width}x${height}.png`;
}
