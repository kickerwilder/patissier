import React from 'react';

// High quality photography placeholders for dessert items when local files are not yet in public/images
export const FALLBACK_IMAGES: Record<string, string> = {
  'napoleon': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
  'kievsky': 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
  'cheesecake': 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
  'snikers': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
  'chocolate': 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80',
  'berry': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
  'cake': 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
  'anastasia': 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80',
};

export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackType: keyof typeof FALLBACK_IMAGES = 'cake'
) {
  const target = e.currentTarget;
  if (!target.dataset.hasFailedOnce) {
    target.dataset.hasFailedOnce = 'true';
    target.src = FALLBACK_IMAGES[fallbackType] || FALLBACK_IMAGES.cake;
  }
}
