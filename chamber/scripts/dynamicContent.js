/*************************************
* Dynamic Links Using JSON Functions *
*************************************/

const listurl = 'data/members.json'
const memberList = document.querySelector('#directory');

async function getLinkData() {
    const response = await fetch(linksurl);
    const data = await response.json();
	displayLinks(data.members); // 'data' is the response container and 'lessons' is the name of the array found in the JSON file
}

const displayLinks = (members) => {
    members.forEach((member) => {
        let assignment = document.createElement('li');
		assignment.textContent = `Week ${week.lesson}: `;
		week.links.forEach((link) => {
			let individual = document.createElement('a');
			individual.setAttribute('href', `${link.url}`);
			individual.setAttribute('target', '_blank')
			individual.textContent = `${link.title} `;
			assignment.appendChild(individual);
		})
        linkMenu.appendChild(assignment);
    });
}

getLinkData();

/***********************************
* Grid/Single column layout toggle *
***********************************/

