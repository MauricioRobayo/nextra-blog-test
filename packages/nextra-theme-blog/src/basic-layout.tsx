import Head from 'next/head'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { useBlogContext } from './blog-context'
import { HeadingContext } from './mdx-theme'

export const BasicLayout = ({ children }: { children: ReactNode }) => {
  const { config, opts } = useBlogContext()
  const title = `${opts.title}${config.titleSuffix || ''}`
  const ref = useRef<HTMLHeadingElement>(null)
  return (
    <article
      className="nx-pt-16 nx-container nx-prose-sm dark:nx-prose-dark md:nx-prose"
      dir="ltr"
    >
      <Head>
        <title>{title}</title>
        {config.head?.({ title, meta: opts.frontMatter })}
      </Head>
      <HeadingContext.Provider value={ref}>
        {<h1 className="nx-mb-1">{opts.title}</h1>}
        {children}
        {config.footer}
      </HeadingContext.Provider>
    </article>
  )
}
