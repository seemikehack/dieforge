# Using the DieForge

As of v0.1, both the Die and the DieForge objects are accessible for use. The
(eventual) intent is for only the forge to be used to generate dice.

## Dice

- `new Die(rank)`

  Returns a Die object of the given rank, where rank is a positive integer.
  Throws if rank is undefined, or is not a number, or is negative.

- `die.roll()`

  Returns a random positive integer between one and the rank of the die.

## DieForge

- `new DieForge()`

  Returns a new die forge, which implements a factory that generates dice.

- `dieForge.forgeDie(rank)`

  Returns a die of the given rank.
  Like a Die, throws if rank is undefined, or is not a number, or is negative.
