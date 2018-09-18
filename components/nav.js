import React from 'react'
import NextLink from 'next/link'

import Link from '../components/Link'

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <NextLink prefetch href="/">
          <Link>Home</Link>
        </NextLink>
      </li>
      {/* <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
        <Link href={href}>
        <a>{label}</a>
        </Link>
          </li>
        ))}
      </ul> */}
      <ul>
        <li>
          <Link href="#!">Documentation</Link>
        </li>
        <li>
          <Link href="#!">Github</Link>
        </li>
        <li>v0.1.0</li>
      </ul>
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
