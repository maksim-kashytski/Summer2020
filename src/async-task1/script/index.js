/* eslint-disable no-alert */

// # Task1

(() => {
  const root = document.getElementById('task-1');
  const control = document.getElementById('control-1');
  const dataInput = document.createElement('input');
  const secondsInput = document.createElement('input');
  const buttonCallback = document.createElement('button');
  const buttonPromise = document.createElement('button');
  const buttonAsyncAwait = document.createElement('button');

  setInterval(() => {
    dataInput.value = new Date().toLocaleTimeString();
  }, 1000);

  secondsInput.setAttribute('type', 'number');
  secondsInput.setAttribute('min', '1');
  secondsInput.setAttribute('max', '3');
  secondsInput.value = 1;

  buttonCallback.innerText = 'Callback';
  buttonCallback.onclick = () => {
    setTimeout(() => {
      alert(dataInput.value);
    }, secondsInput.value * 1000);
  };

  buttonPromise.innerText = 'Promise';
  buttonPromise.onclick = () => {
    new Promise((res) => setTimeout(res, secondsInput.value * 1000))
      .then(() => alert(dataInput.value));
  };

  buttonAsyncAwait.innerText = 'Async / Await';
  buttonAsyncAwait.onclick = async () => {
    await new Promise((res) => setTimeout(res, secondsInput.value * 1000));

    alert(dataInput.value);
  };

  buttonCallback.className = 'control__button';
  buttonPromise.className = 'control__button';
  buttonAsyncAwait.className = 'control__button';
  dataInput.className = 'control__input';
  secondsInput.className = 'control__input';

  root.append(dataInput);
  root.append(secondsInput);
  control.append(buttonCallback);
  control.append(buttonPromise);
  control.append(buttonAsyncAwait);
})();

// # Task2

function httpGet(url) {
  const roll = Math.floor(Math.random() * 3 + 1);
  const success = roll === 3 ? 0 : 1;
  const delay = Math.floor(Math.random() * 3 + 1);

  return new Promise((res) => setTimeout(res, delay * 500))
    .then(() => fetch(url))
    .then((res) => {
      if (success) return res.text();

      const e = new Error('Synthetic error :)');
      throw e;
    });
}

(() => {
  const root = document.getElementById('task-2');
  const control = document.getElementById('control-2');
  const preloader = document.createElement('img');
  const dataContainer = document.createElement('div');
  const button = document.createElement('button');

  preloader.className = 'preloader';
  preloader.setAttribute('src', 'https://i.ya-webdesign.com/images/loading-animated-png-3.gif');
  preloader.style.display = 'none';

  button.className = 'control__button';
  button.innerText = 'httpGet()';
  button.onclick = () => {
    preloader.style.display = 'block';
    dataContainer.innerText = '';

    httpGet('./script/data.json')
      .then((res) => {
        preloader.style.display = 'none';
        dataContainer.innerText = res;
      })
      .catch((err) => {
        preloader.style.display = 'none';
        alert(err);
      });
  };

  root.append(preloader);
  root.append(dataContainer);
  control.append(button);
})();
