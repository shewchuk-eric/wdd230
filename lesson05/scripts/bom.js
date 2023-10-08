const input = document.querySelector('input');
const submit = document.querySelector('button');
const chapList = document.querySelector('#list');

submit.addEventListener('click', function () { // watches for click on button
    if (input.value == '') { // checks to see that information has been entered
        alert('Please enter a book and chapter'); // line is blank so display error message
        submit.focus();
        exit;
    }
    const listItem = document.createElement('li'); // list item and button need to be created here so new ones are made
    const killButton = document.createElement('button');
    listItem.textContent = input.value; // get text from input field
    killButton.textContent = '❌';
    listItem.append(killButton); // add button to <li>
    chapList.append(listItem); // add <li> to <ul>

    killButton.addEventListener('click', function () {
        listItem.remove(); // kill button clicked - delete <li>
        input.focus(); // place cursor into input field
    });
    input.value = ''; // set input to 'blank'
});

