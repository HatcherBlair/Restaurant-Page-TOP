const buildPage = () => {
    const page = document.createElement('div');
    page.classList.add('hidden');
    page.classList.add('main-content');

    const header = document.createElement('h2');
    header.textContent = 'MENU';
    page.appendChild(header);

    const breakfast = document.createElement('div');
    breakfast.textContent = "Breakfast Menu";
    page.appendChild(breakfast);

    const breakfastList = document.createElement('ul');
    breakfast.appendChild(breakfastList);

    const breakfastClassic = document.createElement('li');
    breakfastClassic.textContent = "Breakfast Classic - Eggs, Choice of Meat, and Lots of Cheese";
    breakfastList.appendChild(breakfastClassic);

    const southWestern = document.createElement('li');
    southWestern.textContent = "Southwestern - Eggs, Choice of Meat, Salsa, Black Beans, Bell Peppers, and Lots of Cheese";
    breakfastList.appendChild(southWestern);

    const greenMachine = document.createElement('li');
    greenMachine.textContent = "Green Machine - Eggs, Spinach, Salsa, Bell Peppers, and Lots of Cheese";
    breakfastList.appendChild(greenMachine);

    const lunchAndDinner = document.createElement('div');
    lunchAndDinner.textContent = 'Lunch and Dinner Menu';
    page.appendChild(lunchAndDinner);

    const lunchAndDinnerList = document.createElement('ul');
    lunchAndDinner.appendChild(lunchAndDinnerList);

    const theClassic = document.createElement('li');
    theClassic.textContent = "The Classic - just Cheese";
    lunchAndDinnerList.appendChild(theClassic);

    const theGodfather = document.createElement('li');
    theGodfather.textContent = "The God Father - Ground Beef, Tomatoes, Onions, Over Easy Egg, and Thousand Island";
    lunchAndDinnerList.appendChild(theGodfather);

    const porker = document.createElement('li');
    porker.textContent = "Porker - Pulled Pork, Housemade BBQ Sauce, Chips, and Slaw";
    lunchAndDinnerList.appendChild(porker);

    return page;
}

module.exports = {buildPage};