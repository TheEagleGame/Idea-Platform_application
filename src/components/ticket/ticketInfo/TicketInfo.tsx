import { FC } from 'react'
import { TicketItemInfo } from '../../../interfaces/interfaces'
import './TicketInfo.css'

interface Props {
  data: TicketItemInfo
}


export const TicketInfo:FC<Props> = ({ data }) => {
  const {
    date,
    city,
    cityCode
  } = data
  const hours = new Date(date).getUTCHours()
  const minutes = new Date(date).getUTCMinutes()
  const localDate =  new Date(date).toLocaleDateString('ru-RU', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).toUpperCase()
  return (
      <div className='ticket__data'>
        <div className='ticket__time'>
          {hours}:{minutes}
        </div>
        <div className='ticket__city'>
          {city}, {cityCode}
        </div>
        <div className='ticket__date'>
          {localDate}
        </div>
      </div>
  )
}