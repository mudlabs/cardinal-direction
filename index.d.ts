declare module "carninal-direction" {
  /**
   * The 32 possible Cardinal Directions of a compass.
   * - The enum is `0` indexed.
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
    "EES",
    "ESbE",
    "ES",
    "ESbS",
    "SES",
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
    "WbN",
    "WWN",
    "WNbW",
    "WN",
    "WNbN",
    "NWN",
    "NbW"
  }

  /**
   * Defines a level of restriction to place on the possible results of `cardinalFormDegree`.
   */
  export enum CardinalSubset {
    /**
     * Specifies that only the basic/main cardinal directions _(N,S,E,W)_ can be returned.
     */
    Basic = 8,
    /**
     * Specifies the `Basic` and ordinal directions _(NE,ES...)_ can be returned.
     */
    Partial = 4,
    /**
     * Specifies the `Partial` and secondary-intercardinal directions _(NNE,ENE...)_ can be returned.
     */
    PartialPlus = 2,
    /**
     * Specifies that all possible directions can be returned
     * - This is the ___Default___
     */
    Full = 1
  }

  /**
   * Converts a numeric degree [0-360] into its correlated cardinal direction.
   * @param degree A compass value ranging form [0-360].
   * @param subset One of the `CardnialSubset` enum members values.
   */
  export function cardinalFromDegree(
    degree: number,
    subset?: CardinalSubset
  ): string;

  /**
   * Converts a cardinal direction into its correlated compass degree.
   * @param cardinal One of the `CardinalDirection` enum member values.
   */
  export function degreeFromCardinal(cardinal: CardinalDirection): number;
}
