"use client";

import { useEffect, useState, useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { getTourRecommendations } from '@/app/actions';
import { AlertCircle, Bot, CheckCircle, Image as ImageIcon, Loader2, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { useToast } from '@/hooks/use-toast';
import { Badge } from './ui/badge';

const initialState = {
  message: 'idle' as const,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
      Get AI Recommendations
    </Button>
  );
}

export function InquiryModal({ tourName }: { tourName: string }) {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useActionState(getTourRecommendations, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (state.message === 'success' && state.recommendations) {
        // No toast for success, display in alert
    } else if (state.message === 'error') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error || 'Something went wrong.',
      });
    }
  }, [state, toast]);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full mt-6">Book This Tour</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Inquiry for: {tourName}</DialogTitle>
          <DialogDescription>
            Fill out your details below. You can also use our AI tool to get personalized recommendations for other tours you might like!
          </DialogDescription>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-8">
            <div className='space-y-4'>
                <h3 className="font-headline text-lg font-semibold">Your Information</h3>
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="jane.doe@example.com" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="message">Your Message (Optional)</Label>
                    <Textarea id="message" placeholder={`I'm interested in the ${tourName} tour. I'd like to know more about...`}/>
                </div>
                <Button className='w-full' onClick={() => {
                    toast({title: "Inquiry Sent!", description: "We will get back to you shortly."});
                    setOpen(false);
                }}>Submit Inquiry</Button>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-secondary/50 border border-dashed">
                <div className='text-center'>
                    <h3 className="font-headline text-lg font-semibold flex items-center justify-center gap-2">
                        <Bot className="h-5 w-5 text-primary" /> AI Tour Assistant
                    </h3>
                    <p className="text-sm text-muted-foreground">Describe your dream trip to get suggestions.</p>
                </div>
                <form ref={formRef} action={formAction} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="description">Ideal Safari Description</Label>
                        <Textarea id="description" name="description" placeholder="e.g., I want to see lots of elephants and stay in a luxury lodge." />
                    </div>
                    <div className="space-y-2">
                         <Label htmlFor="image">Upload an inspiration photo (optional)</Label>
                         <Input id="image" name="image" type="file" accept="image/*" onChange={handleImageChange} className='file:text-primary file:font-semibold'/>
                         {imagePreview && (
                            <div className="mt-2">
                                <img src={imagePreview} alt="Image preview" className="rounded-md max-h-32" />
                            </div>
                         )}
                    </div>
                    <SubmitButton />
                </form>
                {state.message === 'success' && state.recommendations && (
                  <Alert className='mt-4 bg-green-50 border-green-200'>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertTitle className='font-semibold text-green-800'>Here are some recommendations!</AlertTitle>
                    <AlertDescription className='text-green-700'>
                        <ul className='list-disc pl-5 mt-2'>
                        {state.recommendations.map((rec, i) => (
                           <li key={i}>{rec}</li>
                        ))}
                        </ul>
                    </AlertDescription>
                  </Alert>
                )}
                 {state.message === 'error' && (
                  <Alert variant="destructive" className='mt-4'>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      {state.error}
                    </AlertDescription>
                  </Alert>
                )}
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
