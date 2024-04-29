"use client"

import { User } from '@/payload-types'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'
import { User2Icon, Heart, ScrollText } from 'lucide-react'
import { useCart } from '@/hooks/use-cart'


const UserAccountNav = ({ user }: { user: User }) => {
  const { signOut } = useAuth()
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className='overflow-visible'>
          <Button
            variant='ghost'
            size='sm'
            className='relative'>
            <User2Icon className='h-6 w-6' aria-hidden='true' />
          </Button>
        </DropdownMenuTrigger>

          <DropdownMenuContent
          className='bg-white w-60'
          align='end'>
          <div className='flex items-center justify-start gap-2 p-2'>
            <div className='flex flex-col space-y-0.5 leading-none'>
              <p className='font-medium text-sm text-black'>
                {user.email}
              </p>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={signOut}
            className='cursor-pointer'>
            Se D‌&#233;connecter
          </DropdownMenuItem>
          </ DropdownMenuContent>
      </DropdownMenu>
      <div className='flex items-center gap-5'>
        <p className='hidden lg:block font-medium text-sm text-black'>
          Bonjour, {' '}{user.username} 
        </p>
          <Heart className='hidden lg:block text-primary h-6 w-6' aria-hidden='true' />
          <Link href={'/sell/collections/orders?limit=10'}>
            <ScrollText className='text-sky-600 h-6 w-6' aria-hidden='true' />
          </Link>
      </div>
    </>
  )
}

export default UserAccountNav
