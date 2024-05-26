async function login_Student_func() {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const name = document.getElementById("name").value;// שולף את הקלט מהמשתמש 
    const password = document.getElementById("password").value;

    const raw = JSON.stringify({
        "Name": name,
        "Password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    
    var response = await fetch("/students/login", requestOptions); // פונה לשרת יחד עם הבקשה שלי ומחכה לתשובה 
    const result = await response.json();  // ממיר את התשובה לjson
    const ltl = document.getElementById("ltl");
    console.log(result);
    ltl.innerHTML = result.message;

}




