let seconds = 0;
let timerId;

const startTimer = () => {
  return setInterval(() => {
    seconds += 1;
    self.postMessage({ type: 'INCREMENT_SECONDS', seconds});
    console.log(seconds);
  }, 1000);
};

self.addEventListener('message', function(e) {
  if(e.data === 'pause') {
    clearInterval(timerId);
  }

  if(e.data === 'unpause') {
    timerId = startTimer();
  }

  if(e.data === 'reset') {
    clearInterval(timerId);
    seconds = 0;
  }
});

console.log('SELF!!!', self);