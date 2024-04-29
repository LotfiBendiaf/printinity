import React from 'react'
import ProductReel from './ProductReel'
import ProductAdd from './ProductAdd'

const NavAdds = () => {

  return (
      <header className='relative bg-orange-100 flex items-center justify-center gap-10 py-2'>
              <h1 className='hidden lg:text-4xl lg:block font-bold'>La nouvelle Creme solaire</h1>
              <ProductAdd
                query={{ sort: 'desc', limit: 1 }}
                href='/products?sort=recent'
                title=''
            />
              <h1 className='text-orange-800 text-4xl font-bold'>-50%</h1>
      </header>
)
}

export default NavAdds