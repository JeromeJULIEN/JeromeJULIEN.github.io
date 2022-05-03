var footerDisplay = document.getElementById('footer');
var footerDisplay1 = document.getElementById('footer1');
var footerDisplay2 = document.getElementById('footer2');
var footerDisplay3 = document.getElementById('footer3');
var btnSubmit = document.getElementById('btn_submit');
var JSform = document.querySelectorAll('input');

function strUcFirst(a){return (a+'').charAt(0).toUpperCase()+a.substr(1);}

function fnFooterDisplay(event) {
    event.preventDefault()
    footerDisplay.style.display = 'flex';
    // footerDisplay1.style.display = 'none';
    // footerDisplay2.style.display = 'none';
    // footerDisplay3.style.display = 'none';
    // for (var i = 0; i < JSform.length; i++) {
    //     if ( JSform[i].checked === true ) {
    //         var footerNb = document.getElementById('footer'+(i+1));
    //         footerNb.style.display = 'flex';
    //         footerNb.style.flexDirection = 'column'
    //         footerNb.style.alignItems = 'center'
    //         console.log(footerNb);
    //     } else {
           
    //     }

    // }
    
};

function mailTo(event) {
    let selectedDateValue = document.querySelector('input[name="date"]:checked').value;
    let name = document.querySelector('input[name="prenom"]').value;
    let telephone = document.querySelector('input[name="telephone"]').value;
    let selectedDateText ='';
    switch (selectedDateValue) {
        case '1' :
            selectedDateText += `est disponible le 29 mai pour l'anniversaire d'Arthur. Vous pouvez nous joindre au ${telephone} pour nous confirmer la date retenue`;
            break;
        case '2' :
            selectedDateText += `est disponible le 4 juin pour l'anniversaire d'Arthur. Vous pouvez nous joindre au ${telephone} pour nous confirmer la date retenue`;
            break;
        case '3' :
            selectedDateText += `est disponible le 29 mai et le 4 juin pour l'anniversaire d'Arthur. Vous pouvez nous joindre au ${telephone} pour nous confirmer la date retenue`;
            break;
        case '4' :
            selectedDateText += `n'est hélas disponible à aucune des 2 dates pour l'anniversaire d'Arthur. Vous pouvez nous joindre au ${telephone} en cas de changement`;
            break;
    }
    
    open(`mailto:jejulien@gmail.com?subject=Disponibilité ${strUcFirst(name)} pour anniversaire Arthur&body=Bonjour, ${strUcFirst(name)} ${selectedDateText}.`);
} ;


btnSubmit.addEventListener('click', fnFooterDisplay);

btnSubmit.addEventListener('click', mailTo);