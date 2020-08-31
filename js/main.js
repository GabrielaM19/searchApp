const input = document.querySelector('.search');
const listOfObjects = document.querySelectorAll('li');

input.addEventListener('keyup', function getWord(e) {
    const text = e.target.value.toLowerCase();

    listOfObjects.forEach(el => {

        if(el.textContent.toLowerCase().indexOf(text) !== -1){
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }

    });
});