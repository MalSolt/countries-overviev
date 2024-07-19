export const isImgUrl = (value: any): boolean => {
  return /\.(jpg|jpeg|jpe|jif|jfif|jfi|png|gif|webp|tiff|tif|bmp|svg|eps|raw|cr2|nef|orf|sr2|psd|ai|indd|cdr|dng|arw|rw2|dxf|dwg|pdf)$/.test(
    value
  )
}
