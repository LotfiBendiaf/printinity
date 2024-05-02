"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_CATEGORIES = void 0;
exports.PRODUCT_CATEGORIES = [
    {
        label: 'Vetements',
        value: 'vetements',
        featured: [
            {
                name: 'T-Shirt',
                href: "/products?category=vetements&sort=desc",
                imageSrc: '/categories/image.png',
            },
            {
                name: 'Sweat-Shirt',
                href: "/products?category=vetements&sort=desc",
                imageSrc: '/categories/image-3.png',
            },
            {
                name: 'Casquettes',
                href: "/products?category=vetements",
                imageSrc: '/categories/image-14.png',
            }
        ]
    },
    {
        label: 'Art',
        value: 'art',
        featured: [
            {
                name: 'Tableaux',
                href: "/products?category=art&sort=desc",
                imageSrc: '/categories/image-9.png',
            },
            {
                name: 'Sculptures',
                href: "/products?category=art",
                imageSrc: '/categories/image-10.jpg',
            },
            {
                name: 'Trophés',
                href: "/products?category=art",
                imageSrc: '/categories/image-12.jpeg',
            },
        ]
    },
    {
        label: 'Brochures',
        value: 'brochures',
        featured: [
            {
                name: 'Flayers',
                href: "/products?category=brochures&sort=desc",
                imageSrc: '/categories/image-11.png',
            },
            {
                name: 'Cartes visites',
                href: "/products?category=brochures",
                imageSrc: '/categories/image-12.png',
            },
            {
                name: 'Fiches',
                href: "/products?category=brochures",
                imageSrc: '/categories/image-13.jpg',
            },
        ]
    },
    {
        label: 'Cadeaux',
        value: 'cadeaux',
        featured: [
            {
                name: 'Porte-Cle',
                href: "/products?category=cadeaux&sort=desc",
                imageSrc: '/categories/image-10.png',
            },
            {
                name: 'Chopes',
                href: "/products?category=cadeaux",
                imageSrc: '/categories/image-8.png',
            },
        ]
    },
];
