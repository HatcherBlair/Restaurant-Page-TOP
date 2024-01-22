const buildPage = () => {

    const abstract = document.createElement('p');
    abstract.textContent = "Super Dilla has been chefin' up the best darn quesadillas you've ever had since 2024." +
                            " We offer dillas for breakfast lunch and dinner with all sorts of fillings and toppigns!" +
                            " Come on in and try one of our delicious dillas today!";

    const hoursContainer = document.createElement('div');

    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = "Hours";
    hoursContainer.appendChild(hoursHeader);

    const sundayHours = document.createElement('p');
    sundayHours.textContent = "Sunday: 8am - 10pm";
    hoursContainer.appendChild(sundayHours);

    const mondayHours = document.createElement('p');
    mondayHours.textContent = "Monday: 6am - 12am";
    hoursContainer.appendChild(mondayHours);

    const tuesdayHours = document.createElement('p');
    tuesdayHours.textContent = "Tuesday: 6am - 12am";
    hoursContainer.appendChild(tuesdayHours);

    const wednesdayHours = document.createElement('p');
    wednesdayHours.textContent = "Wednesday: 6am - 12am";
    hoursContainer.appendChild(wednesdayHours);

    const thursdayHours = document.createElement('p');
    thursdayHours.textContent = "Thursday: 6am - 12am";
    hoursContainer.appendChild(thursdayHours);

    const fridayHours = document.createElement('p');
    fridayHours.textContent = "Friday: 6am - 12am";
    hoursContainer.appendChild(fridayHours);

    const saturdayHours = document.createElement('p');
    saturdayHours.textContent = "Saturday: 8am - 10pm";
    hoursContainer.appendChild(saturdayHours);

    const page = document.createElement('div');
    page.appendChild(abstract);
    page.appendChild(hoursContainer);
    return page;
};

module.exports = {buildPage};