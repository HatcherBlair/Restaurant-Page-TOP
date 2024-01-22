const buildPage = () => {
    const page = document.createElement('div');
    page.classList.add('hidden');
    page.classList.add('main-content');

    const contactContainer = document.createElement('div');
    page.appendChild(contactContainer);

    const phone = document.createElement('p');
    phone.textContent = 'Phone Number: (555) 555 - 5555';
    contactContainer.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = "Email Address: SuperDillaContact@dilla.com";
    contactContainer.appendChild(email)

    return page;
}

module.exports = {buildPage};