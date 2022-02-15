function checkLoginCreds() {
    let emString = document.getElementById("emValid").value;
    let passWord = document.getElementById("psValid").value;

    let emilPat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let result = emString.match(emilPat)

    let passPat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    let result2 = passWord.match(passPat)

    let noInfo = document.forms["enForm"]["usName"].value;
    let noInfo2 = document.forms["enForm"]["psWord"].value;


    if (noInfo=== "" || noInfo2 === "") {
        alert("Populate all fields!");
    } else if (!result) {
        alert("Invalid email!");
        return false;
    } else if (!result2) {
        alert("Invalid password!");
        return false;
    } else {
        // This is where php will push validated user into txt file to be stored!
        alert("Access Granted, Welcome in!");
    }
}

function revealPass() {
    let fd = document.getElementById("psValid");

    if (fd.type === "password") {
        fd.type = "text";
    } else {
        fd.type = "password";
    }
}

function clearForm() {
    document.getElementById("unDo").reset();
}