// ******************* CODE TO OPERATE THE BASE PROGRAM ********************

// localStorage.clear(); //--> empties local storage = uncomment to clear storage during testing

const input = document.querySelector('input');
const submit = document.querySelector('button');
const chapList = document.querySelector('#list');
let chaptersArray = getChapterList() || []; // uses 'or' to assign an empty array if the function returns nothing (null, undefined) 

submit.addEventListener('click', () => { // watches for click on button
    if (input.value == '') { // checks to see that information has been entered
        alert('Please enter a book and chapter'); // line is blank so display error message
        submit.focus();
        exit;
    }
    let newAddition = displayList(input.value); // line not blank, process input
    chaptersArray.push(newAddition); // put the current item into array
    setChapterList(); // send value to function that builds the line into the window along with delete button
    input.value = ''; // clear input field
    input.focus(); // send cursor back to input field
});

function displayList(newAddition) {
    let listItem = document.createElement('li'); // list item and button need to be created here so new ones are made
    let killButton = document.createElement('button');
    listItem.textContent = newAddition; // get text from input field
    killButton.textContent = '❌';
    killButton.classList.add('delete');
    listItem.append(killButton); // add delete button to <li>
    chapList.append(listItem); // add <li> to <ul>

    killButton.addEventListener('click', function () {
        listItem.remove(); // delete <li> from screen
        deleteChapter(listItem.textContent); // delete <li></li> from chaptersArray >> need textContent because that's what's inside array (no 'X') so full listItem doesn't match filter
        input.focus(); // place cursor into input field
    });
    input.value = ''; // set input to 'blank'
    return newAddition;
}


// ******************* CODE TO MANAGE LOCAL STORAGE ********************

function setChapterList() {
    localStorage.setItem('myBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myBOMList'));
}

function deleteChapter(chapter) {
    chapter=chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item != chapter); // remove 'X' because when existing list is imported at doc.load it will add the 'X' >> prevents multiple 'X'
    setChapterList();
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
});
