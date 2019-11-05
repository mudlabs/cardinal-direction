const CardinalIncrement = 11.25;

function cardinalIntFromDegree(degree: number): number {
  const int = Math.round(degree / CardinalIncrement);
  return int > 31 ? 0 : int;
}

function ensureProperType(value: string | number, block: any): number {
  if (typeof value === "string") {
    return block[value];
  } else {
    return block[block[value]];
  }
}

function cardinalFromIntSubset(
  cardinalInt: number,
  cardinalSubset: CardinalSubset
): string {
  const subset = ensureProperType(cardinalSubset, CardinalSubset);
  const int = Math.round(cardinalInt / subset) * subset;
  return CardinalDirection[int > 32 - subset + subset / 2 ? 0 : int];
}

/**
 * There are 32 cardinal-type direction on a compass.
 * - This numeric enum is `0` indexed.
 */
export enum CardinalDirection {
  "N",
  "NbE",
  "NNE",
  "NEbN",
  "NE",
  "NEbE",
  "ENE",
  "EbN",
  "E",
  "EbS",
  "ESE",
  "SEbE",
  "SE",
  "SEbS",
  "SSE",
  "SbE",
  "S",
  "SbW",
  "SSW",
  "SWbS",
  "SW",
  "SWbW",
  "WSW",
  "WbS",
  "W",
  "Wbs",
  "WNW",
  "NWbW",
  "NW",
  "NWbN",
  "NNW",
  "NbW"
}

/**
 * Used to restrict the type of cardinal direction that can be returned by `cardinalFromDegree`. When a subset is specified the degree will be pushed the the nearest acceptable cardinal.
 * @member Full - All directions can be returned. ___[DEFAULT]___
 * @member Basic - Specifies only basic _(N,E,S,W)_ can be returned.
 * @member Ordinal - Extends on `Basic`, allowing _(NE,SE etc..)_ to be returned.
 * @member Intercardinal - Extends on `Ordinal, allowing _(NNE,ENE etc...)_ to re returned.
 */
export enum CardinalSubset {
  Full = 1,
  Basic = 8,
  Ordinal = 4,
  Intercardinal = 2
}

/**
 * Converts a compass degree [0-360] into its correlated cardinal direction.
 * @param degree - The compass degree to covert [0-360].
 * @param subset - _[optional]_ Specifies the type of cardinal that can be returned. See `CardinalSubset` enum for details.
 * @return [string] A `CardinalDirection` enum member value.
 */
export function cardinalFromDegree(
  degree: number,
  subset?: CardinalSubset
): string {
  const int = cardinalIntFromDegree(degree);
  return subset ? cardinalFromIntSubset(int, subset) : CardinalDirection[int];
}

/**
 * Converts a cardinal direction into its correlated compass degree value.
 * @param cardinal - One of the `CardinalDirection` enum member values.
 * @return [number] A compas degree between [0-360].
 */
export function degreeFromCardinal(cardinal: CardinalDirection): number {
  const cardinalInt = ensureProperType(cardinal, CardinalDirection);
  return CardinalIncrement * cardinalInt;
}
