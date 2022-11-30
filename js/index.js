const today = new Date (); // today's date
const thisYear = today.getFullYear(); // retrieve the current year from today's date
const footer = document.querySelector('footer'); // select <footer> tag
const copyright = document.createElement('p'); // Create <p>

copyright.innerHTML = `Daria Tolkachova ${thisYear}` // Add name and year into <p>
footer.appendChild(copyright); // Add <p> with the text into <footer>

const skills = ['HTML', 'CSS', 'JS']; // Create array of skills
const skillsSection = document.querySelector('#skills'); // Select #skills section
const skillsList = skillsSection.querySelector('ul'); // Select <ul> element

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
} // Iterate over skills array, create <li> element for each skill and display the list on the page


