function toggleMode() {
  const html = document.documentElement

<<<<<<< HEAD
  if(!html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
=======
  if(html.classList.contains('light')) {
>>>>>>> d840f7ef98776b9b65236e6ba4a5c1ec3fd3dc5d
    html.classList.add('light')
  } else {
    html.classList.remove('light')
  }
}