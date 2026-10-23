const INTRO_SESSION_KEY = 'dream-space:intro-seen';

export function shouldSkipIntro() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
  try {
    return window.sessionStorage.getItem(INTRO_SESSION_KEY) === '1';
  } catch {
    // The opening still works when browser storage is unavailable.
    return false;
  }
}

export function rememberIntro() {
  try {
    window.sessionStorage.setItem(INTRO_SESSION_KEY, '1');
  } catch {
    // Storage restrictions must never prevent access to the website.
  }
}
