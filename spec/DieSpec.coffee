describe 'A die', () ->
  rank = 20
  roll = null
  die = new Die rank

  beforeEach ->
    roll = die.roll()

  afterEach ->
    roll = null

  it 'should roll.', () ->
    expect(typeof roll).toBe 'number'
    expect(roll >= 1).toBe true
    expect(roll % 1).toEqual 0
    null

  it 'should not roll higher than its rank.', () ->
    brokeRank = (die.roll() for roll in [1..rank*100]).reduce (a, c) ->
      a || c > rank
    , false
    expect(brokeRank).toBe false
    null
  null
