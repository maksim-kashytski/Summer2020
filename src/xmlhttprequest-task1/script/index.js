const getValueById = (id) => document.getElementById(id).value;
const showResponse = (res) => {
  const root = document.getElementById('results');
  const div = document.createElement('pre');
  div.innerText = res;
  root.append(div);
};

const sendRequest = (method, url, body = null) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  if (body !== null) xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = () => {
    resolve(xhr.response);
  };
  xhr.onerror = () => reject(xhr.response);
  xhr.send(body !== null ? JSON.stringify(body) : body);
});

const xhrGet = () => {
  const query = {
    url: 'https://jsonplaceholder.typicode.com',
    section: getValueById('section'),
    id: getValueById('id'),
    subsection: getValueById('subsection'),
    payload: getValueById('payload'),
    toString() {
      return `${this.url}/${this.section}/${this.id}/${this.subsection}/${this.payload}`;
    },
  };

  sendRequest('GET', query.toString())
    .then((data) => showResponse(data))
    .catch((err) => console.error(err));
};

const xhrPost = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const body = {
    firstName: 'Maksim',
    lastName: 'Kashytski',
  };

  sendRequest('POST', url, body)
    .then((data) => showResponse(data))
    .catch((err) => console.error(err));
};

const xhrDelete = () => {
  const url = 'https://jsonplaceholder.typicode.com/users/1';

  sendRequest('DELETE', url)
    .then((data) => showResponse(data))
    .catch((err) => console.error(err));
};
