import project01 from './../img/projects/01.png';
import project01Big from './../img/projects/01-big.jpg';

import project02 from './../img/projects/02.jpg';
import project02Big from './../img/projects/02-big.jpg';

import project03 from './../img/projects/03.jpg';
import project03Big from './../img/projects/03-big.jpg';

import project04 from './../img/projects/04.jpg';
import project04Big from './../img/projects/04-big.jpg';

import project05 from './../img/projects/05.jpg';
import project05Big from './../img/projects/05-big.jpg';

import project06 from './../img/projects/06.jpg';
import project06Big from './../img/projects/06-big.jpg';

import project07 from './../img/projects/07.jpg';
import project07Big from './../img/projects/07-big.jpg';

import project08 from './../img/projects/08.jpg';
import project08Big from './../img/projects/08-big.jpg';

import project09 from './../img/projects/09.jpg';
import project09Big from './../img/projects/09-big.jpg';
import project10 from './../img/projects/10.jpg';
import project10Big from './../img/projects/10-big.jpg';
import project11 from './../img/projects/11.jpg';
import project11Big from './../img/projects/11-big.jpg';
import project12 from './../img/projects/12.jpg';
import project12Big from './../img/projects/12-big.jpg';

const projects = [
    {
        id: '0',
        title: 'Tesla',
        descriptionKey: 'projectss.tesla.description',  // Используем ключ для перевода
        img: project01,
        imgBig: project01Big,
        gitHubLink: 'https://alterenok.github.io/Tesla/',
        technologies: ['HTML', 'CSS', 'JS']
    },
    {
        id: '1',
        title: 'Apple headphones',
        descriptionKey: 'projectss.appleHeadphones.description',  // Ключ для перевода
        img: project02,
        imgBig: project02Big,
        gitHubLink: 'https://alterenok.github.io/Apple-headphones/',
        technologies: ['HTML', 'CSS', 'JS'],
        type: 'concept'
    },
    {
        id: '2',
        title: 'Scroll-animation',
        descriptionKey: 'projectss.scrollAnimation.description',  // Ключ для перевода
        img: project05,
        imgBig: project05Big,
        gitHubLink: 'https://alterenok.github.io/Scroll-animation/',
        technologies: ['HTML', 'CSS', 'JS', 'GSAP'],
        type: 'concept'
    },
    {
        id: '3',
        title: 'Mercedes concept',
        descriptionKey: 'projectss.mercedesConcept.description',  // Ключ для перевода
        img: project04,
        imgBig: project04Big,
        gitHubLink: 'https://alterenok.github.io/Mercedes-AVTR/',
        technologies: ['HTML', 'CSS', 'JS', 'JQuery'],
        type: 'concept'
    },
    {
        id: '4',
        title: 'Fairy parallax',
        descriptionKey: 'projectss.fairyParallax.description',  // Ключ для перевода
        img: project03Big,
        imgBig: project03,
        gitHubLink: 'https://alterenok.github.io/Parallax3d-scrolling/',
        technologies: ['HTML', 'JS', 'CSS', 'GSAP'],
        type: 'concept'
    },
    {
        id: '5',
        title: 'Price cards',
        descriptionKey: 'projectss.priceCards.description',  // Ключ для перевода
        img: project06,
        imgBig: project06Big,
        gitHubLink: 'https://alterenok.github.io/Price-cards/',
        technologies: ['HTML', 'CSS', 'Flexbox', 'Sass'],
        type: 'concept'
    },
    {
        id: '6',
        title: 'Crappo',
        descriptionKey: 'projectss.crappo.description',  // Ключ для перевода
        img: project07,
        imgBig: project07Big,
        gitHubLink: 'https://alterenok.github.io/Crappo-crypto-site/#',
        technologies: ['HTML', 'CSS', 'JS', 'Animation'],
        type: 'concept'
    },
    {
        id: '7',
        title: 'Rentiz',
        descriptionKey: 'projectss.rentiz.description',  // Ключ для перевода
        img: project08,
        imgBig: project08Big,
        gitHubLink: 'https://alterenok.github.io/Rentiz-website/',
        technologies: ['HTML', 'Scss', 'JS', 'Animation'],
        type: 'concept'
    },
    {
        id: '8',
        title: 'Bean & Leaf',
        descriptionKey: 'projectss.beanAndLeaf.description',  // Ключ для перевода
        img: project09,
        imgBig: project09Big,
        gitHubLink: 'https://alterenok.github.io/Bean-Leaf/',
        technologies: ['HTML', 'Scss', 'JS', 'Slider'],
        type: 'concept'
    },
    {
        id: '9',
        title: 'E-commerse watches',
        descriptionKey: 'projectss.watches.description',  // Ключ для перевода
        img: project11,
        imgBig: project11Big,
        gitHubLink: 'https://alterenok.github.io/Rolex-watch/',
        technologies: ['HTML', 'Scss', 'JS'],
        type: 'concept'
    },
    {
        id: '10',
        title: 'Beauty by Mariia',
        descriptionKey: 'projectss.beautyByMariia.description',  // Ключ для перевода
        img: project10,
        imgBig: project10Big,
        gitHubLink: 'https://beauty-by-mariia.com',
        technologies: ['HTML', 'CSS', 'JS', 'Wordpress'],
        type: 'commercial'
    },
    {
        id: '11',
        title: 'TAR Messdienst',
        descriptionKey: 'projectss.TAR.description',  // Ключ для перевода
        img: project12,
        imgBig: project12Big,
        gitHubLink: 'https://alterenok.github.io/Tar/',
        technologies: ['HTML', 'SCSS', 'JS'],
        type: 'commercial'
    }
];
export { projects };
