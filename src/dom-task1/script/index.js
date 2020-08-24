function divInside_1() {
  const nodes = document.getElementById('task-1').getElementsByTagName('div');

  for (let i = 0, l = nodes.length; i < l; i += 1) {
    if (nodes[i].parentElement.tagName === 'DIV') {
      nodes[i].style.borderColor = '#32CD32';
    }
  }
}

function divInside_2() {
  const nodes = document.getElementById('task-1').querySelectorAll('div > div');

  nodes.forEach((item) => {
    item.style.borderColor = '#FF6347';
  });

}

function writeInConsole() {
  console.log($('#task-2').val());
}

function changeColor() {
  $('#task-3').css('background-color', $('#background-color').val());
}

function randomDiv() {
  const parentHeight = document.getElementById('random-div').offsetHeight;
  const parentWidth = document.getElementById('random-div').offsetWidth;
  const height = Math.floor(Math.random() * (101 - 20) + 20);
  const width = Math.floor(Math.random() * (101 - 20) + 20);
  const borderWidth = Math.floor(Math.random() * (21 - 1) + 1);
  const div = document.createElement('div');
  div.innerHTML = '<strong>DIV</strong>';
  div.style.position = 'absolute';
  div.style.top = `${Math.floor(Math.random() * (parentHeight - height - borderWidth * 2))}px`;
  div.style.left = `${Math.floor(Math.random() * (parentWidth - width - borderWidth * 2))}px`;
  div.style.height = `${height}px`;
  div.style.width = `${width}px`;
  div.style.display = 'flex';
  div.style.justifyContent = 'center';
  div.style.alignItems = 'center';
  div.style.overflow = 'hidden';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = `${borderWidth}px`;
  div.style.borderRadius = `${Math.floor(Math.random() * 101)}%`;
  div.style.borderColor = `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`;
  div.style.backgroundColor = `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`;
  div.style.color = `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`;
  document.getElementById('random-div').append(div);
}

function addRandomDiv() {
  for (let i = 0; i < 5; i += 1) randomDiv();
}

function addDiv() {
  const centerY = Math.floor(document.getElementById('move-div').offsetHeight / 2);
  const centerX = Math.floor(document.getElementById('move-div').offsetWidth / 2);
  const radius = 100;
  const divArr = [];

  for (let i = 0; i < 5; i += 1) {
    const div = document.createElement('div');
    document.getElementById('move-div').append(div);
    divArr.push(div);
  }

  for (let i = 0; i < 5; i += 1) {
    let x = centerX - 20 + radius * Math.cos((2 * Math.PI * (i + 2)) / 5);
    let y = centerY - 20 + radius * Math.sin((2 * Math.PI * (i + 2)) / 5);

    divArr[i].style.top = `${y}px`;
    divArr[i].style.left = `${x}px`;
  }
}

function moveDiv() {
  const divArr = document.getElementById('move-div').getElementsByTagName('div');
  const centerY = Math.floor(document.getElementById('move-div').offsetHeight / 2);
  const centerX = Math.floor(document.getElementById('move-div').offsetWidth / 2);
  let radius = 100;
  let inc = 1;
  let i = 1;

  setInterval(() => {
    for (let j = 1; j <= 5; j += 1) {
      const x = centerX - 20 + radius * Math.cos((2 * Math.PI * (i * j)) / 360 + (2 * Math.PI * (j + 2)) / 5);
      const y = centerY - 20 + radius * Math.sin((2 * Math.PI * (i * j)) / 360 + (2 * Math.PI * (j + 2)) / 5);

      divArr[j - 1].style.top = `${y}px`;
      divArr[j - 1].style.left = `${x}px`;
    }

    i += 1;
    radius -= inc;

    if (radius === 0) inc = -1;
    if (radius === 100) inc = 1;
  }, 20);
}

function textColor() {
  $('textarea').css('color', $('#text-color').val());
}

function textBackground() {
  $('textarea').css('background-color', $('#text-background').val());
}

const tags = [
  'cms', 'javascript', 'js',
  'ASP.NET MVC', '.net', '.net',
  'css', 'wordpress', 'xaml',
  'js', 'http', 'web',
  'asp.net', 'asp.net MVC', 'ASP.NET MVC',
  'wp', 'javascript', 'js',
  'cms', 'html', 'javascript',
  'http', 'http', 'CMS',
];

function generateTagCloud(tags, min, max) {
  const eachElement = [];
  const entries = [];

  for (let i = 0, l = tags.length; i < l; i += 1) {
    if (!eachElement.includes(tags[i])) eachElement.push(tags[i]);
  }

  for (let i = 0, l = eachElement.length; i < l; i += 1) {
    entries.push(0);

    for (let j = 0, m = tags.length; j < m; j += 1) {
      if (eachElement[i] === tags[j]) entries[i] += 1;
    }
  }

  for (let i = 0, l = eachElement.length; i < l; i += 1) {
    const tag = document.createElement('span');
    tag.innerText = `${eachElement[i]}`;
    tag.style.fontSize = `${min + entries[i] >= max ? max : min + entries[i]}px`;
    document.getElementById('tag-cloud').append(tag);
  }

  console.log(entries);
}

function addTags() {
  generateTagCloud(tags, 17, 42);
}
