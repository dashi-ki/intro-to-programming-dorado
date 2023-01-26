const today = new Date (); // Today's date
const thisYear = today.getFullYear(); // Retrieve the current year from today's date
const footer = document.querySelector('footer'); // Select <footer> tag
const copyright = document.createElement('p'); // Create <p>

copyright.innerHTML = `&copy; Daria Tolkachova ${thisYear}` // Add name and year into <p>
footer.appendChild(copyright); // Add <p> with the text into <footer>

const skills = ['HTML', 'CSS', 'JavaScript']; // Create array of skills
const skillsSection = document.querySelector('#skills'); // Select #skills section
const skillsList = skillsSection.querySelector('ul'); // Select <ul> element

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
} // Iterate over skills array, create <li> element for each skill and display the list on the page


const messageFrom = document.querySelector('[name="leave_message"]');

//Handle Message Form Submit
messageFrom.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target);
    const name = event.target.name;
    const email = event.target.email;
    const message = event.target.message;
    console.log(`${name.value} + ${email.value} + ${message.value}`);
    
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('li');

    newMessage.insertAdjacentHTML(
        'afterbegin',
        `<a href="mailto:${email.value}">${name.value}</a> wrote: <br> <span>${message.value} </span>`
    )

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', (event) => {
        const entry = removeButton.parentNode;
        entry.remove();
    })
    
    
    newMessage.appendChild(removeButton);
    messageList.append(newMessage);

    messageFrom.reset();

    
});

// Projects XML HTTP request
var projectsList = [];
const githubRequest = new XMLHttpRequest();
githubRequest.addEventListener('load', function() {
    projectsList = JSON.parse(githubRequest.response);
    renderHTMLfor(projectsList);
});
githubRequest.open('GET', 'https://api.github.com/users/dashi-ki/repos');
githubRequest.send();


function renderHTMLfor(projects) {
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');

    for (project of projectsList) {
        const projectItem = document.createElement('li');
        const projectLink = document.createElement('a');
        projectLink.textContent = project.name;
        projectLink.href = project.html_url;
        projectLink.target = '_blank'
        projectItem.appendChild(projectLink);
        projectList.appendChild(projectItem);
    }
}