const input = document.querySelector('input'); // get value of input field
const submit = document.querySelector('button');
const chapList = document.querySelector('#list');

submit.addEventListener('click', function () { // watches for click on button
    if (input.value == '') { // checks to see that information has been entered
        alert('Please enter a book and chapter'); // line is blank so display error message
        submit.focus();
        exit;
    }
    const listItem = document.createElement('li');
    const killButton = document.createElement('button');
    listItem.textContent = input.value;                 //innerHTML = `${input.value}  ${killButton}`;
    killButton.textContent = '❌';                  //chapList.appendChild(listItem);
    listItem.append(killButton);
    chapList.append(listItem);

    killButton.addEventListener('click', function () {
        chapList.removeChild(li);
        input.focus();
        input.value = '';
    });
});

                                                          //const deleteB = document.querySelector('.remove');

