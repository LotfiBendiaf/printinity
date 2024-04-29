'use client'

import { Product } from '../payload-types'
import { trpc } from '../trpc/client'
import Link from 'next/link'
import ProductListing from './ProductListing'
import { TQueryValidator } from '../lib/validators/query-validator'
import ProductListingAdd from './ProductListingAdd'

interface ProductReelProps {
  title: string
  subtitle?: string
  href?: string
  query: TQueryValidator
}

const FALLBACK_LIMIT = 4

const ProductAdd = (props: ProductReelProps) => {
  const { title, subtitle, query, href } = props

  const { data: queryResults, isLoading } =
    trpc.getInfiniteProducts.useInfiniteQuery(
      {
        limit: query.limit ?? FALLBACK_LIMIT,
        query,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    )

  const products = queryResults?.pages.flatMap(
    (page) => page.items
  )

  let map: (Product | null)[] = []
  if (products && products.length) {
    map = products
  } else if (isLoading) {
    map = new Array<null>(
      query.limit ?? FALLBACK_LIMIT
    ).fill(null)
  }

  return (
    <section>
      {map.map((product, i) => (
        <ProductListingAdd
          key={`product-${i}`}
          product={product}
          index={i}
        />
      ))}
    </section>
  )
}

export default ProductAdd