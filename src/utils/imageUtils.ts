export const generateShimmerSvg = (w?: number, h?: number) => `
<svg width="${w || '100%'}" height="${
  h || '100%'
}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
<linearGradient id="g">
<stop stop-color="#e0e0e0" offset="0%" />
<stop stop-color="#c0c0c0" offset="20%" />
<stop stop-color="#e0e0e0" offset="40%" />
<stop stop-color="#e0e0e0" offset="100%" />
</linearGradient>
</defs>
<rect width="${w || '100%'}" height="${h || '100%'}" fill="#e0e0e0" />
<rect id="r" width="${w || '100%'}" height="${h || '100%'}" fill="url(#g)" />
<animate xlink:href="#r" attributeName="x" from="-${w || '100%'}" to="${
  w || '100%'
}" dur="1s" repeatCount="indefinite" />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
