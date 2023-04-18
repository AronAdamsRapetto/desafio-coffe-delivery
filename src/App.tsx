import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CoffeContextProvider } from './context/CoffeContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeContextProvider>
        <Router />
      </CoffeContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
