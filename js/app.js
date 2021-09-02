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

const navBarUl = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
// function to create nav bar and its list items
const addList = () => {
    // loop about each section
    for (const section of sections) {
        // get the section with data-nav attribute and store it in variable
        const secDataNav = section.getAttribute("data-nav");
        // create list item
        const listItem = document.createElement("li");
        listItem.setAttribute("id", section.dataset.nav)
        // create anchor
        const aLink = document.createElement("a");
        // give the link the same data-nav of the section
        aLink.innerHTML = secDataNav;
        // add class menu__link to the link 
        aLink.classList.add("menu__link");
        // append the link into the list
        listItem.appendChild(aLink);
        navBarUl.appendChild(listItem);
        // scrollintoview to scroll smoothy to section when you click the list item
        listItem.addEventListener("click", () => {section.scrollIntoView({behavior:"smooth"})});
}
}
addList();

const activeSection = () => {
    for (const section of sections) {
        const actlink = document.querySelector(`#${section.dataset.nav}`);
        // getboundingclientrect to check if the section in the viewport
        if (section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top < 350){
            section.classList.add("your-active-class");
            actlink.classList.add("active-link");
        }else{
            section.classList.remove("your-active-class");
            actlink.classList.remove("active-link");
        }
    }
};
window.addEventListener("scroll" ,activeSection);
