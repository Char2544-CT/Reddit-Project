/*Comment in Js*/

//Function 1- Checks that the username is at least 8 characters long
function validateUsername(name){
    return name.length >= 8;
}
console.log(validateUsername(billybob)); //True
console.log(validateUsername(jimmy)); //false

//Funtion 2- Add data to the table- help from Stack Overflow
function addUser(){
    //Would need to add id tag to a user input box
    //Would also need a button with "onClick" that runs addUser()
    let firstName = document.getElementById("firstName").value;
    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");
    newCell.innerHTML = firstName;
    newRow.append(newCell);
    //Table body would have an id tag of "rows"
    document.getElementById("rows").appendChild(newRow);
    document.getElementById("firstName").value = '';
}

//Function 3 - makes sure there are no spaces in a password
function validatePassword(password){
    return password.trim();
}
console.log(validatePassword("  crazyglue88  ")); //Output "crazyglue88"

//Function 4 - 
