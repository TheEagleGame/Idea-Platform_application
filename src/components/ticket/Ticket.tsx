import { FC } from "react"
import { Button } from "../button/Button"
import { TicketInfo } from "./ticketInfo/TicketInfo"
import { TicketItem } from "../../interfaces/interfaces";
import "./Ticket.css"

interface Props {
  item: TicketItem
}


export const Ticket:FC<Props> = ({item}) => {

  return (
    <div className='ticket'>
      <div className='ticket__side-content'>
        <div className='ticket__image-wrapper'>
          <img src={item.image} className="ticket__image" alt="ticketImage"/>
        </div>
        <Button>
          <div>Купить</div>
          <div>за {item.price}</div>
        </Button>
      </div>
      <div className='ticket__info'>
        <TicketInfo data={item.arrivalsInfo}/>
        <div className='ticket__transfers'>
          {item.transfers.count} {item.transfers.text}
        </div>
        <TicketInfo data={item.departureInfo}/>
      </div>
    </div>
  )
}