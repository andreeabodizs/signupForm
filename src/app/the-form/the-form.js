const form = document.getElementById("white-box");
const firstName = document.getElementById("firstname");
function checkFirstName (e) {
   e.preventDefault();
    function isALetter (firstName) {
        const firstNameValue = firstName.value;
        console.log (firstNameValue);
    }
    
}
form.addEventListener('submit', checkFirstName);

