// JAVASCRIPT THAT ALLOWS YOU TO CUSTOMIZE THE NEXT AND PREV BUTTONS LINKS BY INCLUDING THEM NEW LINKS AND TEXT IN THE ACTUAL PAGE
const replaceButtonContainers = document.querySelectorAll(".replace-button");
const canvasButtonContainer = document.querySelector('.module-sequence-footer-content');

const initReplaceNavigationButttons = () => {
    replaceButtonContainers.forEach(container => {
        const replaceOperation = container.getAttribute('data-replaces');
        const buttonType = container.getAttribute('data-buttontype');
        const buttonWidth = container.getAttribute('data-width');
        const buttonToReplace = container.innerHTML;

        const createNewButton = () => {
            const newNavButton = document.createElement('span');
            newNavButton.classList.add(`module-sequence-footer-button--${buttonType}`);
            newNavButton.innerHTML = String(buttonToReplace);
            if (buttonWidth) {
                newNavButton.style.width = buttonWidth;
            }
            canvasButtonContainer.appendChild(newNavButton);
        }

        if (replaceOperation === 'all') {
            canvasButtonContainer.innerHTML = "";
            createNewButton();
        } else if (replaceOperation === 'none') {
            createNewButton();
        }
    });
}


if (replaceButtonContainers) { initReplaceNavigationButttons() }