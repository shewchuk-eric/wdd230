/*************************************
* Dynamic Links Using JSON Functions *
*************************************/

const listurl = 'data/members.json'
const memberList = document.querySelector('#content');

async function getLinkData() {
    const response = await fetch(listurl);
    const data = await response.json();
	displayLinks(data.members); // 'data' is the response container and 'lessons' is the name of the array found in the JSON file
}

const displayLinks = (members) => {
    members.forEach((member) => {
        let card = document.createElement('div');
		let pic = document.createElement('img');
		let location = document.createElement('p');
		let call = document.createElement('p');
		let url = document.createElement('a');

        card.setAttribute('class', 'memberCard')
		pic.setAttribute('src', member.pic);
        pic.setAttribute('alt', `Image of ${member.name} logo`);
        pic.setAttribute('loading', 'lazy');
        pic.setAttribute('max-width', '200');
        pic.setAttribute('height', 'auto');
		location.textContent = `${member.address}`;
		call.textContent = `${member.phone}`;
		url.setAttribute('href', `${member.web}`);
		url.setAttribute('target', '_blank');
		url.textContent = `${member.name}`;


        card.appendChild(pic);
        card.appendChild(location);
        card.appendChild(call);
        card.appendChild(url);
        memberList.appendChild(card);
    });
}

getLinkData();


/**************************
* Grid/List layout toggle *
**************************/

const gridbutton = document.querySelector("#grid");
const display = document.querySelector("#content");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.toggle("grid");
	display.classList.toggle("list");
});