import { AppProps } from 'next/app'
import GlobalStyle from '../styles/GlobalStyle'

import { ChallengesProvider } from '../contexts/ChallengesContext'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChallengesProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default App
