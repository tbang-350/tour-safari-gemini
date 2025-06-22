
'use server';

const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;
const API_URL = 'https://pixabay.com/api/';

export async function getImageUrl(query: string, width: number, height: number): Promise<string> {
  // Use a placeholder if the API key is missing, so the app doesn't break.
  if (!PIXABAY_API_KEY || PIXABAY_API_KEY === 'YOUR_PIXABAY_API_KEY') {
    console.warn("Pixabay API key is not configured. Using placeholder images.");
    return `https://placehold.co/${width}x${height}.png`;
  }

  const params = new URLSearchParams({
    key: PIXABAY_API_KEY,
    q: query,
    image_type: 'photo',
    orientation: width > height ? 'horizontal' : 'vertical',
    per_page: '3', // Fetch a few images to have a choice
    safesearch: 'true',
    min_width: String(width),
    min_height: String(height),
  });

  try {
    const response = await fetch(`${API_URL}?${params.toString()}`);
    if (!response.ok) {
        throw new Error(`Pixabay API request failed with status ${response.status}`);
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
  return `https://placehold.co/${width}x${height}.png`;
}
