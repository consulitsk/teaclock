let timerId = null;
let remainingTime = 0;

self.onmessage = function(event) {
  if (event.data.command === "start") {
    remainingTime = event.data.time;
    timerId = setInterval(() => {
      remainingTime--;
      self.postMessage({ time: remainingTime });

      if (remainingTime <= 0) {
        clearInterval(timerId);
        self.postMessage({ done: true });
      }
    }, 1000);
  } else if (event.data.command === "stop") {
    clearInterval(timerId);
  }
};
