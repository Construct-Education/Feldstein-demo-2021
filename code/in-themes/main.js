//INJECTING CODE INTO CANVAS USING A DIV AND A FILE STORED IN THE ACTUAL COURSE

// RUN THE SCAN FUNCTION FOR ANY DIV ONCE YOU GET TO THIS FILE
window.onload = function() {
    detectCodeInjector();
}

function detectCodeInjector() {
    // FIND DIVS(s) WITH THE CLASS page-code-injector
    const injectors = document.querySelectorAll('.page-code-injector');

    // IF THERE ISNT A DIV ESCAPE THE FUNCTION
    if (!(injectors)) { return }

    // IF THERE IS RUN A LOOP FOR EACH DIV 
    else {
        injectors.forEach(injector => {

            const link = injector.children[0].getAttribute('href');

            switch (true) {
                case (injector.hasAttribute('data-css')):
                    addExtraCSS(link);
                    break;

                case (injector.hasAttribute('data-js')):
                    addExtraJS(link);
                    break;

                default:
                    return;
            }
        })
    }
}


function addExtraJS(location) {
    const newScriptTag = document.createElement('script');
    newScriptTag.type = 'text/javascript';
    newScriptTag.src = location;

    document.body.appendChild(newScriptTag);
}

function addExtraCSS(location) {
    const newCssTag = document.createElement('link');
    newCssTag.rel = 'stylesheet';
    newCssTag.href = location;

    document.head.appendChild(newCssTag);
}



// ACCORDIONS
const accordions = document.querySelectorAll('.accordion');

const initAccordions = () => {
    accordions.forEach(accordion => {
        const accordionHeadings = accordion.querySelectorAll('ul > li');

        accordionHeadings.forEach(heading => {
            heading.addEventListener('click', e => {
                const currentlyOpen = accordion.querySelector('.visible');
                currentlyOpen.classList.remove('visible');
                currentlyOpen.classList.add('hidden');

                const toOpen = accordion.querySelector(`#${heading.getAttribute('aria-controls')}`);
                toOpen.classList.add('visible');
                toOpen.classList.remove('hidden');

                const currentlyOpenHeading = accordion.querySelector('.text-white.bg-blue-900');
                if (currentlyOpenHeading) {
                    currentlyOpenHeading.classList.remove('text-white', 'bg-blue-900');
                }
                heading.classList.add('text-white', 'bg-blue-900');

            })
        });
        accordionHeadings[0].click();
    });
}

if (accordions) {
    initAccordions();
}