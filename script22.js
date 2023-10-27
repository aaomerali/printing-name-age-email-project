const name_inpt = document.querySelector(".W-name");
const age_inpt = document.querySelector(".W-age");
const email_inpt = document.querySelector(".W-gmail");
const lists = document.querySelector(".lists");

const btn = document.querySelector(".create-btn");

btn.addEventListener( "click" ,  user );

function user(e) {
   
    e.preventDefault();
    
    const User = document.createElement("li");
    User.classList.add("user");
    
    
    
    const name = document.createElement("a");
    name.classList.add("P-name");
    name.innerText = name_inpt.value;

    const age = document.createElement("a");
    age.classList.add("P-age");
    age.innerText = age_inpt.value;

    const gamil = document.createElement("a");
    gamil.classList.add("P-gmail");
    gamil.innerText = email_inpt.value;
    
    User.appendChild(name);
    User.appendChild(age);
    User.appendChild(gamil);
    
    lists.appendChild(User);
    
    //remove inputs
    name_inpt.value = "";
    age_inpt.value = "";
    email_inpt.value = "";
}
        
