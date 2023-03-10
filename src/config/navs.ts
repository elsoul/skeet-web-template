import {
  BookOpenIcon,
  HeartIcon,
  HomeIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'
import React from 'react'

export const defaultMainNav: NavMenu[] = [
  {
    name: 'common:navs.defaultMainNav.blog',
    href: '/blog/',
  },
  {
    name: 'common:navs.defaultMainNav.doc',
    href: '/doc/',
  },
]

export const commonFooterNav: NavMenu[] = [
  {
    name: 'common:navs.commonFooterNav.blog',
    href: '/blog/',
  },
  {
    name: 'common:navs.commonFooterNav.doc',
    href: '/doc/',
  },
  {
    name: 'common:navs.commonFooterNav.privacy',
    href: '/legal/privacy-policy/',
  },
]

export const docMenuNav: NavMenu[] = [
  { name: 'doc:menuNav.home', href: '/doc/', icon: HomeIcon },
  {
    name: 'doc:menuNav.general.groupTitle',
    children: [
      {
        name: 'doc:menuNav.general.motivation',
        href: '/doc/general/motivation/',
        icon: HeartIcon,
      },
      {
        name: 'doc:menuNav.general.quickstart',
        href: '/doc/general/quickstart/',
        icon: RocketLaunchIcon,
      },
      {
        name: 'doc:menuNav.general.readme',
        href: '/doc/general/readme/',
        icon: BookOpenIcon,
      },
    ],
  },
]

export const docHeaderNav: NavMenu[] = [
  {
    name: 'doc:headerNav.home',
    href: '/',
  },
  {
    name: 'doc:headerNav.blog',
    href: '/blog/',
  },
]

type NavMenu = {
  name: string
  href?: string
  icon?: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
      titleId?: string | undefined
    }
  >
  children?: {
    name: string
    href: string
    icon: React.ForwardRefExoticComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined
        titleId?: string | undefined
      }
    >
  }[]
}
