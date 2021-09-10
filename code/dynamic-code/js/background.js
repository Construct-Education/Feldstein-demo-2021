// IF YOU HAVE AN IMAGE THAT HAS THE ID "backgroundImage" THEN THAT WILL BE USED AS THE BODY BACKGROUND IMAGE

const backgroundImage = document.querySelector("#backgroundImage");

if (backgroundImage) {
    document.body.style.backgroundImage = `url("${backgroundImage.src}")`;
}