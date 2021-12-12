// window.addEventListener('scroll', function(){
//     const header = document.querySelector('header nav');
//     const subNav = document.querySelector('.sub-navigation nav');
//     const subTitle = document.querySelector('.sub-navigation div h1')
    
//     header.classList.toggle('unset', window.scrollY <= 800);
//     subNav.classList.toggle('fixed', window.scrollY >= 800);
//     subTitle.classList.toggle('fixed', window.scrollY >= 800);
// })

const header = document.querySelector('header nav');
const subNav = document.querySelector('.sub-navigation nav');
const about = document.querySelector('.sub-navigation div h1');
const projects = document.querySelector('#projects .title-tag h1');
const moreProjects = document.querySelector('#more-projects div h1');
const contact = document.querySelector('#contact div h1');
const sectionHeader = document.querySelector('header');
const sectionProjects = document.querySelector('#projects');
const sectionMoreProjects = document.querySelector('#more-projects');
const sectionContact = document.querySelector('#contact');

const sectionOptions = {
    rootMargin: "-15% 0% 0% 0%"
};

const sectionHeaderObsever = new IntersectionObserver (
    function(entries, sectionHeaderObsever){
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add('unset');
                subNav.classList.add('fixed');
                about.classList.add('fixed');
            } else {
                header.classList.remove('unset');
                subNav.classList.remove('fixed');
                about.classList.remove('fixed');
            }
        });
    },
    sectionOptions);
    sectionHeaderObsever.observe(sectionHeader)

    const sectionProjectsObsever = new IntersectionObserver (
        function(entries, sectionProjectsObsever){
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    about.classList.add('fixed');
                    projects.classList.add('fixed');
                } else {
                    projects.classList.remove('fixed');
                }
            });
        },
        sectionOptions);
        sectionProjectsObsever.observe(sectionProjects)
    