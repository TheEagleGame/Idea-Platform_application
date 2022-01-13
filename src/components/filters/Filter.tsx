import { FC } from "react";
import "./Filter.css"

interface Filter {
 count: string,
 text: string
}

interface Props {
  filter: Filter,
  transfersFilter: Array<string>,
  setTransfersFilter: (value: (prevState: string[]) => string[]) => void,
}


export const Filter:FC<Props> = ( {filter, transfersFilter, setTransfersFilter} ) => {
  const handleChange = (count: string): void => {
    const isChecked = transfersFilter.includes(count)
    if (isChecked) {
      setTransfersFilter((prevState: string[]) => prevState.filter(item => item !== count))
    } else {
      setTransfersFilter((prevState: string[]) => [...prevState, count])
    }
  }
  return (
      <label className='filters__item'>
        <input type='checkbox' onChange={() => handleChange(filter.count)}/>
        <div> {filter.count} {filter.text}</div>
      </label>
  )
}