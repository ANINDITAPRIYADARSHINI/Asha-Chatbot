import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MODELS } from './constants';
import { nanoid } from './nanoid';
import { type Message } from 'ai';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function getModelById(id: string) {
  return MODELS.find(model => model.id === id);
}

export function createMessage(role: 'user' | 'assistant' | 'system', content: string): Message {
  return {
    id: nanoid(),
    role,
    content
  };
}