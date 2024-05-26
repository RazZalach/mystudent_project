async function add_Student_func() {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    const name = document.getElementById("name").value;// שולף את הקלט מהמשתמש 
    const age = document.getElementById("age").value;
    const grades = document.getElementById("grades").value;
    const password = document.getElementById("password").value;


    let grades_array = grades.split(','); // נרמול נתנונים  ( על פי דעת המתכנת) 
    grades_array = grades_array.map(grade => grade.trim());

    const raw = JSON.stringify({
        Name: name,
        Age: age,
        Grades: grades_array,
        Password: password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };


    var response = await fetch("/students/add", requestOptions); // פונה לשרת יחד עם הבקשה שלי ומחכה לתשובה 
    const result = await response.json();  // ממיר את התשובה לjson
    console.log(result);

}

