// ******************* CODE TO OPERATE THE BASE PROGRAM ********************

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
    displayList(input.value); // line not blank, process input
    chaptersArray.push(input.value); // put the current item into array
    setChapterList(); // send value to function that builds the line into the window along with delete button
    input.value = ''; // clear input field
    input.focus(); // send cursor back to input field
});

function displayList(userValue) {
    const listItem = document.createElement('li'); // list item and button need to be created here so new ones are made
    const killButton = document.createElement('button');
    listItem.textContent = userValue; // get text from input field
    killButton.textContent = '❌';
    listItem.append(killButton); // add delete button to <li>
    chapList.append(listItem); // add <li> to <ul>

    killButton.addEventListener('click', function () {
        listItem.remove(); // kill button clicked - delete <li>
        deleteChapter(listItem);
        input.focus(); // place cursor into input field
    });
    input.value = ''; // set input to 'blank'
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
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
});
