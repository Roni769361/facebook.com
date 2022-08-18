function logingbtn(){
    const em = document.getElementById("exampleInputEmail1").value;
    const pa = document.getElementById("exampleInputPassword1").value;
    if(em == "" || pa == ""){
        alert("Sorry, Please input the input filled")

    }
    else{
        document.getElementById("javascript").style.display = 'block';
    }


    const inputsystem = document.getElementById("exampleInputEmail1").value;
    // console.log(inputsystem);

    document.getElementById("emailorphone").innerText = inputsystem;
    document.getElementById("exampleInputEmail1").value = "";

    const inputsyestempass = document.getElementById("exampleInputPassword1").value;
    // console.log(inputsyestempass);
    document.getElementById("passwordhear").innerText = inputsyestempass;
    document.getElementById("exampleInputPassword1").value = "";

}