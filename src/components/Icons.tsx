import { LucideProps } from 'lucide-react'
import Image from 'next/image'

export interface UserProps{
    sizes: string
}

export const Icons = ({sizes}: UserProps) => {
  return (
    <>
    <Image 
        src='/printinity-Icon.png'
        alt='Printinity Main Icon'
        sizes={sizes}
        width={50}
        height={50}
    />
    </>
  )
}