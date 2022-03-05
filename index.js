const header = document.querySelector('header nav');
const subNav = document.querySelector('.sub-navigation');
const activeAbout = document.querySelector('.sub-navbar .nav-items .about');
const activeProjects = document.querySelector('.sub-navbar .nav-items .projects');
const activeContact = document.querySelector('.sub-navbar .nav-items .contact');
const about = document.querySelector('.sub-navigation .about-tag h1');
const projects = document.querySelector('.sub-navigation .projects-tag h1');
const moreProjects = document.querySelector('.sub-navigation .more-projects-tag h1');
const contact = document.querySelector('.sub-navigation .contact-tag h1');
const sectionHeader = document.querySelector('header');
const sectionAbout = document.querySelector('#about');
const sectionProjects = document.querySelector('#projects');
const sectionMoreProjects = document.querySelector('#more-projects');
const sectionContact = document.querySelector('#contact');

const options = {
    rootMargin: "-15% 0% 0% 0%"
};
const newOptions = {
    threshold:0.85,
    rootMargin: "70% 0% 0% 0%"
}

const HeaderObserver = new IntersectionObserver (
    function(entries, HeaderObserver){
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add('unset');
                subNav.classList.add('fixed');
            } else {
                header.classList.remove('unset');
                subNav.classList.remove('fixed');
            }
        });
    },
    options);
    HeaderObserver.observe(sectionHeader)


const aboutObserver = new IntersectionObserver (
    function(entries, aboutObserver){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                about.classList.add('fixed');
                activeAbout.classList.add('active');
            } else {
                about.classList.remove('fixed');
                activeAbout.classList.remove('active');
            }
        });
    },
    options);
    aboutObserver.observe(sectionAbout)

const projectsObserver = new IntersectionObserver (
    function(entries, projectsObserver){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projects.classList.add('fixed');
                activeProjects.classList.add('active');
            } else {
                projects.classList.remove('fixed');
                activeProjects.classList.remove('active');
            }
        });
    },
    newOptions);
    projectsObserver.observe(sectionProjects)

const moreProjectsObserver = new IntersectionObserver (
    function(entries, moreProjectsObserver){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                moreProjects.classList.add('fixed');
                activeProjects.classList.add('active');
            } else {
                moreProjects.classList.remove('fixed');
                activeProjects.classList.remove('active');
            }
        });
    },
    newOptions);
    moreProjectsObserver.observe(sectionMoreProjects)

const contactObserver = new IntersectionObserver (
    function(entries, contactObserver){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contact.classList.add('fixed');
                activeContact.classList.add('active');
            } else {
                contact.classList.remove('fixed');
                activeContact.classList.remove('active');
            }
        });
    },
    newOptions);
    contactObserver.observe(sectionContact)

    // Footer year Automated
    document.getElementById("footer-year").innerHTML = new Date().getFullYear();

    let timeline = new gsap.timeline({defaults: {ease: Circ.easeOut }});
    const player = document.querySelector(".success-animation");
    let send = document.querySelector(".send");
    timeline.paused(true);
    timeline.to(".seq", {y: 40, opacity: 0, stagger: .05})
    timeline.to(".contact-box", {opacity: 0},  "-=.4")
    timeline.to(".env-text", { opacity: 1, duration: 5, y: 30}, "+=5")

    send.addEventListener("click", () => {
        timeline.play()
        setTimeout(() => {
        player.play()
        }, 800)
    });



    // function send() {
    //         timeline.play();
    //         setTimeout(() => {
    //             player.play()
    //         }, 800)
    // }