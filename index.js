document.getElementById('login').addEventListener('focus', () => {
    document.getElementById('input').classList.add('alignFocus')
})
document.getElementById('login').addEventListener('blur', () => {
    document.getElementById('input').classList.remove('alignFocus')
})