
enum CardinalDirection {
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
    "NbW",
}

enum CardinalSubset { 
    Basic = 8,
    Partial = 4,
    PartialPlus = 2,
    Full = 1
}

const CardinalIncrement = 11.25;

function cardinalIntFromDegree(degree: number): number {
    const int = Math.round(degree / CardinalIncrement);
    return int > 31 ? 0 : int;
}

function cardinalFromInt(int: number): string {
    return CardinalDirection[int];
}

function cardinalFromDegree(degree: number, subset?: CardinalSubset): string {
    const int = cardinalIntFromDegree(degree);
    return subset
        ? cardinalFromInt(Math.round(int / subset) * subset)
        : cardinalFromInt(int);
}

function degreeFromCardinal(cardinal: string | number): number {
    if (typeof cardinal === "number") {
        return CardinalIncrement * (CardinalDirection[CardinalDirection[cardinal]]);
    } else {
        return CardinalIncrement * (CardinalDirection[cardinal])
    }
}
