import './style.css';
import Logo from './images/logo.png';
import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';

// Home, Contact, and Menu page
// Global so that buildNavBar() can acess them
const homePageDOM = homePage.buildPage();
const contactPageDOM = contactPage.buildPage();
const menuPageDOM = menuPage.buildPage();

// Builds the nav bar
const buildNavBar = () => {
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');

    const home = document.createElement('p');
    home.textContent = "Home";
    navBar.appendChild(home);
    // Hides the other two pages and shows selected one
    home.addEventListener('click', () => {
        homePageDOM.classList.remove('hidden');
        menuPageDOM.classList.add('hidden');
        contactPageDOM.classList.add('hidden');
    })

    const menu = document.createElement('p');
    navBar.appendChild(menu);
    menu.textContent = "Menu";
    menu.addEventListener('click', () => {
        homePageDOM.classList.add('hidden');
        menuPageDOM.classList.remove('hidden');
        contactPageDOM.classList.add('hidden');
    })

    const contact = document.createElement('p');
    navBar.appendChild(contact);
    contact.textContent = "Contact";
    contact.addEventListener('click', () => {
        homePageDOM.classList.add('hidden');
        menuPageDOM.classList.add('hidden');
        contactPageDOM.classList.remove('hidden');
    })

    return navBar;
}

// Builds the header
const buildHeader = () => {

    const header = document.createElement('div');
    header.classList.add('header');

    const nameContainer = document.createElement('div');
    header.appendChild(nameContainer);

    const logo = new Image();
    logo.src = Logo;
    logo.classList.add('logo');
    nameContainer.appendChild(logo);
        
    const tagLine = document.createElement('p');
    tagLine.textContent = 'Super Dilla - The best Dillas';
    nameContainer.appendChild(tagLine);

    const navBar = buildNavBar();
    header.appendChild(navBar);

    return header;
}

const docBody = document.querySelector('#content');
docBody.appendChild(buildHeader());
docBody.appendChild(homePageDOM);
docBody.appendChild(contactPageDOM);
docBody.appendChild(menuPageDOM);