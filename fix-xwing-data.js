import fs from 'fs'

const fileRoot = 'xwing-data/data/'
const dataFiles = [{
  fileName: 'conditions.js',
  key: 'conditions'
}, {
  fileName: 'damage-deck-core.js',
  key: 'damageDeckCore'
}, {
  fileName: 'damage-deck-core-tfa.js',
  key: 'damageDeckCoreTfa'
}, {
  fileName: 'damage-deck-rebel-transport.js',
  key: 'damageDeckRebelTransport'
}, {
  fileName: 'pilots.js',
  key: 'pilots'
}, {
  fileName: 'reference-cards.js',
  key: 'referenceCards'
}, {
  fileName: 'ships.js',
  key: 'ships'
}, {
  fileName: 'sources.js',
  key: 'sources'
}, {
  fileName: 'upgrades.js',
  key: 'upgrades'
}]

const fixData = ({fileName, key}) => {
  const originalFileData = fs.readFileSync(`${fileRoot}${fileName}`)
  const constIndex = originalFileData.indexOf(`const ${key} =`)
  
  if (constIndex === -1) {
    console.log(`${fileName} is being converted...`)
    
    const newFileData = `const ${key} = ${originalFileData}\n\n export default ${key}`
    fs.writeFileSync(`${fileRoot}${fileName}`, newFileData)
    
    console.log(`${fileName} converted!`)
  } else {
    console.warn(`${fileName} has already been converted, skipping...`)
  }
}

dataFiles.forEach(fixData)