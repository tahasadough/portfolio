type ValueOf<T> = T[keyof T];
type NestedValue<T> = { [K in keyof T]: ValueOf<T[K]> }[keyof T];
type variant = 'default' | 'outline';
type size = 'default' | 'sm' | 'lg';
type color = 'default' | 'secondary';

export type { ValueOf, NestedValue, variant, size, color };
