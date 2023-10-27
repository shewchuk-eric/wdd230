const passShow = document.querySelector('#req');
const pass1 = document.querySelector('#pwd1');
const pass2 = document.querySelector('#pwd2');
const noMatch = document.querySelector('#noMatch');

pass1.addEventListener('focus', () => { // open the password requirements when field is focused
    passShow.classList.add('expanded');
})

pass1.addEventListener('focusout', () => { // close the password requirements when field loses focus
    passShow.classList.remove('expanded');
})

pass2.addEventListener('focusout', () => {
    if(pass1.value != pass2.value) {
        noMatch.classList.add('expanded');
        pass2.focus();
    } else {
        noMatch.classList.remove('expanded');
    }

})