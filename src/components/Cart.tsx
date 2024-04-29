"use client"

import { ShoppingCart } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from './ui/sheet'
import { Separator } from './ui/separator'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import Image from 'next/image'
import { useCart } from '@/hooks/use-cart'
import { ScrollArea } from './ui/scroll-area'
import CartItem from '../components/CartItem'
import { useEffect, useState } from 'react'

const Cart = () => {
    const { items } = useCart()
    const itemCount = items.length

    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const cartTotal = items.reduce(
        (total, {product}) => total + product.price, 0
    )
    const fee = 500

    return (
    <Sheet>
        <SheetTrigger className='group -m-2 flex items-center p-2'>
            <ShoppingCart
            aria-hidden='true'
            className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
            />
            <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                {isMounted ? itemCount : 0}
            </span>
        </SheetTrigger>
        <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
            <SheetHeader>
                <SheetTitle> Panier ({itemCount}) </SheetTitle>

            </SheetHeader>
            {
                itemCount > 0 ? (
                    <>
                        <div className='flex w-full flex-col pr-6'> 
                        {/* TODO: Cart Logic */}
                        <ScrollArea>
                            {items.map(({product}) => (
                                <CartItem product={product} key={product.id} />
                            ))}
                        </ScrollArea>
                        Articles
                        </div>
                        <div className='space-y-4 pr-6'>
                        <Separator />
                            <div className='space-y-1.5 pr-6'>
                                <div className='flex'>
                                    <span className='flex-1'>Sous-Total</span>
                                    <span className=''>{formatPrice(cartTotal)}</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Livraison</span>
                                    <span className=''>58 Wilayas</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Frais de livraison</span>
                                    <span className=''>{formatPrice(fee)}</span>
                                </div>
                                <Separator />
                                <div className='flex'>
                                    <span className='flex-1'>Total</span>
                                    <span className=''>{formatPrice(cartTotal + fee)}</span>
                                </div>

                            </div>

                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link href='/cart' className={buttonVariants({className:'w-full'})}>Valider la Commande</Link>
                                </SheetTrigger>
                            </SheetFooter>

                        </div>
                    </>
                ) : (
                    <div className='flex h-full flex-col items-center justify-center space-y-1'>
                        <div className='relative mb-4 h-45 w-60 text-muted-foreground'>
                            <Image src='/Printinity-Icon.png' alt='cart item image' width={180} height={135}/>
                        </div>
                    </div>
                )
            }

        </SheetContent>
    </Sheet>
    )
}

export default Cart