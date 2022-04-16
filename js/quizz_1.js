var footerDisplay = document.getElementById('footer');
var footerDisplay1 = document.getElementById('footer1');
var footerDisplay2 = document.getElementById('footer2');
var footerDisplay3 = document.getElementById('footer3');
var btnSubmit = document.getElementById('btn_submit');
var JSform = document.querySelectorAll('input');



function fnFooterDisplay(event) {
    event.preventDefault()
    footerDisplay.style.display = 'flex';
    footerDisplay1.style.display = 'none';
    footerDisplay2.style.display = 'none';
    footerDisplay3.style.display = 'none';
    for (var i = 0; i < JSform.length; i++) {
        if ( JSform[i].checked === true ) {
            var footerNb = document.getElementById('footer'+(i+1));
            footerNb.style.display = 'flex';
            footerNb.style.flexDirection = 'column'
            footerNb.style.alignItems = 'center'
            console.log(footerNb);
        } else {
           
        }

    }
    
}

btnSubmit.addEventListener('click', fnFooterDisplay);