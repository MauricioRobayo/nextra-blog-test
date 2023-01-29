import type { ReactElement } from 'react'
import Link from 'next/link'
import ThemeSwitch from './theme-switch'
import { useBlogContext } from './blog-context'
import { collectPostsAndNavs } from './utils/collect'

export default function Nav(): ReactElement {
  const { opts, config } = useBlogContext()
  const { navPages } = collectPostsAndNavs({ opts, config })
  return (
    <div className="nx-mb-8 nx-flex nx-items-baseline nx-justify-between">
      {config.title && (
        <h2 className="!nx-mt-0 !nx-text-base">
          <Link href="/" className="!nx-no-underline !nx-text-gray-400">
            {config.title}
          </Link>
        </h2>
      )}
      <div className="nx-flex nx-flex-wrap nx-items-center nx-gap-3">
        {navPages.map(page => {
          if (page.active) {
            return (
              <span
                key={page.route}
                className="nx-cursor-default nx-text-gray-400"
              >
                {page.frontMatter?.title || page.name}
              </span>
            )
          }
          return (
            <Link key={page.route} href={page.route} passHref legacyBehavior>
              <a>{page.frontMatter?.title || page.name}</a>
            </Link>
          )
        })}
        {config.navs?.map(nav => (
          <Link key={nav.url} href={nav.url} passHref legacyBehavior>
            <a>{nav.name}</a>
          </Link>
        ))}
      </div>
      {config.darkMode && <ThemeSwitch />}
    </div>
  )
}
