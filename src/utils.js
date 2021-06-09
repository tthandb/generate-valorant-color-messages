export const generateTag = (text, color) => {
  switch (color) {
    case 'green':
      return `<notification>${text}</>`
    case 'red':
      return `<enemy>${text}</>`
    case 'blue':
      return `<team>${text}</>`
    case 'yellow':
      return `<system>${text}</>`
    case 'purple':
      return `<warning>${text}</>`
    default:
      return text
  }
}
