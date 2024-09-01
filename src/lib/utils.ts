import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRemoteBaseUrl() {
  const graphQlUrl = new URL(process.env?.NEXT_PUBLIC_API_URL ?? "");

  return graphQlUrl.origin;
}
