function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const avatar = document.querySelector('#profile img')
    if (html.classList.contains('light')) {
        avatar.setAttribute('src', "https://allnickk.github.io/LinkHub/src/avatar-light.png")
    } else {
        avatar.setAttribute('src', "https://allnickk.github.io/LinkHub/src/avatar.png")
    }
}