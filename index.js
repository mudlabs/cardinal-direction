"use strict";
const CardinalIncrement = 11.25;
function cardinalIntFromDegree(degree) {
  const int = Math.round(degree / CardinalIncrement);
  return int > 31 ? 0 : int;
}
export var CardinalDirection;
(function(CardinalDirection) {
  CardinalDirection[(CardinalDirection["N"] = 0)] = "N";
  CardinalDirection[(CardinalDirection["NbE"] = 1)] = "NbE";
  CardinalDirection[(CardinalDirection["NNE"] = 2)] = "NNE";
  CardinalDirection[(CardinalDirection["NEbN"] = 3)] = "NEbN";
  CardinalDirection[(CardinalDirection["NE"] = 4)] = "NE";
  CardinalDirection[(CardinalDirection["NEbE"] = 5)] = "NEbE";
  CardinalDirection[(CardinalDirection["ENE"] = 6)] = "ENE";
  CardinalDirection[(CardinalDirection["EbN"] = 7)] = "EbN";
  CardinalDirection[(CardinalDirection["E"] = 8)] = "E";
  CardinalDirection[(CardinalDirection["EbS"] = 9)] = "EbS";
  CardinalDirection[(CardinalDirection["EES"] = 10)] = "EES";
  CardinalDirection[(CardinalDirection["ESbE"] = 11)] = "ESbE";
  CardinalDirection[(CardinalDirection["ES"] = 12)] = "ES";
  CardinalDirection[(CardinalDirection["ESbS"] = 13)] = "ESbS";
  CardinalDirection[(CardinalDirection["SES"] = 14)] = "SES";
  CardinalDirection[(CardinalDirection["SbE"] = 15)] = "SbE";
  CardinalDirection[(CardinalDirection["S"] = 16)] = "S";
  CardinalDirection[(CardinalDirection["SbW"] = 17)] = "SbW";
  CardinalDirection[(CardinalDirection["SSW"] = 18)] = "SSW";
  CardinalDirection[(CardinalDirection["SWbS"] = 19)] = "SWbS";
  CardinalDirection[(CardinalDirection["SW"] = 20)] = "SW";
  CardinalDirection[(CardinalDirection["SWbW"] = 21)] = "SWbW";
  CardinalDirection[(CardinalDirection["WSW"] = 22)] = "WSW";
  CardinalDirection[(CardinalDirection["WbS"] = 23)] = "WbS";
  CardinalDirection[(CardinalDirection["W"] = 24)] = "W";
  CardinalDirection[(CardinalDirection["WbN"] = 25)] = "WbN";
  CardinalDirection[(CardinalDirection["WWN"] = 26)] = "WWN";
  CardinalDirection[(CardinalDirection["WNbW"] = 27)] = "WNbW";
  CardinalDirection[(CardinalDirection["WN"] = 28)] = "WN";
  CardinalDirection[(CardinalDirection["WNbN"] = 29)] = "WNbN";
  CardinalDirection[(CardinalDirection["NWN"] = 30)] = "NWN";
  CardinalDirection[(CardinalDirection["NbW"] = 31)] = "NbW";
})(CardinalDirection || (CardinalDirection = {}));
export var CardinalSubset;
(function(CardinalSubset) {
  CardinalSubset[(CardinalSubset["Basic"] = 8)] = "Basic";
  CardinalSubset[(CardinalSubset["Partial"] = 4)] = "Partial";
  CardinalSubset[(CardinalSubset["PartialPlus"] = 2)] = "PartialPlus";
  CardinalSubset[(CardinalSubset["Full"] = 1)] = "Full";
})(CardinalSubset || (CardinalSubset = {}));
export function cardinalFromDegree(degree, subset) {
  const int = cardinalIntFromDegree(degree);
  return subset
    ? cardinalFromInt(Math.round(int / subset) * subset)
    : cardinalFromInt(int);
}
export function degreeFromCardinal(cardinal) {
  if (typeof cardinal === "number") {
    return CardinalIncrement * CardinalDirection[CardinalDirection[cardinal]];
  } else {
    return CardinalIncrement * CardinalDirection[cardinal];
  }
}
