import { AppProps } from 'next/app'
import GlobalStyle from '../styles/GlobalStyle'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
