import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Container } from '../../styles/banner'
import { getBanner } from '../api/banner'

type BannerProps = {
  url: string
}

export default function Banner(props: BannerProps) {
  return (
    <Container>
      <Head>
        <title>Move.it - Twitter Banner</title>

        <meta name="description" content="Move.it" />

        <meta property="og:site_name" content="Move.it" />

        <meta property="og:title" content="Move.it" />
        <meta property="og:description" content="Move.it" />

        <meta property="og:image" content="public/logo.svg" />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Move.it" />
        <meta
          name="twitter:description"
          content="Acabei de upar de level no Move.it!"
        />
        <meta name="twitter:image" content="public/logo.svg" />
      </Head>
      <img src={props.url} alt="" />
    </Container>
  )
}
export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      url: await getBanner({
        level: Number(level),
        challengesCompleted: Number(challengesCompleted),
        currentExperience: Math.pow(Number(level) * 4, 2)
      })
    }
  }
}
