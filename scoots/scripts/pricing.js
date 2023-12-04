/*******************************************
* Dynamic Rental Pricing Tables Using JSON *
*******************************************/

const listurl = 'data/pricing.json'; // set url for stored data location
const pricingList = document.querySelector('#content'); // link content to location in web view file

async function getLinkData() {
    const response = await fetch(listurl);
    const data = await response.json();
	displayLinks(data.rentals); // 'data' is the response container and 'rentals' is the name of the array found in the JSON file
}

const displayLinks = (rentals) => {
    rentals.forEach((price) => { 
        let newTable = document.createElement('table');
        let resHalf = `${price.pricing[0].reservation[0].half}`;
        let resFull = `${price.pricing[0].reservation[0].full}`;
        let walkHalf = `${price.pricing[0].walkin[0].half}`;
        let walkFull = `${price.pricing[0].walkin[0].full}`;
        let cap = `${price.capacity} passengers`;
        if (price.capacity =='1') {
            cap = `1 person`;
        }
        let tableContent = `<thead>
            <tr>
                <th colspan="3" scope="row">${price.name} ${price.type}</th>
            </tr>
            <tr>
                <th colspan="3" scope="row"><img src=${price.pic} width="150" height="113" loading="lazy"></th>
            </tr>
            <tr>
                <th>''</th>
                <th>Half Day (3hours)</th>
                <th>Full Day</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Capacity</td>
                <td colspan="2" scope="row">${cap}</td>
            </tr>
            <tr>
                <td>Reservation</td>
                <td>$${resHalf}</td>
                <td>$${resFull}</td>
            </tr>
            <tr>
                <td>Walk-In</td>
                <td>$${walkHalf}</td>
                <td>$${walkFull}</td>
            </tr>
        </tbody>`;

        newTable.innerHTML = `${tableContent}`;
        pricingList.appendChild(newTable)
    });
}

getLinkData();