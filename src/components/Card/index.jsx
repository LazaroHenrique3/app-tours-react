import { useState } from "react"

import * as c from "./styles"

const Card = ({tour, removeTour}) => {

  const cardInfo = tour.info.slice(0, 200)

  const [readMore, setReadmore] = useState(true)

  function handleReadMore(){
    setReadmore(!readMore)
  }

  return (
    <c.Container>
        <c.CardImg src={tour.image}/>
        <c.CardInfo>
            <c.CardHeader>
                <c.CardTitle> {tour.name}</c.CardTitle>
                <c.CardInfoPrice>{tour.price}</c.CardInfoPrice>
            </c.CardHeader>
            {(readMore) ? 
              <>  
                 {`${cardInfo}...`}
                 <c.readMoreButton onClick={handleReadMore}>
                    Ler mais
                </c.readMoreButton>
              </>
            : 
              <>
                {`${tour.info}`}
                <c.readMoreButton onClick={handleReadMore}>
                    Ler menos
                </c.readMoreButton>
              </>
              }
        </c.CardInfo>
        <c.DeleteButton onClick={() => removeTour(tour.id)}>
            Delete
        </c.DeleteButton>
    </c.Container>
  )
}

export default Card