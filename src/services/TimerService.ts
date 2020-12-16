const worker = new Worker('./timer.worker.ts', { type: 'module' });

class TimerService {
  _seconds = 0;

  set seconds(value) {
    this._seconds = value;
  }

  get seconds() {
    return this._seconds;
  }

  setTime = (arg: any) => {};

  pause = () => {
    worker.postMessage('pause');
  };

  unpause = () => {
    worker.postMessage('unpause');
  };

  reset = () => {
    this._seconds = 0;
    this.setTime(0);
    worker.postMessage('reset');
  };
}

worker.addEventListener('message', function (e) {
  if (e.data.type === 'INCREMENT_SECONDS') {
    timerService.seconds = e.data.seconds;
    timerService.setTime(e.data.seconds);
  }
});

const timerService = new TimerService();
export default timerService;
