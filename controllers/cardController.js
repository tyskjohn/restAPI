const db = require('mongoose');
const Card = require('../models/card');

//unrestricted
exports.getCards = (req,res) => {

    let _cards = [
        { _id: 1, img: 'https://images.pexels.com/photos/2331583/pexels-photo-2331583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', title: 'Card', text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', footer: 'Updated 3 mins ago', alt: 'boxtitle' },
        { _id: 2, img: 'https://images.pexels.com/photos/2290439/pexels-photo-2290439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Card', text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', footer: 'Updated 1 mins ago', alt: 'boxtitle'  },
        { _id: 3, img: 'https://images.pexels.com/photos/2289387/pexels-photo-2289387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', title: 'Card', text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', footer: 'Updated 6 mins ago',  alt: 'boxtitle' },
        { _id: 4, img: 'https://images.pexels.com/photos/2291591/pexels-photo-2291591.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Card', text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', footer: 'Updated 34 mins ago',  alt: 'boxtitle' },
        { _id: 5, img: 'https://images.pexels.com/photos/2278646/pexels-photo-2278646.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Card', text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', footer: 'Updated 64 mins ago',  alt: 'boxtitle' },
        { _id: 6, img: 'https://images.pexels.com/photos/2271683/pexels-photo-2271683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Card', text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', footer: 'Updated 5 mins ago',  alt: 'boxtitle' },
    ];

    return res.status(200).json(_cards);
}

exports.getCard = (req,res) => {

    let _card= [
        { _id: 1, img: 'IMG-1', title: 'Card', text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', footer: 'Updated 3 mins ago', alt: 'boxtitle' },
    ];

    return res.status(200).json(_card);

}
