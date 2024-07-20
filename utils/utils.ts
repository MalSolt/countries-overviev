import { Country } from "@/store/store"

export const isImgUrl = (value: any): boolean => {
  return /\.(jpg|jpeg|jpe|jif|jfif|jfi|png|gif|webp|tiff|tif|bmp|svg|eps|raw|cr2|nef|orf|sr2|psd|ai|indd|cdr|dng|arw|rw2|dxf|dwg|pdf)$/.test(
    value
  )
}

export const sortCountriesByLatestDate = (list: Country[]): Country[] => {
  return list.sort((a, b) => {
    const latestDateA = new Date(
      Math.max(...a.visitedDates.map((date) => new Date(date).getTime()))
    )
    const latestDateB = new Date(
      Math.max(...b.visitedDates.map((date) => new Date(date).getTime()))
    )
    return latestDateB.getTime() - latestDateA.getTime()
  })
}
