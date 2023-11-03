function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const avatar = document.querySelector('#profile img')
    if (html.classList.contains('light')) {
        avatar.setAttribute('src', '.src/avatar-light.png')
    } else {
        avatar.setAttribute('src', './src/avatar.png')
    }
}