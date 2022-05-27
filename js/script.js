

const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle");



toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})


function animateNav(){
    var element = document.querySelector('.sidebar');
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        $('.sidebar').addClass("animate__fadeInLeft");
    } else {
        $('.sidebar').removeClass("animate__fadeInLeft");
    }
}

function animateAside(){
    var element = document.querySelector('.content__side');
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        $('.content__side').addClass("animate__fadeInRight");
    } else {
        $('.content__side').removeClass("animate__fadeInRight");
    }
}

function animateContent(){
    var element = document.querySelector('.content__main');
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        $('.content__main').addClass("animate__fadeInDown");
    } else {
        $('.content__main').removeClass("animate__fadeInDown");
    }
}


window.addEventListener('load', () => {
    animateNav();
    animateContent();
    animateAside();
});

const today = new Date().setHours(0, 0, 0, 0);
const defaultOptions = {
    defaultViewDate: today,
    nextArrow: '>',
    prevArrow: '<',
    clearBtn: true,
    todayBtn: true,
    todayHighlight: true,
};

const date = document.getElementById('date_picker');
const datepicker = new Datepicker(date, defaultOptions);