import { type ClassValue, clsx } from "clsx";
import { text } from "stream/consumers";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFileExtension = (filename: string) => {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
};

export const checkFileType = (file: any) => {
  const allowedTypes = ["video/mp4", "text/csv"];
  return allowedTypes.includes(file.type);
};

function padZero(num: number): string {
  return num < 10 ? "0" + num : num.toString();
}

export function formatDate(timestamp: string): string {
  const date = new Date(timestamp);
  const month = padZero(date.getMonth() + 1); // getMonth() returns 0-11
  const day = padZero(date.getDate()); // getDate() returns 1-31
  const year = date.getFullYear(); // getFullYear() returns the full year

  return `${month}-${day}-${year}`;
}
