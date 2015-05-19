this.DieForge = () ->
  forgeDie: (rank) ->
    throw new Error 'rank must be specified' if not rank?
    throw new Error 'rank must be a number' if typeof rank isnt 'number' and rank % 1 isnt 0
    throw new Error 'rank must be positive' if rank < 0

    new Die rank
