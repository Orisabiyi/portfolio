'use strict';

const headerName = document.querySelector('.header__name');
const profileName = 'Orisabiyi David,';
let i = 0;


const typingEffect = function () {
  if (i < profileName.length) {
    headerName.textContent += profileName[i];
    i++;
    setTimeout(typingEffect, 300);
  }
}

typingEffect();