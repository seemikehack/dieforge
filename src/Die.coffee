this.Die = (rank) ->
  throw new Error 'rank must be specified' if not rank?
  throw new Error 'rank must be a number' if typeof rank isnt 'number' and rank % 1 isnt 0
  throw new Error 'rank must be positive' if rank < 0

  roll: () ->
    Math.floor(Math.random() * rank + 1)
