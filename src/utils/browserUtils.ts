export function execIfBrowser(func: () => void) {
  if (typeof window === 'undefined') {
    return;
  }
  func();
}
