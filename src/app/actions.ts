'use server';

import { tourRecommendation, TourRecommendationInput } from '@/ai/flows/tour-recommendation';
import { z } from 'zod';

const recommendationSchema = z.object({
  description: z.string().optional(),
  image: z.instanceof(File).optional(),
});

type FormState = {
  message: 'success' | 'error' | 'idle';
  recommendations?: string[];
  error?: string;
};

export async function getTourRecommendations(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = recommendationSchema.safeParse({
    description: formData.get('description') as string,
    image: formData.get('image') as File,
  });

  if (!validatedFields.success) {
    return {
      message: 'error',
      error: 'Invalid form data.',
    };
  }

  const { description, image } = validatedFields.data;

  if (!description && (!image || image.size === 0)) {
    return {
      message: 'error',
      error: 'Please provide a description or an image for recommendations.',
    };
  }
  
  let imageDataUrl: string | undefined = undefined;

  if (image && image.size > 0) {
    try {
      const buffer = Buffer.from(await image.arrayBuffer());
      const mimeType = image.type;
      imageDataUrl = `data:${mimeType};base64,${buffer.toString('base64')}`;
    } catch (e) {
        return { message: 'error', error: 'Failed to process image.' };
    }
  }

  const input: TourRecommendationInput = {
    description,
    image: imageDataUrl,
  };

  try {
    const result = await tourRecommendation(input);
    if (result.tourPackages && result.tourPackages.length > 0) {
      return { message: 'success', recommendations: result.tourPackages };
    }
    return { message: 'success', recommendations: ["We couldn't find a specific match, but please tell us more about your ideal trip!"] };
  } catch (error) {
    console.error(error);
    return { message: 'error', error: 'Failed to get recommendations. Please try again.' };
  }
}
