
// click on search
{
    let search = document.getElementById("search-icon");
    let input = document.getElementById("input-search");

    search.addEventListener("click", () => {
        input.classList.toggle("active1");
    });
}

// click on sing-in
{
    let SingIn = document.getElementById("SingIn");
    let login = document.querySelector(".Sing-in-app")

    SingIn.addEventListener("click", (eo) => {
        login.style.display = "block";
        document.querySelector("#email").focus();
    })
}

// close sing-in and sing-up
{
    let close = document.querySelectorAll(".fa-xmark");
    close.forEach(item => {
        item.addEventListener("click", (eo) => {
            eo.target.parentElement.parentElement.style.display = "none";
        })
    });
}

// click on sing-up
{
    let Singup = document.getElementById("Singup");
    let logup = document.querySelector(".Sing-up-app");

    Singup.addEventListener("click", (eo) => {
        logup.style.display = "block";
    })
}

// click on cancel Except inside sing-up
{
    let Cancel = document.getElementById("Cancel");
    Cancel.addEventListener("click", (eo) => {
        eo.target.parentElement.parentElement.parentElement.parentElement.style.display = "none";
    });
}

// click on toggle visible nav 
{
    let toggle = document.querySelector(".nav-toggle > .fa-circle-left");
    let toggle1 = document.querySelector(".nav-toggle > .fa-circle-right");
    let link = document.querySelectorAll(".nav ul li a")
    let nav = document.querySelector(".nav ul");

    
    toggle.addEventListener("click", (eo) => {
        toggle.style.display = "none" ;
        toggle1.style.display = "block" ;
        // nav.classList.toggle("active2");
        nav.classList.add("navain");
        nav.classList.remove("navaine1");
        nav.style.visibility = "visible" ;
    })

    toggle1.addEventListener("click", (eo) => {
        toggle1.style.display = "none" ;
        toggle.style.display = "block" ;
        // nav.classList.toggle("active2");
        nav.classList.remove("navain");
        nav.classList.add("navaine1");
        
    })

    link.forEach(item => {

        item.addEventListener("click" , (eo) => {
            nav.classList.toggle("navain");
            toggle1.style.display = "none" ;
            toggle.style.display = "block" ;
            
        })

    });
}

// setInterval on header > icon > `Mizuo!`
{
    let i = 0;
const set = () => {
    const title = document.getElementById("car");
    const titleCopy = `Mizuo!`;
    title.textContent = titleCopy.slice(0, i);
    i++;
    if (i > titleCopy.length) {
        // clearInterval(stop);
        i = 0;
    }
    
}
const stop = setInterval(set, 1000);


let k = 0;

const setApp = () => {

    const titledd = document.getElementById("carMizuo");
    const titleCopyApp = `Mizuo!`;
    titledd.textContent = titleCopyApp.slice(0, k);
    k++;
    if (k > titleCopyApp.length) {
        // clearInterval(stop);
        k = 1;
    }
}
const stopshow = setInterval( setApp , 1200 );
}

// scrollY <= 100 ">" by.classList.add("animation")

{
    // window.onscroll = function () {

    // ddd();
    
    // }

    // const ddd = () => {
    //     if (this.scrollY <= 100 ){
    //         by.classList.add("animation");
    //     }
    //     else{
    //         by.classList.remove("animation");
    //     }
    // }
}


