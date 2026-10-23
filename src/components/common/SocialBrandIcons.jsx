export function InstagramIcon({ size = 28, ...props }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none"/>
  </svg>;
}

export function YouTubeIcon({ size = 28, ...props }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M21 7.3a2.8 2.8 0 0 0-2-2C17.2 4.8 12 4.8 12 4.8s-5.2 0-7 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.5 12a29 29 0 0 0 .5 4.7 2.8 2.8 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.7 29 29 0 0 0-.5-4.7Z"/>
    <path d="m10 8.5 5.5 3.5-5.5 3.5Z" fill="currentColor" stroke="none"/>
  </svg>;
}
