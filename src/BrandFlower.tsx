/** Botanical mark: explicit SVG paths keep the logo identical across platforms. */
export function BrandFlower({className = ''}: {className?: string}) {
 return <svg className={className} viewBox="0 0 48 58" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <g stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
   <path d="M24 29c-7-2-13-9-12-15 5-1 10 1 12 6 2-5 7-7 12-6 1 6-5 13-12 15Z"/>
   <path d="M24 27c-4-4-7-11-5-16 2-1 4-3 5-5 1 2 3 4 5 5 2 5-1 12-5 16Z"/>
   <path d="M15 24C9 23 6 19 7 14c2 1 3 1 5 1m21 9c6-1 9-5 8-10-2 1-3 1-5 1M24 29v24m0-10c-8 0-13-5-14-11 7 0 12 4 14 11Zm0 5c7 0 12-5 13-11-6 0-11 4-13 11Z"/>
  </g>
 </svg>;
}
