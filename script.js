const orange = document.getElementById('orange');
const lightgreen = document.getElementById('lightgreen');
const paste = document.getElementById('paste');
const lightblue = document.getElementById('lightblue');
const purple = document.getElementById('purple');
const maroon = document.getElementById('maroon');
const wrapper = document.getElementById('wrapper');


function controlBtn() {
  document.getElementById('color-box').classList.toggle('showBox');
}

orange.addEventListener('click', function () {
  wrapper.classList.add('orange-bar');
  wrapper.classList.remove(
    'lightgreen-bar',
    'paste-bar',
    'lightblue-bar',
    'purple-bar',
    'maroon-bar'
  );
});

lightgreen.addEventListener('click', function () {
  wrapper.classList.add('lightgreen-bar');
  wrapper.classList.remove(
    'orange-bar',
    'paste-bar',
    'lightblue-bar',
    'purple-bar',
    'maroon-bar'
  );
});

paste.addEventListener('click', function () {
  wrapper.classList.add('paste-bar');
  wrapper.classList.remove(
    'orange-bar',
    'lightgreen-bar',
    'lightblue-bar',
    'purple-bar',
    'maroon-bar'
  );
});


lightblue.addEventListener('click', function () {
  wrapper.classList.add('lightblue-bar');
  wrapper.classList.remove(
    'orange-bar',
    'lightgreen-bar',
    'paste-bar',
    'purple-bar',
    'maroon-bar'
  );
});

purple.addEventListener('click', function () {
  wrapper.classList.add('purple-bar');
  wrapper.classList.remove(
    'orange-bar',
    'lightgreen-bar',
    'paste-bar',
    'lightblue-bar',
    'maroon-bar'
  );
});


maroon.addEventListener('click', function () {
  wrapper.classList.add('maroon-bar');
  wrapper.classList.remove('orange-bar', 'lightgreen-bar', 'paste-bar', 'lightblue-bar', 'purple-bar');
});
