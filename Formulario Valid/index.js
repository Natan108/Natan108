let boton =document.getElementById('btn');
let input =document.querySelector('input');
let emaile=document.getElementById('email');
let pase =document.getElementById('contraseña');
let Namee=document.getElementById('Name');



boton.addEventListener('click', function(){


    let email=document.getElementById('email').value;
    let pas =document.getElementById('contraseña').value;
    let Name=document.getElementById('Name').value;
    let Valid="Exiten campos vacios";
    let p=document.getElementById('war')


    if( Name == "" , email == "", pas == ""){
        alert("Empty field");
        Namee.style.borderBlockColor= "red";
        emaile.style.borderBlockColor= "red";
        pase.style.borderBlockColor= "red";
        p.style.opacity= 1;
        
       


    }
    else{
        console.log("Datos validados");
        Namee.style.borderBlockColor= "white";
        emaile.style.borderBlockColor= "white";
        pase.style.borderBlockColor= "white";
        p.style.opacity= 0;

       

    };
    

});



