import {
  BookOpenIcon,
  HeartIcon,
  HomeIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

export const defaultMainNav = [
  {
    name: 'common:navs.defaultMainNav.blog',
    href: '/blog/',
  },
  {
    name: 'common:navs.defaultMainNav.doc',
    href: '/doc/',
  },
]

export const commonFooterNav = [
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

export const docMenuNav = [
  { name: 'doc:menuNav.home', href: '/doc/', icon: HomeIcon },
  { name: 'doc:menuNav.motivation', href: '/doc/motivation/', icon: HeartIcon },
  {
    name: 'doc:menuNav.quickstart',
    href: '/doc/quickstart/',
    icon: RocketLaunchIcon,
  },
  { name: 'doc:menuNav.readme', href: '/doc/readme/', icon: BookOpenIcon },
]

export const docHeaderNav = [
  {
    name: 'doc:headerNav.home',
    href: '/',
  },
  {
    name: 'doc:headerNav.blog',
    href: '/blog/',
  },
]
