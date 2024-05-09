"use client"

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import {Button, buttonVariants} from '@/components/ui/button'
import Link from 'next/link'
import { ArrowDownToLine, CheckCircle, Shield, Globe, Truck } from 'lucide-react'
import ProductReel from '@/components/ProductReel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import styled, { keyframes, css } from "styled-components";
const row1 = [
  "/carrousel/image-3.png",
  "/carrousel/image-7.png",
  "/carrousel/image-4.png",
  "/carrousel/image-1.png",
  "/carrousel/image-6.png",
  "/carrousel/image-2.png",
  "/carrousel/image-5.png",

];


const perks = [
  {
    name: "Livraison rapide",
    Icon: Truck,
    desciption:
    'Recevez votre confirmation de commande par mail et recevez vos produits dans les plus berfs delais'
  },
  {
    name: "Qualité garantie",
    Icon: CheckCircle,
    desciption:
    'Chaque produit dans notre plateforme est verifié par notre equipe'
  },
  {
    name: "Disponibilité 58 Wilayas",
    Icon: Globe,
    desciption:
    'Chaque produit dans notre plateforme est verifié par notre equipe'
  },
  {
    name: "Commande sécurisé",
    Icon: Shield,
    desciption:
    "Toutes les données de nos clients sont stockées de maniere sécurisée"
  },
]

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className='flex items-center gap-5'>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-extrabold tracking-tight text-gray-800 sm:text-6xl'>Avec PRINTINITY creer votre{' '}
          <span className='text-primary'>
            propre style
          </span>
          <span className='text-yellow-300'>.</span>
        </h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>Bienvenue a PRINTINITY. chaque produit sur notre plateforme est vérifié par notre équipe pour assurer la meilleur qualité</p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link href='/products' className={buttonVariants()}>Parcourir les nouveautés</Link>
            <Button variant='ghost'>Creer votre vetement &rarr; </Button>
          </div>
      </div>
      </div>


        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />

              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>

      {/* {TODO: List products} */}
      <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          href='/products?sort=recent'
          title='Notre collection de pret à porter'
        />
        <Text>With Great Outcomes.</Text>
        <Note>Our customers have gotten offers from awesome companies.</Note>
        <div className='flex justify-center px-10'>
        <Carousel className=''>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <Image src='/brands/yassir.jpeg' alt='Yassir' width={180} height={115}/>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <Image src='/brands/yassir.jpeg' alt='Yassir' width={180} height={115}/>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5 flex items-center">
            <Image src='/brands/heetch.png' alt='Yassir' width={180} height={115}/>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5">
            <Image src='/brands/yassir.jpeg' alt='Yassir' width={180} height={115}/>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/5 flex items-center">
            <Image src='/brands/heetch.png' alt='Yassir' width={180} height={115}/>
            </CarouselItem>

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
          
        </div>

    </MaxWidthWrapper>

    <section className='border-t border-gray-200 bg-gray-50'>
      <MaxWidthWrapper className='py-20'>
        <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0'>
        {perks.map((perk) => (
          <div key={perk.name} className='text-center md:text-left lg:block lg:text-center'>
            <div className='md:flex-shrink-0 flex justify-center'>
              <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                {<perk.Icon className='w-1/4 h-1/4' />}
              </div>
            </div>
            <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'></div>
            <h3 className='text-base font-medium text-gray-900'>{perk.name}</h3>
            <p className='mt-3 text-sm text-muted-foreground'>{perk.desciption}</p>
          </div>
        ))}
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  )
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: flex;
  place-items: center;
  width: 500px;
  margin-inline: 0.5rem;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 40%;
`;