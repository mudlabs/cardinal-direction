[npm]: https://img.shields.io/npm/v/cardinal-direction.svg?labelColor=cb3837&color=faebeb&style=for-the-badge
[size]: https://img.shields.io/github/languages/code-size/mudlabs/cardinal-direction?labelColor=146490&color=e9f6fc&style=for-the-badge
[support]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/mudlabs/shieldsio/endpoint/badges/github-sponsor.json
<!-- Badges -->
[![npm]](https://www.npmjs.com/package/cardinal-direction)
[![size]](https://www.npmjs.com/package/cardinal-direction)
<br/>
[![support]](https://github.com/sponsors/mudlabs)

# Cardinal Direction

Each of the **4** main compass quadrants _(N,E,S,W)_, contain **7** sub-regions. This tool can be used to convert a degree ranging from `0-360` to a correlated cardinal direction.

---

**Example of North Quadrant Cardinal Directions**

See [CardinalDirection](#cardinaldirection-enum) for the full list.

- N – _North_
- NbE – _North by East_
- NNE – _North Northeast_
- NEbN – _Northeast by North_
- NE – _Northeast_
- NEbE – _Northeast by East_
- ENE – _East Northeast_
- EbN – _East by North_

---

## Install
```
npm install cardinal-direction
```

---

## Usage

```js
const Compass = require("cardinal-direction");
```


<br/>

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


<br/>

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


<br/>

### cardinalConverter

Converts a cardinal value to either its abbreviation or full title.

| Param | Type | Required | Description |
| --- | --- | --- | --- |
| cardinal | string/number | yes | One of the `CardinalDirection` enum member values, or its full title. See [Cardinal Table](#cardinal-table) for context. |

```js
Compass.cardinalConverter(3): // NEbN
Compass.cardinalConverter("NEbN"): // Northeast by North
Compass.cardinalConverter("Northeast by North"); // NEbN
```


<br/>

### CardinalSubset enum

This subset enum can be used to fine tune the return value of [cardinalFromDegree](#cardinalfromdegree). When used the specified `degree` will be pushed to the nearest accepted cardinal direction, based on your restriction.

| Value         | Description                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| Full          | Enables all possible cardinal directions to be retuned. **_Default_**         |
| Basic         | Restricts the possible returned cardinals to _N_,_E_,_S_,_W_.                 |
| Ordinal       | Extends `Basic` to include _NE_,_SE_,_SW_,_NW_,.                              |
| Intercardinal | Extends `Ordinal` to include _NNE_,_ENE_,_ESE_,_SSE_,_SSW_,_WSW_,_WNW_,_NNW_. |


<br/>

### CardinalDirection enum

There are `32` cardinal directions on a compass. But this numeric enum is `0` indexed.

```js
Compass.CardinalDirection[0]; // "N"
Compass.CardinalDirection["N"]; // 0
Compass.CardinalDirection.N; // 0
```


<br/>

### Cardinal Table

| Integer | Abbreviation  | Title |
| ------- | ------------- | ----- |
| 0  | N    | North              |
| 1  | NbE  | North by East      |
| 2  | NNE  | North Northeast     |
| 3  | NEbN | Northeast by North |
| 4  | NE   | Northeast          |
| 5  | NEbE | Northeast by East  |
| 6  | ENE  | East Northeast     |
| 7  | EbN  | East by North      |
| 8  | E    | East               |
| 9  | EbS  | East by South      |
| 10 | ESE  | East Southeast     |
| 11 | SEbE | Southeast by East  |
| 12 | SE   | Southeast          |
| 13 | SEbS | Southeast by South |
| 14 | SSE  | South Southeast    |
| 15 | SbE  | South by East      |
| 16 | S    | South              |
| 17 | SbW  | South by West      |
| 18 | SSW  | South Southwest    |
| 19 | SWbS | Southwest by South |
| 20 | SW   | Southwest          |
| 21 | SWbW | Southwest by West  |
| 22 | WSW  | West Southwest     |
| 23 | WbS  | West by South      |
| 24 | W    | West               |
| 25 | Wbs  | West by North      |
| 26 | WNW  | West Northwest     |
| 27 | NWbW | Northwest by West  |
| 28 | NW   | Northwest          |
| 29 | NWbN | Northwest by North |
| 30 | NNW  | North Northwest    |
| 31 | NbW  | North by West      |
