let btn = document.getElementById('button-1');
let solutioHeight = 0;
changeBtnText = (x) => {
  btn = document.getElementById(x);
  if (btn.innerText === 'Show Solution') {
    btn.innerText = 'Hide Solution';
  } else {
    btn.innerText = 'Show Solution'
  }
  // setTimeout(() => {

  //   solutioHeight = btn.parentElement.offsetHeight
  //   console.log(btn.parentElement, solutioHeight, btn.parentElement.offsetTop);
  // }, 1000)
}

function buttonTxt(e) {

  btn.innerText = 'Show Solution'
  btn.parentElement.children[1].classList.remove('show')
  if (e.target.className.indexOf('collapsed') === -1) {
    btn.classList.add('collapsed');
  }

  setTimeout(() => {
    e.target.scrollIntoView(true);
    // window.scroll(0, e.target.offsetTop)
  }, 1000)

  // console.log(e);
}

/////////////////////////////////////////////////////////
