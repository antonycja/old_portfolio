const header = document.querySelector('header nav');
const subNav = document.querySelector('.sub-navigation');
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
                // about.classList.add('fixed');
            } else {
                header.classList.remove('unset');
                subNav.classList.remove('fixed');
                // about.classList.remove('fixed');
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
            } else {
                about.classList.remove('fixed');
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
            } else {
                projects.classList.remove('fixed');
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
            } else {
                moreProjects.classList.remove('fixed');
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
            } else {
                contact.classList.remove('fixed');
            }
        });
    },
    newOptions);
    contactObserver.observe(sectionContact)

