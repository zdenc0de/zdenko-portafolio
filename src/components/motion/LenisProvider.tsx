"use client";

import { useLenis } from './useLenis';


export function LenisProvider({ children }: { children: React.ReactNode }) {
  
  useLenis(true); 
  
  return <>{children}</>;
}