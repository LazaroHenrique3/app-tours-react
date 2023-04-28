import loading from "../../img/loading.gif"

import * as c from "./styles"

const Loading = () => {
  return (
    <c.Container>
        <c.LoadImg src={loading} alt="Loading"/>
    </c.Container>
  )
}

export default Loading