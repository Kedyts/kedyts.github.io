/* ===========================
   KEDYTS WEBSITE V2
=========================== */

/* Loader */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";
loader.style.visibility = "hidden";

},1200);

});

/* Scroll Progress */

const progress = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop = document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const width = (scrollTop / height) * 100;

progress.style.width = width + "%";

});

/* Back To Top */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* Navbar */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.padding="12px 24px";

navbar.style.background="rgba(12,12,12,.85)";

}else{

navbar.style.padding="16px 28px";

navbar.style.background="rgba(20,20,20,.55)";

}

});

/* Fade Animation */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("fade-up");

observer.observe(section);

});

/* Counter */

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let current=0;

const speed=target/80;

const update=()=>{

current+=speed;

if(current<target){

counter.innerText=Math.floor(current)+"+";

requestAnimationFrame(update);

}else{

if(target==200){

counter.innerText="200K+";

}

else if(target==90){

counter.innerText="90M+";

}

else{

counter.innerText="500+";

}

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});