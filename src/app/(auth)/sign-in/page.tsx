'use client'

import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import {
  AuthValidator,
  TAuthValidator
} from '@/lib/validators/account-credentials-validator'
import { trpc } from '@/trpc/client'
import { toast } from 'sonner'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCart } from '@/hooks/use-cart'
import Icon from '@/components/Icon'

const Page = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const isSeller = searchParams.get('as') === 'seller'
    const origin = searchParams.get('origin')

    const { clearCart } = useCart()

    const continueAsSeller = () => {
        router.push('?as=seller')
    }

    const continueAsBuyer = () => {
        router.replace('/sign-in', undefined)
    }

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthValidator>({
    resolver: zodResolver(AuthValidator),
  })



  const { mutate: signIn, isLoading } =
    trpc.auth.signIn.useMutation({
        onSuccess: () => {
            toast.success(
              `Signed in successfully`
            )
            router.refresh()
            if(origin){
                router.push(`/${origin}`)
            }
            if(isSeller){
                router.push('/sell')
                return
            }
            router.push('/')
            router.refresh()
          },

          onError: (err) => {
            if(err.data?.code === 'UNAUTHORIZED'){
                toast.error('Invalid email or password')
            }
          }


    })

  const onSubmit = ({
    email,
    password,
  }: TAuthValidator) => {
    signIn({ email, password })
  }

  return (
    <>
      <div className='container relative flex py-10 flex-col items-center justify-center lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col items-center space-y-2 text-center'>
            <Icon />
            <h1 className='text-2xl font-semibold tracking-tight'>
              Se Connecter à votre compte {isSeller ? (
                "Vendeur"
              ) : ""
            }{" "}
            .
            </h1>

            <Link
              className={buttonVariants({
                variant: 'link',
                className: 'gap-1.5',
              })}
              href='/sign-up'>
              Pas de compte ? Creer un Compte
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>

          <div className='grid gap-6'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid gap-2'>
                <div className='grid gap-1 py-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    {...register('email')}
                    className={cn({
                      'focus-visible:ring-red-500':
                        errors.email,
                    })}
                    placeholder='you@example.com'
                  />
                  {errors?.email && (
                    <p className='text-sm text-red-500'>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className='grid gap-1 py-2'>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    {...register('password')}
                    type='password'
                    className={cn({
                      'focus-visible:ring-red-500':
                        errors.password,
                    })}
                    placeholder='Password'
                  />
                  {errors?.password && (
                    <p className='text-sm text-red-500'>
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <Button 
                onClick={() => {
                  clearCart()
                }} >Se Connecter</Button>
              </div>
            </form>
            <div className='relative'>
                <div aria-hidden='true' className='absolute inset-0 flex items-center'>
                    <span className='w-full border-t'></span>
                </div>
                <div className='relative flex justify-center text-xs uppercase'>
                    <span className='bg-background px-2 text-muted-foreground'>
                        ou
                    </span>
                </div>
            </div>
            {isSeller ? (
                <Button 
                    onClick={continueAsBuyer} 
                    variant={'dark'}
                    disabled={isLoading}>
                        Continuer comme acheteur
                </Button>
            ): (
                <Button 
                    onClick={continueAsSeller} 
                    variant={'dark'}
                    disabled={isLoading}>
                        Continuer comme vendeur
                </Button>
            )
            
        }
          </div>
        </div>
      </div>
    </>
  )
}

export default Page