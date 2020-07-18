const worker = new Worker('./timer.worker.ts',  { type: 'module' });

worker.addEventListener('message', function(e) {
  console.log('MESSAGA', e.data);
});

class TimerService {
  pause = () => {
    worker.postMessage('pause');
  }

  unpause = () => {
    worker.postMessage('unpause');
  }

  reset = () => {
    worker.postMessage('reset');
  }
}

const timerService = new TimerService();
export default timerService;
