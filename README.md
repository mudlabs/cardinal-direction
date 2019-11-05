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

| Value         | Description                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| Full          | Enables all possible cardinal directions to be retuned. **_Default_**         |
| Basic         | Restricts the possible returned cardinals to _N_,_E_,_S_,_W_.                 |
| Ordinal       | Extends `Basic` to include _NE_,_ES_,_SW_,_WN_,.                              |
| Intercardinal | Extends `Ordinal` to include _NNE_,_ENE_,_EES_,_SES_,_SSW_,_WSW_,_WWN_,_NWN_. |

### CardinalDirection enum

There are `32` cardinal directions on a compass. But this numeric enum is `0` indexed.

```js
Compass.CardinalDirection[0]; // "N"
Compass.CardinalDirection["N"]; // 0
Compass.CardinalDirection.N; // 0
```

| Name | Value | Legend             |
| ---- | ----- | ------------------ |
| N    | 0     | North              |
| Nbe  | 1     | North by East      |
| NNE  | 2     | Noth-northeast     |
| NEbN | 3     | Northeast by North |
| NE   | 4     | Northeast          |
| NEbE | 5     | Northeast by East  |
| ENE  | 6     | East-northeast     |
| EbN  | 7     | East by North      |
| E    | 8     | East               |
| EbS  | 9     | East by South      |
| ESE  | 10    | East-southeast     |
| SEbE | 11    | Southeast by East  |
| SE   | 12    | Southeast          |
| SEbS | 13    | Southeast By South |
| SSE  | 14    | South-southeast    |
| SbE  | 15    | South be East      |
| S    | 16    | South              |
| SbW  | 17    | South by West      |
| SSW  | 18    | South-southwest    |
| SWbS | 19    | Southwest by South |
| SW   | 20    | Southwest          |
| SWbW | 21    | Southwest by West  |
| WSW  | 22    | West-southwest     |
| WbS  | 23    | West by South      |
| W    | 24    | West               |
| Wbs  | 25    | West by North      |
| WNW  | 26    | West-northwest     |
| NWbW | 27    | Northwest by West  |
| NW   | 28    | Northwest          |
| NWbN | 29    | Northwest by North |
| NNW  | 30    | North-northwest    |
| NbW  | 31    | North by West      |
