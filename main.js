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

function filterKyu(e) {
  let filterBtns = document.getElementsByClassName('btn-filter')
  let tasks = document.getElementsByClassName('accordion-item')
  let kyu = e.target.innerText
  let c = 0

  
  for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].classList.remove('kyu')
  }
  e.target.classList.add('kyu')
  
  for (let i = 0; i < tasks.length; i++) {
    let text = tasks[i].children[0].children[0].innerHTML.trim().split(' ')
    text.splice(0, 1)
    text = text.join(' ')
    if (kyu === 'All') {
      tasks[i].children[0].children[0].innerHTML = `${i+1}. ${text}`
      tasks[i].style.display = 'block'
    } else {
      tasks[i].style.display = 'none'
      if (tasks[i].className.search(kyu) !== -1) {
        tasks[i].style.display = 'block'
        c++
        tasks[i].children[0].children[0].innerHTML = `${c}. ${text}`
      };
    }
  }


}
/////////////////////////////////////////////////////////
// function generateHashtag (str) {
//   hashtag = []
//   str = str.trim()
//   if (str.length === 0) return false
//   if (str.length > 1) {
//   str = str.trim().split(' ')
//   str = str.filter(s => s !== '')
  
//   for (s of str ) {
//   s = s.split('')
//   s[0] = s[0].toUpperCase()
//   s = s.join('')
//   hashtag.push(s)
//   }
//   hashtag = `#${hashtag.join('')}`
//   }
//   return (hashtag.length > 140)? false : hashtag
//   }
  
//   console.log(generateHashtag(" Hello there thanks for trying my Kata"))
//   console.log(generateHashtag(" Hello World "))