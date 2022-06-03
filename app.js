var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
window.addEventListener("DOMContentLoaded", () => {
  // //!  LOADER
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    if (loader != null) loader.style.opacity = 0;
    setTimeout(function () {
      if (loader != null) loader.style.display = "none";
    }, 500);
  }, 1500);

  // ! Accordion
    const accordion = document.querySelectorAll(".accordion");
    accordion.forEach(acc => {
      acc.addEventListener('click', () => {
        acc.classList.toggle('active')
        const panel = acc.nextElementSibling
        if(panel.style.maxHeight) {
          panel.style.maxHeight = null
        }else{
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      })
    })
  // ! Anime js

  let h1_courses = document.querySelector('.h1_courses'),
  h1_students = document.querySelector('.h1_students'),
  h1_teacher = document.querySelector('.h1_teacher'),
  h1_years = document.querySelector('.h1_years');

  anime({
  targets: h1_courses,
  innerHTML: [0, 5],
  easing: 'linear',
  round: 1,

  translateX: {
    value: 20,
    duration: 800
  },
  });
  anime({
  targets: h1_students,
  innerHTML: [0, 200],
  easing: 'linear',
  round: 1,

  translateX: {
    value: 20,
    duration: 800
  },
  });
  anime({
  targets: h1_teacher,
  innerHTML: [0, 15],
  easing: 'linear',
  round: 1,

  translateX: {
    value: 20,
    duration: 800
  },
  });
  anime({
  targets: h1_years,
  innerHTML: [0,4],
  easing: 'linear',
  round: 10000,

  translateX: {
    value: 20,
    duration: 800
  },
  });
});


// ! DARK-THEME
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

if (floating_btn !== null) {
  floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
  })
}

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

// MULTI-LANGUAGE
let l;

(localStorage.getItem('language') == null) ? setLanguage('ru') : false;
$.ajax({
  url: '/public/langs/' + localStorage.getItem('language') + '.json',
  dataType: 'json',
  async: false,
  success: lang => {
    l = lang
  }
});

function setLanguage(lang) {
  localStorage.setItem('language', lang);
}

const select_lang = document.querySelector('#select-lang');
select_lang.onchange = () => {
  setLanguage(select_lang.value);
  location.reload();
}

select_lang.value = localStorage.getItem('language');

$('#header-main').text(l.header.main);
$('#header-courses').text(l.header.courses);
$('#header-about').text(l.header.about);
$('#header-team').text(l.header.team);
$('#header-our-students').text(l.header.ourStudents);
$('#cards-easy-learning').text(l.cards.easyLearning);
$('#cards-easy-learning-text').text(l.cards.easyLearningText);
$('#cards-reliable-courses').text(l.cards.reliableCourses);
$('#cards-reliable-courses-text').text(l.cards.reliableCoursesText);
$('#cards-accessories').text(l.cards.accessories);
$('#cards-accessories-text').text(l.cards.accessoriesText);
$('#our-courses').text(l.ourCourses);
$('#course-for-children').text(l.courses.forChildren);
$('#course-for-teenagers').text(l.courses.forTeenagers);
$('#course-math').text(l.courses.math);
$('#course-ielts').text(l.courses.ielts);
$('#course-enroll').text(l.courseEnroll);
$('#team').text(l.ourTeam);


// COURSES SWITCHER
const course_title = document.querySelector('#course-title');
const course_desc = document.querySelector('#course-desc');
const course_img = document.querySelector('#course-img');

const courses = {
  'for-children': document.querySelector('#courses-for-children'),
  'for-teenagers': document.querySelector('#courses-for-teenagers'),
  'math': document.querySelector('#courses-math'),
  'ielts': document.querySelector('#courses-ielts'),
}

courses['for-children'].onclick = () => {
  course_title.innerHTML = l.courseParts.forChildren;
  course_desc.innerHTML = l.courseParts.forChildrenText;
  course_img.src = './public/images/courses/math.png';
}

courses['for-teenagers'].onclick = () => {
  course_title.innerHTML = l.courseParts.forTeenagers;
  course_desc.innerHTML = l.courseParts.forTeenagersText;
  course_img.src = './public/images/courses/math.png';
}

courses['math'].onclick = () => {
  course_title.innerHTML = l.courseParts.math;
  course_desc.innerHTML = l.courseParts.mathText;
  course_img.src = './public/images/courses/math.png';
}

courses['ielts'].onclick = () => {
  course_title.innerHTML = l.courseParts.ielts;
  course_desc.innerHTML = l.courseParts.ieltsText;
  course_img.src = './public/images/courses/math.png';
}

courses['for-children'].click();

// !!!!!11111111111111111111111111111111111115555555555555555555555555555555555555555555

const navAnime = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelector(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

  navLinks.forEach((link,index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkMove 0.5s ease
        forwards ${
          index / 7  + 40
        }s`;
    }
  })
    burger.classList.toggle("toggle")
  });
}

navAnime()

// dd

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});