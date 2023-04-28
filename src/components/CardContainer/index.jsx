import Card from "../Card"
import * as c from"./styles"

const CardContainer = ({tours, removeTour, reloadTours}) => {
  return (
    <c.Container>
       <c.Title>Tours</c.Title>
       {(tours.length <= 0) ? 
          (<c.ReloadButton onClick={reloadTours}>Recarregar</c.ReloadButton>)
        : ""}
        
       {tours.map((tour) => {
         return <Card key={tour.id} tour={tour} removeTour={removeTour}/>
       })}
    </c.Container>
  )
}

export default CardContainer