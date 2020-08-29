// #Task 
(() => {
  $('#nesting > div').find('div').hide();

  const nodes = $('#nesting').find('div');

  for (let i = 0; i < nodes.length; i += 1) {
    if (nodes[i].children.length === 0) {
      $(nodes[i]).addClass('tree icon-doc-text');
      $(nodes[i]).prepend('no_name.docx');
    } else {
      $(nodes[i]).addClass('tree icon-folder');
      $(nodes[i]).prepend('folder');
    }
  }

  $('#nesting').click((e) => {
    const children = $(e.target).children();

    if (!children.is(':visible')) {
      $(e.target).toggleClass('icon-folder icon-folder-open');
      children.show();
    } else {
      $(e.target).toggleClass('icon-folder-open icon-folder');
      children.hide();
    }
  });
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
  const figure = root.find('figure');
  const images = figure.children();
  const n = images.length;
  const gap = 0;
  const theta = (2 * Math.PI) / n;
  let currImage = 0;

  function rotateCarousel(imageIndex) {
    figure.css('transform', `rotateY(${imageIndex * (-theta)}rad)`);
  }

  function setupCarousel(n, s) {
    const apothem = s / (2 * Math.tan(Math.PI / n));

    figure.css('transformOrigin', `50% 50%${-apothem}px`);

    for (let i = 1; i < n; i += 1) {
      $(images[i]).css({
        'padding': `${gap}px`,
        'transformOrigin': `50% 50%${-apothem}px`,
        'transform': `rotateY(${i * theta}rad)`,
      });
    }

    rotateCarousel(currImage);
  }

  function setupNavigation() {
    $('#carousel__prev, #carousel__next').click((e) => {
      e.stopPropagation();

      if ($(e.target).hasClass('carousel__next')) currImage += 1;
      else currImage -= 1;

      rotateCarousel(currImage);
    });
  }

  setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  setupNavigation();
}

async function showCarousel() {
  const preloader = $('#preloader');
  const buttons = $('#carousel__prev, #carousel__next');
  const query = $('#query').val();
  const root = $('#carousel');
  const figure = $(root).find('figure')

  figure.text('')
  figure.hide();
  buttons.hide();
  preloader.show();

  await getImages(figure, query);

  preloader.hide();
  figure.show();
  buttons.show();

  carousel(root);
}

// #Task 3

function addNewItem() {
  const root = $('#TODO');
  const item = document.createElement('div');
  const button = '<button onclick="deleteItem(this)">&#10008;</button>';
  
  item.innerHTML = `${$('#newItem').val()}${button}`;
  item.className = 'TODO__item';

  root.append(item);
}

function showAll() {
  $('#TODO').children().show();
}

function hideAll() {
  $('#TODO').children().hide();
}

function deleteItem(item) {
  $(item.parentNode).remove();
}
