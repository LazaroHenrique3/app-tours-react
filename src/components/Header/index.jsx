import * as c from "./styles"

import {BsMoonStarsFill, BsSunFill} from "react-icons/bs"


const Header = ({handleTheme, isLight}) => {
  return (
    <c.Container>
        <c.LogoTitle>MyTour</c.LogoTitle>
        <c.ThemeSwitcher onClick={handleTheme}>
            {(isLight) ? (
                <BsMoonStarsFill/>
            ) : (
                <BsSunFill/>
            )}
        </c.ThemeSwitcher>
    </c.Container>
  )
}

export default Header