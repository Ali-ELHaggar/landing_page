/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const parts = document.querySelectorAll('section');
const unordered = document.querySelector('ul');
const slice = document.createDocumentFragment();
const up = document.getElementById('up');

//terminate Global Variables
// Start Helpeing Functions



//bulid the navigation bar
parts.forEach(section => {
    //Extract the data-nav value from the section and store it in const Attribute
    const navigation = section.getAttribute("data-nav");
    //Extract Id to variable
    const Attribute = section.getAttribute('id');
    //create  li
    const addedLI = document.createElement("li");
    //create  link
    const hyberLinks = document.createElement("a");
    // add navigation bar    
    hyberLinks.classList.add("menu__link");
    // get the href id
    hyberLinks.setAttribute('href', Attribute);
    // scroll between sections 
    // Scroll to sections
    hyberLinks.addEventListener('click', e => {
        e.preventDefault();
        section.scrollIntoView({ behavior: "smooth" })
    });
    // add the name of sections from the data-nav
    const text = document.createTextNode(navigation);

    hyberLinks.appendChild(text);
    addedLI.appendChild(hyberLinks);
    slice.appendChild(addedLI);
});
//add in slice to make performance improvements  
unordered.appendChild(slice);

window.addEventListener('scroll', () => {

    //  For Chek What Is Section On Screen Now and remove the active class
    const checkSection = document.getElementsByClassName('activeClass')[0];

    switch (checkSection !== undefined) {
        case 0:

            checkSection.classList.remove('activeClass')
    }
    //  For Chek What Is Section On Screen Now and remove the navigation class from the navigation bar
    const remNav = document.getElementsByClassName('navigationActive')[0];

    if (remNav !== undefined) {
        remNav.classList.remove('navigationActive')
    }

    // Set sections as on
    parts.forEach(section => {

        const react = section.getBoundingClientRect();

        if (react.top >= -50 && react.top < 394) {

            section.classList.add('activeClass');
            // Set listactive as active

            const listactive = document.querySelectorAll(`a[href='${section.id}']`)[0].parentElement;

            listactive.classList.add("navigationActive");

            // Go To up
            switch (section.id == "sectionOne") {
                case 0:
                    up.style.display = 'none';
                default:

                    up.style.display = 'block';
            }

        }
    })
})

