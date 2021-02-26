import CloseIcon from '../assets/icons/close.svg'

import LevelUp from '../../public/levelup.svg'
import { Container, Overlay } from '../styles/components/LevelUpModal'

export function LevelUpModal() {
  return (
    <Overlay>
      <Container>
        <header>2</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={() => {}}>
          <CloseIcon />
        </button>
      </Container>
    </Overlay>
  )
}
