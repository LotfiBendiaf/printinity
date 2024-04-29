import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatPrice(
  price: number | string,
  options: {
    currency?: 'USD' | 'EUR' | 'GBP' | 'BDT' | 'DZD'
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const { currency = 'DZD', notation = 'compact' } = options

  const numericPrice =
    typeof price === 'string' ? parseFloat(price) : price

  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}

export function constructMetadata({
  title = 'PRINTINITY - print on demand goods',
  description = 'Bienvenue a PRINTINITY. chaque produit sur notre plateforme est vérifié par notre équipe pour assurer la meilleur qualité',
  image = '/printinity-image.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@lotfiben95',
    },
    icons,
    metadataBase: new URL('https://printinity.up.railway.app'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
