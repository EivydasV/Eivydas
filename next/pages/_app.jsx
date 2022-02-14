import Footer from '../components/Footer'
import Header from '../components/Header'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '../styles/globals.css'
import { DialogOpenProvider } from '../context/DialogOpen'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <DialogOpenProvider>
          <div className='flex flex-col h-screen'>
            <Header />
            <div className='flex-grow'>
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </DialogOpenProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
