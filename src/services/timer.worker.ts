let seconds = 0;
let timerId: ReturnType<typeof setInterval>;

const startTimer = () => {
  return setInterval(() => {
    seconds += 1;
    self.postMessage({ type: 'INCREMENT_SECONDS', seconds });
  }, 1000);
};

self.addEventListener('message', function (e) {
  if (e.data === 'pause') {
    clearInterval(timerId);
  }

  if (e.data === 'unpause') {
    timerId = startTimer();
  }

  if (e.data === 'reset') {
    clearInterval(timerId);
    seconds = 0;
  }
});
