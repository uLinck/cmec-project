import { escapeRegExp } from "lodash"

export const getHighlightedText = (text: string, highlight: string) => {
  // this is not highlighting when "highlight" is not a alphanumeric, fix it
  const parts = text.split(new RegExp(`(${escapeRegExp(highlight)})`, "gi"))
  return (
    <span>
      {parts.map(part =>
        part.toLowerCase() === highlight.toLowerCase() ? <b>{part}</b> : part
      )}
    </span>
  )
}

export const removerAcentos = (texto: string) =>
  texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
