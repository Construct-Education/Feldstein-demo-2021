// JAVASCRIPT THAT CHANGES THE NEXT PAGE BUTTON TO A SPECIFIC HARD CODED LINK

const nextPageLink = "INSERT LINK HERE";
var nextBtn = document.querySelector('.module-sequence-footer-button--next > a');

nextBtn.setAttribute('href', nextPageLink);