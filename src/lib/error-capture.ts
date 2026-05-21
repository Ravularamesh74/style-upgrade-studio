const TTL_MS = 5000;
const MAX_ERRORS = 25;

type CapturedError = {
  error: unknown;
  at: number;
};

const queue: CapturedError[] = [];

function cleanup() {
  const now = Date.now();

  while (
    queue.length > 0 &&
    now - queue[0].at > TTL_MS
  ) {
    queue.shift();
  }
}

function record(error: unknown) {
  cleanup();

  queue.push({
    error,
    at: Date.now(),
  });

  if (queue.length > MAX_ERRORS) {
    queue.shift();
  }
}

const REGISTERED =
  "__ERROR_CAPTURE_REGISTERED__";

if (
  typeof globalThis !== "undefined" &&
  typeof globalThis.addEventListener ===
    "function" &&
  !(globalThis as any)[REGISTERED]
) {
  (globalThis as any)[REGISTERED] = true;

  globalThis.addEventListener(
    "error",
    (event: Event) => {
      const errorEvent =
        event as ErrorEvent;

      record(
        errorEvent.error ?? errorEvent
      );
    }
  );

  globalThis.addEventListener(
    "unhandledrejection",
    (event: Event) => {
      const rejectionEvent =
        event as PromiseRejectionEvent;

      record(rejectionEvent.reason);
    }
  );
}

/**
 * Returns and removes the most recently captured error.
 */
export function consumeLastCapturedError() {
  cleanup();

  return queue.shift()?.error;
}

/**
 * Returns the most recently captured error
 * without removing it.
 */
export function getLastCapturedError() {
  cleanup();

  return queue.length
    ? queue[queue.length - 1].error
    : undefined;
}