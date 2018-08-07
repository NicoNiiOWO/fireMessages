const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

const allMessages = document.getElementsByClassName("allMessages")[0];
//Set database object here
const database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username = usernameElement.value;
    const message = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    let json = {
        USERNAME: username,
        MESSAGE: message
    }
    database.push(json);
}

// Set database "child_added" event listener here
database.on("child_added", addMessage);
function addMessage(rowData){
    const data = rowData.val();
    console.log(data);
    let p = document.createElement("p");
    p.innerHTML = `${data.USERNAME} : ${data.MESSAGE}`
    allMessages.appendChild(p);
}