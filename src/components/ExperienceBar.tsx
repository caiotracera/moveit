import {
  Container,
  ExperienceBar as XpBar
} from '../styles/components/ExperienceBar'

export function ExperienceBar() {
  return (
    <Container>
      <span>0 xp</span>
      <XpBar>
        <div style={{ width: '50%' }}></div>
        <span style={{ left: '50%' }}>300 xp</span>
      </XpBar>
      <span>600 xp</span>
    </Container>
  )
}
