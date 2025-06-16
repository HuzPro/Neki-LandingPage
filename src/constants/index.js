import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, customer3, customer4, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#products", label: "Featured" },
    { href: "/#about-us", label: "About Us" },
    { href: "/#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        id: 'shoe-1',
        name: "Neki Near Norpan-01",
        description: "Perfect for walking over life's disappointments.",
        price: "$200.20",
        rating: 4.5,
    },
    {
        imgURL: shoe5,
        id: 'shoe-2',
        name: "Neki Lair Lordan-10",
        description: "Perfect for walking over life's disappointments.",
        price: "$210.20",
        rating: 4.5,
    },
    {
        imgURL: shoe6,
        id: 'shoe-3',
        name: "Neki Bear Borgan-100",
        description: "Perfect for walking over life's disappointments.",
        price: "$220.20",
        rating: 4.5,
    },
    {
        imgURL: shoe7,
        id: 'shoe-4',
        name: "Neki Hair Hordan-001",
        description: "Perfect for walking over life's disappointments.",
        price: "$230.20",
        rating: 4.5,
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy jittery shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worrisome transactions with our vulnerable payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our lazy team is here to assist you some steps of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Grey',
        rating: 4.5,
        feedback: "I've been using this product for a few weeks now, and I can honestly say it's changed my life for the better. It's made my life easier, more organized, and more productive. I highly recommend it to anyone looking for a similar solution."
    },
    {
        imgURL: customer2,
        customerName: 'Ethan James',
        rating: 4.0,
        feedback: "This is my second purchase of this product, and I'm just as impressed as I was the first time around. The quality is consistently excellent, and the customer service is fantastic. I'm a loyal customer for life!"
    },
    {
        imgURL: customer3,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "This is easily the best product of its kind on the market. I'm so impressed with its functionality, durability, and overall design. I can't recommend it highly enough."
    },
    {
        imgURL: customer4,
        customerName: 'Emily Abigail',
        rating: 5.0,
        feedback: "This product went above and beyond my wildest dreams. It's beautifully designed, incredibly well-made, and even more functional than I imagined. I'm so impressed, and I can't wait to recommend it to all my friends and family."
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Horse 1", link: "/" },
            { name: "Air Bob 1", link: "/" },
            { name: "Air Jargon 1", link: "/" },
            { name: "Air Source 2", link: "/" },
            { name: "Neki Waffle Maker", link: "/" },
            { name: "Neki Distorts", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "#about-us" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@neki.com", link: "mailto:customer@neki.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", href: "https://www.facebook.com/" },
    { src: twitter, alt: "twitter logo", href: "https://twitter.com/" },
    { src: instagram, alt: "instagram logo", href: "https://www.instagram.com/" },
];
