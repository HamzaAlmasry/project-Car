
// click navbar scroll offsetTop sections

{let home = document.querySelector(".home"),
    cars = document.querySelector(".cars"),
    productApp = document.getElementById("product"),
    about = document.querySelector(".about"),
    aboutApp = document.getElementById("about"),
    partsc = document.querySelector(".parts"),
    partsApp = document.getElementById("parts"),
    blog = document.querySelector(".blog"),
    blogApp = document.getElementById("Blog"),
    teams = document.querySelector(".teams"),
    teamApp = document.querySelector(".team");

home.onclick = function(){
    window.scrollTo({
        top : 0 ,
        behavior : "smooth",
    });
};

cars.onclick = function(){
    window.scrollTo({
        top : productApp.offsetTop - 200 ,
        behavior : "smooth",
    });
};

about.onclick = function(){
    window.scrollTo({
        top : aboutApp.offsetTop - 200 ,
        behavior : "smooth",
    });
};
partsc.onclick = function(){
    window.scrollTo({
        top : partsApp.offsetTop - 200 ,
        behavior : "smooth",
    });
};
    blog.onclick = function(){
        window.scrollTo({
            top : blogApp.offsetTop - 200 ,
            behavior : "smooth",
        });
};

teams.onclick = function(){
    window.scrollTo({
        top : teamApp.offsetTop - 200 ,
        behavior : "smooth",
    });
};
}

// scroll animation 

{let product = document.querySelectorAll(".product-item");


const options = {}

const observer = new IntersectionObserver((enteries) => {

    enteries.forEach(el => {
        el.target.classList.toggle("aun", el.isIntersecting)  
    });

} , options)

product.forEach(item => {
    observer.observe(item)
});


let carParts = document.querySelectorAll(".parts-item");

const parts = new IntersectionObserver((partsitem) =>{

    partsitem.forEach(el => {
        el.target.classList.toggle("ani-parts", el.isIntersecting)  
    });
} , options)

carParts.forEach(item => {
    parts.observe(item)
});

let card = this.document.querySelectorAll(".profile-card");

const partss = new IntersectionObserver((partsitems) =>{

    partsitems.forEach(el => {
        el.target.classList.toggle("anim", el.isIntersecting)  
    });
} , options)

card.forEach(item => {
    partss.observe(item)
});


}


let header = document.querySelector(".header-contrenir");

window.onscroll = function(){
    if(this.scrollY > 100){
        header.style.background = "rgba(196, 208, 200, 0.986)";
    }else{
        header.style.background = "transparent";
    }
}

window.addEventListener("resize", (e) => {
    let Home = document.querySelector(".Home-App");
    Home.style.height = window.innerHeight + "px" ;

});

