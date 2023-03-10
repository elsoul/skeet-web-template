import { ReactElement } from 'react'
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import HeroRow from '@/components/pages/home/HeroRow'
import siteConfig from '@/config/site'
import DiscordRow from '@/components/pages/common/DiscordRow'

const seo = {
  pathname: '/',
  title: {
    ja: 'トップページ',
    en: 'Top page',
  },
  description: {
    ja: siteConfig.descriptionJA,
    en: siteConfig.descriptionEN,
  },
  img: null,
}

const getStaticProps = makeStaticProps(['common', 'home'], seo)
export { getStaticPaths, getStaticProps }

export default function Home() {
  return (
    <>
      <HeroRow />
      <DiscordRow />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
