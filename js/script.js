

const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle");

toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})


function animateNav(){
    let element = document.querySelector('.sidebar');
    let position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        $('.sidebar').addClass("animate__fadeInLeft");
    } else {
        $('.sidebar').removeClass("animate__fadeInLeft");
    }
}

function animateContent(){
    let header = document.querySelector('.content__title');
    let positionHeader = header.getBoundingClientRect();

    if (positionHeader.top < window.innerHeight && positionHeader.bottom >= 0) {
        $('.content__title').addClass("animate__fadeInDown");
    } else {
        $('.content__title').removeClass("animate__fadeInDown");
    }

    /////////title
    let title = document.querySelector('.title');
    let positionTitle = title.getBoundingClientRect();

    if (positionTitle.top < window.innerHeight && positionTitle.bottom >= 0) {
        $('.title').addClass("animate__fadeInDown");
    } else {
        $('.title').removeClass("animate__fadeInDown");
    }

    /////////progress item
    let progress = document.querySelector('.courses__item');
    let positionProgress = progress.getBoundingClientRect();

    if (positionProgress.top < window.innerHeight && positionProgress.bottom >= 0) {
        $('.courses__item').addClass("animate__fadeInTopRight");
    } else {
        $('.courses__item').removeClass("animate__fadeInTopRight");
    }

    //////courses table
    let courses = document.querySelector('.mycourses');
    let positionCourses = courses.getBoundingClientRect();

    if (positionCourses.top < window.innerHeight && positionCourses.bottom >= 0) {
        $('.mycourses').addClass("animate__fadeInUp");
    } else {
        $('.mycourses').removeClass("animate__fadeInUp");
    }
}

function animateAside(){
    let element = document.querySelector('.content__side');
    let position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        $('.content__side').addClass("animate__fadeInRight");
    } else {
        $('.content__side').removeClass("animate__fadeInRight");
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


///// preloader
let overlay = document.getElementById("preloader");
window.addEventListener('load', function () {
    overlay.style.display = 'none';
})

//progress item
const progressBox = document.querySelectorAll('.progress__item');
progressBox.forEach(item => {
    item.addEventListener('click',()=>{
        for (let i = 0; i < progressBox.length; i++){
            progressBox[i].classList.remove('progress--active');
        }
        item.classList.add('progress--active');
    })
    
});

//menu item
const menuLink = document.querySelectorAll('.sidebar__menuLink');
menuLink.forEach(link => {
    link.addEventListener('click',()=>{
        for (let i = 0; i < menuLink.length; i++){
            menuLink[i].classList.remove('sidebar__menuLink--active');
        }
        link.classList.add('sidebar__menuLink--active');
    })
});

// courses table
const tableRow = document.querySelectorAll('.mycourses__table tbody tr');
tableRow.forEach(link => {
    link.addEventListener('click',()=>{
        for (let i = 0; i < tableRow.length; i++){
            tableRow[i].classList.remove('tr--active');
        }
        link.classList.add('tr--active');
    })
    
});

/* const btnEdit = document.querySelector('.btn_edit');
btnEdit.addEventListener('click',()=>{
    document.querySelector('.profile_name').contentEditable = true;
    document.querySelector('.profile_state').contentEditable = true;
}) */