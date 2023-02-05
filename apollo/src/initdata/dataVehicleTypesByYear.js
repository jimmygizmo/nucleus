// dataVehicleTypesByYear.js

// https://afdc.energy.gov/data/10314
// Light-Duty Vehicles Produced in the United States 1975 - 2019
// Trend in numbers and types.
// In 2009 overall production was severely impacted by the economic recession.
// In 2017 SUVs exceeded cars for the first time and has since.
// 45 records.


const jsonChunk = `
[
 {
   "year": 1975,
   "cars": 8237,
   "vans": 457,
   "suvs": 187,
   "pickups": 1343,
   "total": 10224
 },
 {
   "year": 1976,
   "cars": 9722,
   "vans": 502,
   "suvs": 243,
   "pickups": 1866,
   "total": 12333
 },
 {
   "year": 1977,
   "cars": 11300,
   "vans": 514,
   "suvs": 283,
   "pickups": 2026,
   "total": 14123
 },
 {
   "year": 1978,
   "cars": 11175,
   "vans": 625,
   "suvs": 380,
   "pickups": 2268,
   "total": 14448
 },
 {
   "year": 1979,
   "cars": 10794,
   "vans": 481,
   "suvs": 401,
   "pickups": 2207,
   "total": 13883
 },
 {
   "year": 1980,
   "cars": 9443,
   "vans": 242,
   "suvs": 184,
   "pickups": 1437,
   "total": 11306
 },
 {
   "year": 1981,
   "cars": 8733,
   "vans": 245,
   "suvs": 136,
   "pickups": 1440,
   "total": 10554
 },
 {
   "year": 1982,
   "cars": 7819,
   "vans": 311,
   "suvs": 163,
   "pickups": 1441,
   "total": 9734
 },
 {
   "year": 1983,
   "cars": 8002,
   "vans": 383,
   "suvs": 290,
   "pickups": 1628,
   "total": 10303
 },
 {
   "year": 1984,
   "cars": 10675,
   "vans": 676,
   "suvs": 625,
   "pickups": 2043,
   "total": 14019
 },
 {
   "year": 1985,
   "cars": 10791,
   "vans": 855,
   "suvs": 736,
   "pickups": 2078,
   "total": 14460
 },
 {
   "year": 1986,
   "cars": 11015,
   "vans": 1044,
   "suvs": 773,
   "pickups": 2532,
   "total": 15364
 },
 {
   "year": 1987,
   "cars": 10731,
   "vans": 1114,
   "suvs": 874,
   "pickups": 2147,
   "total": 14866
 },
 {
   "year": 1988,
   "cars": 10736,
   "vans": 1133,
   "suvs": 968,
   "pickups": 2459,
   "total": 15296
 },
 {
   "year": 1989,
   "cars": 10018,
   "vans": 1278,
   "suvs": 926,
   "pickups": 2232,
   "total": 14454
 },
 {
   "year": 1990,
   "cars": 8810,
   "vans": 1262,
   "suvs": 708,
   "pickups": 1835,
   "total": 12615
 },
 {
   "year": 1991,
   "cars": 8524,
   "vans": 1034,
   "suvs": 1095,
   "pickups": 1920,
   "total": 12573
 },
 {
   "year": 1992,
   "cars": 8108,
   "vans": 1221,
   "suvs": 1004,
   "pickups": 1840,
   "total": 12173
 },
 {
   "year": 1993,
   "cars": 8456,
   "vans": 1441,
   "suvs": 1311,
   "pickups": 2002,
   "total": 13210
 },
 {
   "year": 1994,
   "cars": 8415,
   "vans": 1418,
   "suvs": 1623,
   "pickups": 2669,
   "total": 14125
 },
 {
   "year": 1995,
   "cars": 9396,
   "vans": 1662,
   "suvs": 1816,
   "pickups": 2271,
   "total": 15145
 },
 {
   "year": 1996,
   "cars": 7890,
   "vans": 1409,
   "suvs": 1890,
   "pickups": 1955,
   "total": 13144
 },
 {
   "year": 1997,
   "cars": 8334,
   "vans": 1265,
   "suvs": 2450,
   "pickups": 2408,
   "total": 14457
 },
 {
   "year": 1998,
   "cars": 7971,
   "vans": 1489,
   "suvs": 2581,
   "pickups": 2415,
   "total": 14456
 },
 {
   "year": 1999,
   "cars": 8376,
   "vans": 1463,
   "suvs": 2830,
   "pickups": 2544,
   "total": 15213
 },
 {
   "year": 2000,
   "cars": 9125,
   "vans": 1691,
   "suvs": 3143,
   "pickups": 2612,
   "total": 16571
 },
 {
   "year": 2001,
   "cars": 8405,
   "vans": 1232,
   "suvs": 3450,
   "pickups": 2519,
   "total": 15606
 },
 {
   "year": 2002,
   "cars": 8301,
   "vans": 1243,
   "suvs": 4190,
   "pickups": 2380,
   "total": 16114
 },
 {
   "year": 2003,
   "cars": 7921,
   "vans": 1232,
   "suvs": 4146,
   "pickups": 2474,
   "total": 15773
 },
 {
   "year": 2004,
   "cars": 7537,
   "vans": 953,
   "suvs": 4714,
   "pickups": 2505,
   "total": 15709
 },
 {
   "year": 2005,
   "cars": 8027,
   "vans": 1481,
   "suvs": 4085,
   "pickups": 2300,
   "total": 15893
 },
 {
   "year": 2006,
   "cars": 7993,
   "vans": 1166,
   "suvs": 3757,
   "pickups": 2188,
   "total": 15104
 },
 {
   "year": 2007,
   "cars": 8082,
   "vans": 847,
   "suvs": 4233,
   "pickups": 2113,
   "total": 15275
 },
 {
   "year": 2008,
   "cars": 7319,
   "vans": 790,
   "suvs": 3996,
   "pickups": 1794,
   "total": 13899
 },
 {
   "year": 2009,
   "cars": 5636,
   "vans": 368,
   "suvs": 2322,
   "pickups": 989,
   "total": 9315
 },
 {
   "year": 2010,
   "cars": 6061,
   "vans": 559,
   "suvs": 3220,
   "pickups": 1276,
   "total": 11116
 },
 {
   "year": 2011,
   "cars": 5743,
   "vans": 521,
   "suvs": 4276,
   "pickups": 1479,
   "total": 12019
 },
 {
   "year": 2012,
   "cars": 7393,
   "vans": 662,
   "suvs": 4036,
   "pickups": 1357,
   "total": 13448
 },
 {
   "year": 2013,
   "cars": 8226,
   "vans": 571,
   "suvs": 4824,
   "pickups": 1577,
   "total": 15198
 },
 {
   "year": 2014,
   "cars": 7639,
   "vans": 672,
   "suvs": 5272,
   "pickups": 1929,
   "total": 15512
 },
 {
   "year": 2015,
   "cars": 7899,
   "vans": 655,
   "suvs": 6398,
   "pickups": 1786,
   "total": 16738
 },
 {
   "year": 2016,
   "cars": 7131,
   "vans": 630,
   "suvs": 6611,
   "pickups": 1907,
   "total": 16279
 },
 {
   "year": 2017,
   "cars": 6979,
   "vans": 617,
   "suvs": 7366,
   "pickups": 2054,
   "total": 17016
 },
 {
   "year": 2018,
   "cars": 5962,
   "vans": 508,
   "suvs": 7530,
   "pickups": 2259,
   "total": 16259
 },
 {
   "year": 2019,
   "cars": 5279,
   "vans": 555,
   "suvs": 7784,
   "pickups": 2521,
   "total": 16139
 }
]
`;

export const dataVehicleTypesByYear = JSON.parse(jsonChunk);

