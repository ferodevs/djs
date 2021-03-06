//? ------------------------------------------------------------------------------------
//?
//?  /home/auth.js
//?  Discord JS
//?
//?  Developed by Cooper Beltrami
//?
//?  Project built using designs, graphics and other assets developed by Discord Inc.
//?  Copyright (c) 2021 Cooper Beltrami and Discord Inc. All Rights Reserved
//?     
//? ------------------------------------------------------------------------------------

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        const mobile = document.getElementById('loginButtonMobile');
        const desktop = document.getElementById('loginButtonDesktop');

        desktop.innerText = 'Open Discord';
        desktop.setAttribute('href', '/channels/@me');

        mobile.innerText = 'Open Discord';
        mobile.setAttribute('href', '/channels/@me');
    }
});