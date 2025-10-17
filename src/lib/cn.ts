// Utilidad mínima: concatena clases ignorando falsy
export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}
