import { CacheProvider } from "@emotion/react"
import { ThemeProvider } from "@emotion/react"
import MainPage from "./pages/MainPage/MainPage"
import { theme, cacheRTL } from "./theme/theme"
function App() {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
