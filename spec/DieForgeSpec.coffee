describe 'A die forge', () ->
  forge = new DieForge()

  it 'should forge dice.', () ->
    die = forge.forgeDie 20
    expect(die.roll).toBeDefined()
    expect(typeof die.roll).toBe 'function'
    null

  it 'should require a rank when forging dice.', () ->
    expect(forge.forgeDie).toThrow()
    expect(() -> forge.forgeDie 'foo').toThrow()
    null
  null
