import { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./styles/theme";
import GlobalStyle from "./styles/global"

import Header from "./components/Header"
import CardContainer from "./components/CardContainer";
import Loading from "./components/Loading";

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [theme, setTheme] = useState(lightTheme)
  const [isLight, setLight] = useState(true)
  const [showLoading, setShowLoading] = useState(true)
  const [tours, setTours] = useState([])

  useEffect(() => {
    getTours()
  }, [])

  const getTours = async () => {
    try {
      setShowLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setTours(data)
    } catch (error) {
      console.log(error)
    } finally {
      setShowLoading(false)
    }
  }

  //Sera passando para o header
  function handleTheme() {
    const newTheme = (theme === lightTheme) ? darkTheme : lightTheme
    setLight(!isLight)
    setTheme(newTheme)
  }

  function removeTour(id){
    const newArrayTours = tours.filter((tour) => tour.id !== id)
    setTours(newArrayTours)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header handleTheme={handleTheme} isLight={isLight} />
      {(showLoading) ? (
        <Loading />
      ) :
        (
          <CardContainer tours={tours} removeTour={removeTour} reloadTours={getTours} />
        )}
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
