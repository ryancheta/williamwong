export function isMobileDevice() {
  return /iPhone|iPod|iPad|Android/i.test(window.navigator.userAgent);
}

export function scrollToTopSmooth() {
  return window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function classes() {
  return [...arguments].splice('').join(' ');
}

export function joinStyles() {
  return Object.assign({}, ...arguments);
}
