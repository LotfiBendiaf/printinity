"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_CATEGORIES = void 0;
exports.PRODUCT_CATEGORIES = [
    {
        label: 'T-Shirt',
        value: 'tshirt',
        featured: [
            {
                name: 'Nouveautés',
                href: "/products?category=tshirt&sort=desc",
                imageSrc: '/categories/image.png',
            },
            {
                name: 'Meilleures ventes',
                href: "/products?category=tshirt",
                imageSrc: '/categories/image-2.png',
            }
        ]
    },
    {
        label: 'Sweat-shirt',
        value: 'sweat',
        featured: [
            {
                name: 'Nouveautés',
                href: "/products?category=sweat&sort=desc",
                imageSrc: '/categories/image-5.png',
            },
            {
                name: 'Meilleures ventes',
                href: "/products?category=sweat",
                imageSrc: '/categories/image-4.png',
            },
        ]
    },
    {
        label: 'Votre modéle',
        value: 'perso',
        featured: [
            {
                name: 'Nouveautés',
                href: "/products?category=perso&sort=desc",
                imageSrc: '/categories/image-3.png',
            },
            {
                name: 'Meilleures ventes',
                href: "/products?category=perso",
                imageSrc: '/categories/image-6.png',
            },
        ]
    },
];
