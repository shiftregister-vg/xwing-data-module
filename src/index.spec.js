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

// damageDeckCore
test('data contains damageDeckCore', () => {
  expect(data.damageDeckCore).toBeDefined()
})

test('damageDeckCore can be imported individually', () => {
  expect(damageDeckCore).toBeDefined()
})

// damageDeckCoreTfa
test('data contains damageDeckCoreTfa', () => {
  expect(data.damageDeckCoreTfa).toBeDefined()
})

test('damageDeckCoreTfa can be imported individually', () => {
  expect(damageDeckCoreTfa).toBeDefined()
})

// damageDeckRebelTransport
test('data contains damageDeckRebelTransport', () => {
  expect(data.damageDeckRebelTransport).toBeDefined()
})

test('damageDeckRebelTransport can be imported individually', () => {
  expect(damageDeckRebelTransport).toBeDefined()
})

// pilots
test('data contains pilots', () => {
  expect(data.pilots).toBeDefined()
})

test('pilots can be imported individually', () => {
  expect(pilots).toBeDefined()
})

// referenceCards
test('data contains referenceCards', () => {
  expect(data.referenceCards).toBeDefined()
})

test('referenceCards can be imported individually', () => {
  expect(referenceCards).toBeDefined()
})

// ships
test('data contains ships', () => {
  expect(data.ships).toBeDefined()
})

test('ships can be imported individually', () => {
  expect(ships).toBeDefined()
})

// sources
test('data contains sources', () => {
  expect(data.sources).toBeDefined()
})

test('sources can be imported individually', () => {
  expect(sources).toBeDefined()
})

// upgrades
test('data contains upgrades', () => {
  expect(data.upgrades).toBeDefined()
})

test('upgrades can be imported individually', () => {
  expect(upgrades).toBeDefined()
})