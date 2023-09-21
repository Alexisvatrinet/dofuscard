// custom.d.ts
declare module '*.css';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';
declare module '*.ico';

declare module '*.json';

declare module 'react-dom' {
  export interface Root {
    render(element: React.ReactNode): void;
  }
  export function createRoot(container: HTMLElement | DocumentFragment | null): Root;
}
