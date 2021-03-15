type BannerProps = {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export async function getBanner(props: BannerProps) {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://moveit-plum.vercel.app/'

  const bannerUrl = `${baseUrl}/api/thumbnail.png?level=${props.level}&completedChallenges=${props.challengesCompleted}&neededExperience=${props.currentExperience}`

  return bannerUrl
}
