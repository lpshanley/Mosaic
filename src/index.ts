export function greet<TGreeting extends string>(greeting: TGreeting) {
  return `Hello ${greeting}` as const;
}
