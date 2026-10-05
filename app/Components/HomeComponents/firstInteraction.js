// Runs `callback` once, on the visitor's first interaction (touch, scroll, mouse move, key, click).
// Decorative hero motion waits for this so the first screen is stable and idle while it loads;
// real visitors interact almost immediately. Returns a cleanup function.
const EVENTS = ["pointerdown", "pointermove", "touchstart", "wheel", "scroll", "keydown"];

let interacted = false;

export function onFirstInteraction(callback) {
  if (interacted) {
    callback();
    return () => {};
  }
  const handler = () => {
    interacted = true;
    cleanup();
    callback();
  };
  const cleanup = () => EVENTS.forEach((e) => window.removeEventListener(e, handler));
  EVENTS.forEach((e) => window.addEventListener(e, handler, { passive: true }));
  return cleanup;
}
