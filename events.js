const button = document.querySelector('button'); 

button.addEventListener('click', () => {
  let date=new Date()
  console.log(date);
});

function validateForm() {
    var textBoxValue = document.getElementById("textbox").value;
    if (textBoxValue.trim() === "") {
        alert("Text box cannot be empty!");
        return false; 
    }
    return true; 
}

let x = 10;
console.log(x); // Output: 10
/*This can help you understand which parts of your code are being executed and in what order.*/

// Function to set a cookie
function setCookie(cookieName, cookieValue, expirationDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}


function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}


function checkCookie(cookieName) {
    const cookieValue = getCookie(cookieName);
    if (cookieValue !== "") {
        console.log("Cookie '" + cookieName + "' exists with value: " + cookieValue);
        return true;
    } else {
        console.log("Cookie '" + cookieName + "' does not exist.");
        return false;
    }
}
setCookie("username", "John Doe", 7); 
const username = getCookie("username"); 
console.log("Username:", username);
checkCookie("username");

// Creating a JSON object
const person = {
    firstName: "ram",
    lastName: "kumar",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};


console.log("First Name:", person.firstName); 
console.log("Last Name:", person.lastName);
console.log("Age:", person.age); 
console.log("City:", person.address.city); 
console.log("Country:", person.address.country); 


//Debugging in JavaScript involves identifying and fixing errors or unexpected behavior in your code. 

//Cookies are small pieces of data stored on a user's computer by websites they visit