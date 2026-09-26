// Copied from app-template/lib/utils.ts — change it here and you must change it there too.
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
