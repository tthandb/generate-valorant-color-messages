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

export const generateRandom = (text) => {
  let newText = ''
  const colors = ['notification', 'enemy', 'team', 'system', 'warning']
  
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      const color = colors[Math.floor(Math.random() * colors.length)]
      newText += `<${color}>${text[i]}</>`
    } else {
      newText += text[i]
    }
  }
  return newText
}
