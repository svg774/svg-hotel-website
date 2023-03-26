const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");
const pswd = document.querySelector(".pswd");
const cpswd = document.querySelector(".cpswd");

fname.innerHTML = localStorage.getItem("fname");
lname.innerHTML = localStorage.getItem("lname");
phone.innerHTML = localStorage.getItem("phone");
email.innerHTML = localStorage.getItem("email");
pswd.innerHTML = localStorage.getItem("pswd");
cpswd.innerHTML = localStorage.getItem("cpswd");

setTimeout(() => {
    fname.style.display = "none";
    lname.style.display = "none";
    phone.style.display = "none";
    email.style.display = "none";
    pswd.style.display = "none";
    cpswd.style.display = "none";
},4000);
