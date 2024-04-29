export const PRODUCT_CATEGORIES = [
    {
      label: 'T-Shirt',
      value: 'tshirt' as const,
      featured: [
        {
          name: 'Nouveautés',
          href: `/products?category=tshirt&sort=desc`,
          imageSrc: '/categories/image.png',
        },
        {
          name: 'Meilleures ventes',
          href: `/products?category=tshirt`,
          imageSrc: '/categories/image-2.png',
        }
      ]
    },
    {
      label: 'Sweat-shirt',
      value: 'sweat' as const,
      featured: [
        {
          name: 'Nouveautés',
          href: `/products?category=sweat&sort=desc`,
          imageSrc: '/categories/image-5.png',
        },
        {
          name: 'Meilleures ventes',
          href: `/products?category=sweat`,
          imageSrc: '/categories/image-4.png',
        },
      ]
    },
    {
      label: 'Votre modéle',
      value: 'perso' as const,
      featured: [
        {
          name: 'Nouveautés',
          href: `/products?category=perso&sort=desc`,
          imageSrc: '/categories/image-3.png',
        },
        {
          name: 'Meilleures ventes',
          href: `/products?category=perso`,
          imageSrc: '/categories/image-6.png',
        },
      ]
    },
    
  ]