
function submit() {
    // alert("hello");

    const e1 = document.querySelector(".e1");
    const e2 = document.querySelector(".e2");
    const e3 = document.querySelector(".e3");
    const e4 = document.querySelector(".e4");
    const e5 = document.querySelector(".e5");
    const e6 = document.querySelector(".e6");


    const fname = document.querySelector(".fname").value;
    const lname = document.querySelector(".lname").value;
    const phone = document.querySelector(".phone").value;
    const email = document.querySelector(".email").value;
    const pswd = document.querySelector(".pswd").value;
    const cpswd = document.querySelector(".cpswd").value;


    let regfn = /^[a-zA-Z]{1,15}$/.test(fname);
    if (regfn != true || null) {
        e1.style.display = "block";
        e1.innerHTML = "*enter valid First Name...!";
    }
    else {
        e1.style.display = "none";
    }

    let regln = /^[a-zA-Z]{1,15}$/.test(lname);
    if (regln != true || null) {
        e2.style.display = "block";
        e2.innerHTML = "*enter valid Last Name...!";
    }
    else {
        e2.style.display = "none";
    }

    let regPhone = /[0-9]{10}/.test(phone);
    if (regPhone != true || null) {
        e3.style.display = "block";
        e3.innerHTML = "*enter valid Mobile number...!";
    }
    else {
        e3.style.display = "none";
    }

    let RegMail = /[a-z0-9]+\@[a-z]{1,6}\.[a-z]{1,6}/.test(email);
    if (RegMail != true || null) {
        e4.style.display = "block";
        e4.innerHTML = "*enter valid E-mail...!";
    }
    else {
        e4.style.display = "none";
    }

    if (pswd.length <= 8 || null) {
        e5.style.display = "block";
        e5.innerHTML = "*enter valid Paassword...!";
    }
    else {
        e5.style.display = "none";
    }

    if (pswd !== cpswd || null) {
        e6.style.display = "block";
        e6.innerHTML = "*enter valid Confirm Password...!";
    }
    else {
        e6.style.display = "none";
    }

    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("pswd", pswd);
    localStorage.setItem("cpswd", cpswd);

    let form = document.querySelector(".form");
    let data_btn = document.querySelector(".data-btn");

    // if (regfn == true && regln == true && regPhone == true && RegMail == true && pswd.length >= 8 && pswd === cpswd) {
    //     alert(regfn);
    // }
    if (regfn == true) {
        console.log(regfn);
        if (regln == true) {
            // console.log(regln);
            if (regPhone == true) {
                // console.log(regPhone);
                if (RegMail == true) {
                    // console.log(RegMail);
                    if (pswd.length >= 8) {
                        // console.log(pswd);
                        if (pswd == cpswd) {
                            fname.value = null;
                            // alert(fname);
                            // console.log(cpswd);
                            data_btn.style.display = "inline-block";

                            // const fname = document.querySelector(".fname").value;
                            // fname.innerHTML = " ";
                            // const lname = document.querySelector(".lname").value;
                            // lname.innerHTML = " ";
                            // const phone = document.querySelector(".phone").value;
                            // phone.innerHTML = " ";
                            // const email = document.querySelector(".email").value;
                            // email.innerHTML = " ";
                            // const pswd = document.querySelector(".pswd").value;
                            // pswd.innerHTML = " ";
                            // const cpswd = document.querySelector(".cpswd").value;
                            // cpswd.innerHTML = " ";
                            // form.reset();
                        }
                    }
                }
            }
        }
    }

    return false;
}


