# Cardinal Direction

Each of the **4** main compass quadrants _(N,E,S,W)_, contain **7** sub-regions. This tool can be used to convert a degree ranging from `0-360` to a correlated cardinal direction.

**Example of North Quadrant Cardinal Directions**

- N — _North_
- NbE — _North by East_
- NNE — _North North-East_
- NEbN — _North-East by North_
- NE — _North-East_
- NEbE — _North-East by East_
- ENE — _East North-East_
- EbN — _East by North_

---

## Usage

First require it.

```js
// JavaScript
const Compass = require("cardinal-direction");
```

### cardinalFromDegree

Converts a compass degree value into its correlated cardinal value.

| Param  | Type           | Required | Description                                                                                                                                             |
| ------ | -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| degree | number         | yes      | A number between `0` and `360`.                                                                                                                         |
| subset | CardinalSubset | no       | Restricts the return value to a subset of the possible cardinal directions. The default is `Full`. See [CardinalSubset](#cardinalsubset-enum) for more. |

```js
/*
 * Basic usage.
 * - returns "SW"
 */
Compass.cardinalFromDegree(221);

/*
 * Restricting results with subset.
 * - returns "W"
 */
Compass.cardinalFromDegree(221, Compass.CardinalSubset.Basic);
```

### degreeFromCardinal

Converts a cardinal direction into its correlated degree value.

| Param    | Type              | Required | Description                                                                                         |
| -------- | ----------------- | -------- | --------------------------------------------------------------------------------------------------- |
| cardinal | CardinalDirection | yes      | One of the possible cardinal directions. See [CardinalDirection](#cardinaldirection-enum) for more. |

```js
/*
 * These all return 90.
 */
Compass.degreeFromCardinal("E");
Compass.degreeFromCardinal(Compass.CardinalDirection["E"]);
Compass.degreeFromCardinal(Compass.CardinalDirection.E);
Compass.degreeFromCardinal(Compass.CardinalDirection[8]);
Compass.degreeFromCardinal(8);
```

### CardinalSubset enum

This subset enum can be used to fine tune the return value of [cardinalFromDegree](#cardinalfromdegree). When used the specified `degree` will be pushed to the nearest accepted cardinal direction, based on your restriction.

| Value       | Description                                                                   |
| ----------- | ----------------------------------------------------------------------------- |
| Basic       | Restricts the possible returned cardinals to _N_,_E_,_S_,_W_.                 |
| Partial     | Extends `Basic` to include _NE_,_ES_,_SW_,_WN_,.                              |
| PartialPlus | Extends `Partial` to include _NNE_,_ENE_,_EES_,_SES_,_SSW_,_WSW_,_WWN_,_NWN_. |
| Full        | Enables all possible cardinal directions to be retuned. **_Default_**         |

### CardinalDirection enum

There are `32` cardinal directions on a compass. But this numeric enum is `0` indexed.

```js
Compass.CardinalDirection[0]; // "N"
Compass.CardinalDirection["N"]; // 0
Compass.CardinalDirection.N; // 0
```

| Name | Value |
| ---- | ----- |
| N    | 0     |
| NbE  | 1     |
| NNE  | 2     |
| NEbN | 3     |
| NE   | 4     |
| NEbE | 5     |
| ENE  | 6     |
| EbN  | 7     |
| E    | 8     |
| EbS  | 9     |
| EES  | 10    |
| ESbE | 11    |
| ES   | 12    |
| ESbS | 13    |
| SES  | 14    |
| SbE  | 15    |
| S    | 16    |
| SbW  | 17    |
| SSW  | 18    |
| SWbS | 19    |
| SW   | 20    |
| SWbW | 21    |
| WSW  | 21    |
| WbS  | 23    |
| W    | 24    |
| WbN  | 25    |
| WWN  | 26    |
| WNbW | 27    |
| WN   | 28    |
| WNbN | 29    |
| NWN  | 30    |
| NbW  | 31    |
