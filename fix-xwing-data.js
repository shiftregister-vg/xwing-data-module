import fs from 'fs'

const fileRoot = 'xwing-data/data/'
const dataFiles = [
  'conditions.js',
  'damage-deck-core.js',
  'damage-deck-core-tfa.js',
  'damage-deck-rebel-transport.js',
  'pilots.js',
  'reference-cards.js',
  'ships.js',
  'sources.js',
  'upgrades.js'
]

const fixData = (fileName) => {
  const originalFileData = fs.readFileSync(`${fileRoot}${fileName}`)
  const newFileData = `module.exports = ${originalFileData}`
  const constIndex = originalFileData.indexOf(newFileData)
  
  if (constIndex === -1) {
    console.log(`${fileName} is being converted...`)
    
    fs.writeFileSync(`${fileRoot}${fileName}`, newFileData)
    
    console.log(`${fileName} converted!`)
  } else {
    console.warn(`${fileName} has already been converted, skipping...`)
  }
}

dataFiles.forEach(fixData)