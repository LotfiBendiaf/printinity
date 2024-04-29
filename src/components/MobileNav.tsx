'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Icons } from './Icons'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()


  // whenever we click an item in the menu and navigate away, we want to close the menu
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // when we click the path we are currently on, we still want the mobile menu to close,
  // however we cant rely on the pathname for it because that won't change (we're already there)
  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      setIsOpen(false)
    }
  }

  // remove second scrollbar when mobile menu is open
  useEffect(() => {
    if (isOpen)
      document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')
  }, [isOpen])

  if (!isOpen)
    return (
      <button
        type='button'
        onMouseOver={() => setIsOpen(true)}
        className='lg:hidden mr-5 relative -m-2 inline-flex items-center justify-center gap-2 bg-slate-100 rounded-md p-2 text-gray-400'>
        <Menu className='h-6 w-6' aria-hidden='true' />
          {/* <p className='hidden text-black'>Categories</p>  */}
      </button>
    )

  return (
    <div>
      <div className='relative z-40'>
        <div className='fixed inset-0 bg-black bg-opacity-25' />
      </div>

      <div className='fixed overflow-y-scroll bg-black bg-opacity-25 overscroll-y-none inset-0 rounded-lg z-40 flex'>
        <div className='w-4/5'>
          <div className='relative flex w-full max-w-sm flex-col overflow-y-auto m-5 bg-slate-100 rounded-xl pb-12 shadow-xl'>
            <div className='flex justify-between px-4 pb-2 pt-5'>
              <div className='ml-4 flex lg:ml-0'>
                  <Icons sizes='auto'/>
              </div>
              <button
                type='button'
                onClick={() => setIsOpen(false)}
                className='relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'>
                <X className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>

            <div className='mt-0'>
              <ul>
                {PRODUCT_CATEGORIES.map((category) => (
                  <li
                    key={category.label}
                    className='space-y-10 px-4 pb-2 pt-2'>
                    <div className='border-b border-gray-200'>
                      <div className='-mb-px flex'>
                        <p className='border-transparent text-gray-900 font-black flex-1 whitespace-nowrap border-b-2 py-4 text-xl'>
                          {category.label}
                        </p>
                      </div>
                    </div>

                    <div className='grid grid-cols-2 gap-y-10 gap-x-4'>
                      {category.featured.map((item) => (
                        <Link
                        key={item.name}
                        href={item.href}
                        className='mt-6 block font-medium text-gray-900'>
                        <div
                          key={item.name}
                          className='group relative text-sm'>
                          <div className='relative aspect-square overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                            <Image
                              fill
                              src={item.imageSrc}
                              alt='product category image'
                              className='object-cover object-center'
                            />
                          </div>
                            {item.name}
                        </div>
                      </Link>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
              <div className='flow-root'>
                <Link
                  onClick={() => closeOnCurrent('/sign-in')}
                  href='/sign-in'
                  className='-m-2 block p-2 font-medium text-gray-900'>
                  Se Connecter
                </Link>
              </div>
              <div className='flow-root'>
                <Link
                  onClick={() => closeOnCurrent('/sign-up')}
                  href='/sign-up'
                  className='-m-2 block p-2 font-medium text-gray-900'>
                  Creer un Compte
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav