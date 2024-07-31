import { twMerge } from "tailwind-merge";
import clsx, { type ClassValue } from "clsx";

function cn(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames));
}

export default cn;
