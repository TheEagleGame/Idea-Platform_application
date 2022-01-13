import { useState, useEffect, FC } from "react"
import { Ticket } from "../ticket/Ticket"
import { Filter } from "../filters/Filter"
import {TicketItem} from "../../interfaces/interfaces";
import "./App.css"

import ticketsArr from "./../../tickets.json"

const filtersByTransfers = [
  {
    count: '1',
    text: 'пересадка'
  },
  {
    count: '2',
    text: 'пересадки'
  },
  {
    count: '3',
    text: 'пересадки'
  },
  {
    count: '4',
    text: 'пересадки'
  },
]

export const App:FC = () => {
  const [filteredTickets, setFilteredTickets] = useState<TicketItem[]>([])
  const [transfersFilter,setTransfersFilter] = useState<string[]>([])
  useEffect(() => {
    if (transfersFilter.length === 0) {
      setFilteredTickets(ticketsArr)
    } else {
      const tickets = ticketsArr.filter( ticket => {
        return transfersFilter.includes(ticket.transfers.count)})
      setFilteredTickets(tickets)
    }
  }, [transfersFilter])
  return (
    <div className='app-wrapper'>
      <div className='app'>
        <div className='filters'>
          <p>Количество пересадок:</p>
          {filtersByTransfers.map( item => <Filter filter={item} transfersFilter={transfersFilter} setTransfersFilter={setTransfersFilter}/>)}
        </div>
        <div className='tickets'>
          {filteredTickets.length !== 0
            ? filteredTickets.map( item => <Ticket item={item}/>)
            : <span>По вашему запросу ничего не найдено</span>
          }
        </div>
      </div>
    </div>
  )
}
