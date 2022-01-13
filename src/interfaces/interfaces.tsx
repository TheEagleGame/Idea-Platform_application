export interface TicketItem {
  image: string,
  price: string,
  transfers: Transfers,
  arrivalsInfo: TicketItemInfo,
  departureInfo: TicketItemInfo
}

interface Transfers {
  text: string,
  count: string
}

export interface TicketItemInfo {
  city: string,
  cityCode: string,
  date: string
}
