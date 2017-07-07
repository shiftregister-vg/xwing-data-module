// import fs from 'fs'
import conditions from '../xwing-data/data/conditions.js'
import damageDeckCore from '../xwing-data/data/damage-deck-core.js'
import damageDeckCoreTfa from '../xwing-data/data/damage-deck-core-tfa.js'
import damageDeckRebelTransport from '../xwing-data/data/damage-deck-rebel-transport.js'
import pilots from '../xwing-data/data/pilots.js'
import referenceCards from '../xwing-data/data/reference-cards.js'
import ships from '../xwing-data/data/ships.js'
import sources from '../xwing-data/data/sources.js'
import upgrades from '../xwing-data/data/upgrades.js'

// const getData = (path) =>  JSON.parse(fs.readFileSync(path))

// const conditions = getData('xwing-data/data/conditions.js')
// const damageDeckCore = getData('xwing-data/data/damage-deck-core.js')
// const damageDeckCoreTfa = getData('xwing-data/data/damage-deck-core-tfa.js')
// const damageDeckRebelTransport = getData('xwing-data/data/damage-deck-rebel-transport.js')
// const pilots = getData('xwing-data/data/pilots.js')
// const referenceCards = getData('xwing-data/data/reference-cards.js')
// const ships = getData('xwing-data/data/ships.js')
// const sources = getData('xwing-data/data/sources.js')
// const upgrades = getData('xwing-data/data/upgrades.js')

const data = {
  conditions,
  damageDeckCore,
  damageDeckCoreTfa,
  damageDeckRebelTransport,
  pilots,
  referenceCards,
  ships,
  sources,
  upgrades
}

export default data
export {
  conditions,
  damageDeckCore,
  damageDeckCoreTfa,
  damageDeckRebelTransport,
  pilots,
  referenceCards,
  ships,
  sources,
  upgrades
}