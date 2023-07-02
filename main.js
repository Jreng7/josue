function toggleMode() {
  const html = document.documentElement

  if(html.classList.contains('light')) {
    html.classList.add('light')
  } else {
    html.classList.remove('light')
  }
}