const nav = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

const navigationMenu = () => {

    let navUI = ``;
    // looping all sections
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionNav}</a></li>`;

    });
    // append all elements to the navigation
    nav.innerHTML=navUI;

};
navigationMenu();
