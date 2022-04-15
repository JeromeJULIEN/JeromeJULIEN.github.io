var footerDisplay = document.getElementById('footer');
var btnSubmit = document.getElementById('btn_submit');

console.log(document);

function fnFooterDisplay(event) {
    event.preventDefault()
    footerDisplay.style.display = 'flex';
}

btnSubmit.addEventListener('click', fnFooterDisplay);