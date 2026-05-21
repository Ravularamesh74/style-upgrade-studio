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
    queue.length &&
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
  typeof globalThis.addEventListener ===
    "function" &&
  !(globalThis as any)[REGISTERED]
) {
  (globalThis as any)[REGISTERED] = true;

  globalThis.addEventListener(
    "error",
    event => {
      record(
        (event as ErrorEvent).error ??
          event
      );
    }
  );

  globalThis.addEventListener(
    "unhandledrejection",
    event => {
      record(
        (
          event as PromiseRejectionEvent
        ).reason
      );
    }
  );
}

export function consumeCapturedError() {
  cleanup();

  return queue.shift()?.error;
}