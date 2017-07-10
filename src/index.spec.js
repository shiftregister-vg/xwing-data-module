import data, {
  conditions,
  damageDeckCore,
  damageDeckCoreTfa,
  damageDeckRebelTransport,
  pilots,
  referenceCards,
  ships,
  sources,
  upgrades
} from '.'

test('data is not null', () => {
  expect(data).toBeDefined()
})

// conditions
test('data contains conditions', () => {
  expect(data.conditions).toBeDefined()
})

test('conditions can be imported individually', () => {
  expect(conditions).toBeDefined()
})

test('conditions has items', () => {
  expect(conditions.length).toBeGreaterThan(0)
})

// damageDeckCore
test('data contains damageDeckCore', () => {
  expect(data.damageDeckCore).toBeDefined()
})

test('damageDeckCore can be imported individually', () => {
  expect(damageDeckCore).toBeDefined()
})

test('damageDeckCore has items', () => {
  expect(damageDeckCore.length).toBeGreaterThan(0)
})

// damageDeckCoreTfa
test('data contains damageDeckCoreTfa', () => {
  expect(data.damageDeckCoreTfa).toBeDefined()
})

test('damageDeckCoreTfa can be imported individually', () => {
  expect(damageDeckCoreTfa).toBeDefined()
})

test('damageDeckCoreTfa has items', () => {
  expect(damageDeckCoreTfa.length).toBeGreaterThan(0)
})

// damageDeckRebelTransport
test('data contains damageDeckRebelTransport', () => {
  expect(data.damageDeckRebelTransport).toBeDefined()
})

test('damageDeckRebelTransport can be imported individually', () => {
  expect(damageDeckRebelTransport).toBeDefined()
})

test('damageDeckRebelTransport has items', () => {
  expect(damageDeckRebelTransport.length).toBeGreaterThan(0)
})

// pilots
test('data contains pilots', () => {
  expect(data.pilots).toBeDefined()
})

test('pilots can be imported individually', () => {
  expect(pilots).toBeDefined()
})

test('pilots has items', () => {
  expect(pilots.length).toBeGreaterThan(0)
})

// referenceCards
test('data contains referenceCards', () => {
  expect(data.referenceCards).toBeDefined()
})

test('referenceCards can be imported individually', () => {
  expect(referenceCards).toBeDefined()
})

test('referenceCards has items', () => {
  expect(referenceCards.length).toBeGreaterThan(0)
})

// ships
test('data contains ships', () => {
  expect(data.ships).toBeDefined()
})

test('ships can be imported individually', () => {
  expect(ships).toBeDefined()
})

test('ships has items', () => {
  expect(ships.length).toBeGreaterThan(0)
})

// sources
test('data contains sources', () => {
  expect(data.sources).toBeDefined()
})

test('sources can be imported individually', () => {
  expect(sources).toBeDefined()
})

test('sources has items', () => {
  expect(sources.length).toBeGreaterThan(0)
})

// upgrades
test('data contains upgrades', () => {
  expect(data.upgrades).toBeDefined()
})

test('upgrades can be imported individually', () => {
  expect(upgrades).toBeDefined()
})

test('upgrades has items', () => {
  expect(upgrades.length).toBeGreaterThan(0)
})
