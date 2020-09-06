// #Task 1

(() => {
  function decorate(node) {
    if (node.children.length === 0) {
      node.className = 'tree icon-doc-text';
      node.prepend('no_name.docx');
    } else {
      node.className = 'tree icon-folder';
      node.prepend('folder');
    }
  }

  const rootNodes = document.querySelectorAll('#nesting > div');

  rootNodes.forEach((node) => {
    const children = node.getElementsByTagName('div');

    decorate(node);

    Array.prototype.forEach.call(children, (node) => {
      node.style.display = 'none';
      decorate(node);
    });
  });

  nesting.onclick = (e) => {
    const { children } = e.target;

    Array.prototype.forEach.call(children, (node) => {
      if (node.style.display === 'none') {
        e.target.className = 'tree icon-folder-open';
        node.style.display = 'block';
      } else {
        e.target.className = 'tree icon-folder';
        node.style.display = 'none';
      }
    });
  };
})();

// #Task 2

async function getImages(root, query) {
  const urlQuery = {
    url: 'https://pixabay.com/api/',
    key: '?key=18073255-db3d06dd8f9d4441e02fbcf53',
    query: `&q=${query.match(/\w+/g).join('+')}`,
    type: '&image_type=photo',

    get() {
      return `${this.url}${this.key}${this.query}${this.type}`;
    },
  };

  return fetch(urlQuery.get())
    .then((res) => {
      if (res.ok) return res.json();

      return res.json().then((err) => {
        const e = new Error('Request error');
        e.data = err;
        throw e;
      });
    })
    .then((res) => {
      return res.hits.map((item) => item.webformatURL);
    })
    .then((res) => {
      const onLoad = [];

      res.forEach((element) => {
        const div = document.createElement('div');
        const img = document.createElement('img');

        img.src = element;

        onLoad.push(new Promise((res) => { img.onload = res; }));

        div.append(img);
        root.append(div);
      });

      return Promise.all(onLoad);
    });
}

function carousel(root) {
  const figure = root.querySelector('figure');
  const images = figure.children;
  const n = images.length;
  const gap = 0;
  const theta = (2 * Math.PI) / n;
  let currImage = 0;

  function rotateCarousel(imageIndex) {
    figure.style.transform = `rotateY(${imageIndex * (-theta)}rad)`;
  }

  function setupCarousel(n, s) {
    const apothem = s / (2 * Math.tan(Math.PI / n));

    figure.style.transformOrigin = `50% 50%${-apothem}px`;

    for (let i = 1; i < n; i += 1) {
        images[i].style.padding = `${gap}px`;
        images[i].style.transformOrigin = `50% 50%${-apothem}px`;
        images[i].style.transform = `rotateY(${i * theta}rad)`;
    }

    rotateCarousel(currImage);
  }

  function setupNavigation() {
    document.querySelectorAll('#carousel__prev, #carousel__next').forEach((button) => {
      button.onclick = (e) => {
        e.stopPropagation();
  
        if (e.target.classList.contains('carousel__next')) currImage += 1;
        else currImage -= 1;
  
        rotateCarousel(currImage);
      }
    })
  }

  setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  setupNavigation();
}

async function showCarousel() {
  const preloader = document.getElementById('preloader');
  const buttons = document.querySelectorAll('#carousel__prev, #carousel__next');
  const query = document.getElementById('query').value;
  const root = document.getElementById('carousel');
  const figure = root.querySelector('figure');

  figure.innerHTML = '';
  figure.style.display = 'none';
  buttons.forEach((button) => button.style.display = 'none');
  preloader.style.display = 'inline-block';

  await getImages(figure, query);

  preloader.style.display = 'none';
  figure.style.display = 'block';
  buttons.forEach((button) => button.style.display = 'block');

  carousel(root);
}

// #Task 3

function addNewItem() {
  const root = document.getElementById('TODO');
  const item = document.createElement('div');
  const button = '<button onclick="deleteItem(this)">&#10008;</button>';
  const newItem = document.getElementById('newItem').value;
  
  item.innerHTML = `${newItem}${button}`;
  item.className = 'TODO__item';

  root.append(item);
}

function showAll() {
  const { children } = document.getElementById('TODO');

  for (let i = 0; i < children.length; i += 1) {
    children[i].style.display = 'flex';
  }
}

function hideAll() {
  const { children } = document.getElementById('TODO');

  for (let i = 0; i < children.length; i += 1) {
    children[i].style.display = 'none';
  }
}

function deleteItem(item) {
  item.parentNode.remove();
}
