/*********************************************************************
* Read 'members.json' file and place qualified members into an array *
*********************************************************************/
const spotlighturl = 'data/members.json'
const membersList = [];

async function getLinkData() {
    const response = await fetch(spotlighturl);
    const data = await response.json();
	buildArray(data.members); // 'data' is the response container and 'members' is the name of the array found in the JSON file
}

const buildArray = (members) => {
    members.forEach((member) => {
        if (member.level == "Gold" || member.level == "Silver") {
            membersList.push(member);
        }
    });
    buildRandomList();
}
getLinkData();

/************************************************************************************
* Choose three members from array, remove them, build card and place them into page *
************************************************************************************/
const card = document.querySelector('#cards');

function buildRandomList() {
    for (i=0; i<3; i++) { // choose three cards from array
        let indexNumber = Math.floor(Math.random()*membersList.length); // random select an array index
        let currentMember = membersList[indexNumber]; // get value at index
        membersList.splice(indexNumber, 1); // remove just selected item from array to prevent duplicates
        let newCard = document.createElement('article');
        newCard.setAttribute('class', 'member');
        newCard.innerHTML = `<img src="${currentMember.pic}" alt="${currentMember.alt}"><p>${currentMember.slug}<br><a href="${currentMember.web}" target="_blank">${currentMember.name}</a></p>`;
        card.appendChild(newCard);
    }
}



/* <article class="member" id="mem1"><img src="images/the-spot.webp" alt="sign outside the spot coffee shop"><p>Need a quick 'pick-me-up'?  A healthy snack?  Stop by <a href="https://www.thespotkauai.com/" target="_blank">The Spot</a> and find what you need.</p></article> */

// let card = document.createElement('div');
// 		let pic = document.createElement('img');
// 		let location = document.createElement('p');
// 		let call = document.createElement('p');
// 		let url = document.createElement('a');

//         card.setAttribute('class', 'memberCard')
// 		pic.setAttribute('src', member.pic);
//         pic.setAttribute('alt', `Image of ${member.name} logo`);
//         pic.setAttribute('loading', 'lazy');
//         pic.setAttribute('max-width', '200');
//         pic.setAttribute('height', 'auto');
// 		location.textContent = `${member.address}`;
// 		call.textContent = `${member.phone}`;
// 		url.setAttribute('href', `${member.web}`);
// 		url.setAttribute('target', '_blank');
// 		url.textContent = `${member.name}`;


//         card.appendChild(pic);
//         card.appendChild(location);
//         card.appendChild(call);
//         card.appendChild(url);
//         memberList.appendChild(card);