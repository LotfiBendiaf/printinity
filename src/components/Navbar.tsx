import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import Cart from './Cart'
import NavItems from './NavItems'
import { buttonVariants } from './ui/button'
import { getServerSideUser } from '@/lib/payload-utils'
import { cookies } from 'next/headers'
import UserAccountNav from './UserAccountNav'
import MobileNav from './MobileNav'
import Logo from './Logo'
import Icon from './Icon'

const Navbar = async () => {
    const nextCookies = cookies()
    const { user } = await getServerSideUser(nextCookies)
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
        <header className='relative bg-white'>
            <MaxWidthWrapper>
                <div className='border-b border-gray-200'>
                    <div className='flex h-16 items-center'>

                        {/* TODO: Mobile nav */}
                        <MobileNav />
                        <div className='mr-2 hidden lg:block'>
                            <Link href='/'>
                                <Logo/>
                            </Link>
                        </div>
                        <div className='lg:hidden'>
                        <Link href='/'>
                            <Icon />
                        </Link>

                        </div>

                        <div className='z-50 lg:ml-8'>
                            <NavItems />
                        </div>


                        <div className='ml-auto flex items-center'>
                            <div className='flex items-center justify-end space-x-2 lg:space-x-6'>
                                {user ? null : (<Link href='/sign-in' className={buttonVariants({variant: 'ghost'})}>Se Connecter</Link>)}

                                {user ? null: <span className='hidden lg:block h-6 w-px bg-gray-200' aria-hidden='true'></span>}

                                {user ? (
                                    <UserAccountNav user={user} />
                                ): <div className='hidden lg:block'>
                                        <Link href='/sign-up' className={buttonVariants({variant: 'outline'})}> 
                                        Creer un compte
                                        </Link>
                                    </div> 
                                }

                                {user ? (<span className='h-6 w-px bg-gray-200' aria-hidden='true'></span>): null}

                                {user ? null : (<div className='flex lg:ml-6'>
                                    <span className='h-6 w-px bg-gray-200' aria-hidden='true'></span>
                                    </div>)}

                                <div className='ml-4 flow-root lg:ml-6'>
                                    <Cart/>
                                </div>
                                
                            </div>

                        </div>
                        {/* <div className='ml-4 flex lg:hidden'>
                            <Link href='/'>
                                <Icons sizes='auto'/>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </MaxWidthWrapper>
        </header>
    </div>
  )
}

export default Navbar