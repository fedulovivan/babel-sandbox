
export function camelCase(value?: string): string|undefined {
    if (!value) return;
    return `${value} => ${value.toUpperCase()}`;
}