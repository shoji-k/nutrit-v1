// Quote from
// 日本人の食事摂取基準（2015年版）の概要（PDF：433KB）
// https://www.mhlw.go.jp/file/04-Houdouhappyou-10904750-Kenkoukyoku-Gantaisakukenkouzoushinka/0000041955.pdf

const ages = [
  [1, 2],
  [3, 4, 5],
  [6, 7],
  [8, 9],
  [10, 11],
  [12, 13, 14],
  [15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  [
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
  ],
  [
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
  ],
  [70],
]

// Energy
// １～２（歳） - 950 - - 900 -
// ３～５（歳） - 1,300 - - 1,250 -
// ６～７（歳） 1,350 1,550 1,750 1,250 1,450 1,650
// ８～９（歳） 1,600 1,850 2,100 1,500 1,700 1,900
// 10～11（歳） 1,950 2,250 2,500 1,850 2,100 2,350
// 12～14（歳） 2,300 2,600 2,900 2,150 2,400 2,700
// 15～17（歳） 2,500 2,850 3,150 2,050 2,300 2,550
// 18～29（歳） 2,300 2,650 3,050 1,650 1,950 2,200
// 30～49（歳） 2,300 2,650 3,050 1,750 2,000 2,300
// 50～69（歳） 2,100 2,450 2,800 1,650 1,900 2,200
// 70 以上（歳）2 1,850 2,200 2,500 1,500 1,750 2,000

// energy male1, male2, male3, female1, female2, female3
// maleX X=exercise level
const energy = [
  ['-', 950, '-', '-', 900, '-'],
  ['-', 1300, '-', '-', 1250, '-'],
  [1350, 1550, 1750, 1250, 1450, 1650],
  [1600, 1850, 2100, 1500, 1700, 1900],
  [1950, 2250, 2500, 1850, 2100, 2350],
  [2300, 2600, 2900, 2150, 2400, 2700],
  [2500, 2850, 3150, 2050, 2300, 2550],
  [2300, 2650, 3050, 1650, 1950, 2200],
  [2300, 2650, 3050, 1750, 2000, 2300],
  [2100, 2450, 2800, 1650, 1900, 2200],
  [1850, 2200, 2500, 1500, 1750, 2000],
]

const getEnergy = (ageIndex, sex, level = 2) => {
  let i = level - 1
  if (sex === 'female') {
    i += 3
  }
  return energy[ageIndex][i]
}

// Protein male 推定平均必要量, 推奨量, female 推定平均必要量, 推奨量
// １～２（歳） 15 20 ― 15 20 ―
// ３～５（歳） 20 25 ― 20 25 ―
// ６～７（歳） 25 35 ― 25 30 ―
// ８～９（歳） 35 40 ― 30 40 ―
// 10～11（歳） 40 50 ― 40 50 ―
// 12～14（歳） 50 60 ― 45 55 ―
// 15～17（歳） 50 65 ― 45 55 ―
// 18～29（歳） 50 60 ― 40 50 ―
// 30～49（歳） 50 60 ― 40 50 ―
// 50～69（歳） 50 60 ― 40 50 ―
// 70 以上（歳） 50 60 ― 40 50 ―

const protein = [
  [15, 20, 15, 20],
  [20, 25, 20, 25],
  [25, 35, 25, 30],
  [35, 40, 30, 40],
  [40, 50, 40, 50],
  [50, 60, 45, 55],
  [50, 65, 45, 55],
  [50, 60, 40, 50],
  [50, 60, 40, 50],
  [50, 60, 40, 50],
  [50, 60, 40, 50],
]

const getProtein = (ageIndex, sex) => {
  let i = 0
  if (sex === 'female') {
    i += 2
  }
  return protein[ageIndex][i]
}

// fat
// １～２（歳） ― 20～30（25） ― 20～30（25）
// ３～５（歳） ― 20～30（25） ― 20～30（25）
// ６～７（歳） ― 20～30（25） ― 20～30（25）
// ８～９（歳） ― 20～30（25） ― 20～30（25）
// 10～11（歳） ― 20～30（25） ― 20～30（25）
// 12～14（歳） ― 20～30（25） ― 20～30（25）
// 15～17（歳） ― 20～30（25） ― 20～30（25）
// 18～29（歳） ― 20～30（25） ― 20～30（25）
// 30～49（歳） ― 20～30（25） ― 20～30（25）
// 50～69（歳） ― 20～30（25） ― 20～30（25）
// 70 以上（歳） ― 20～30（25） ― 20～30（25）

// fat male min, male max, female
const fat = [
  [20, 30, 20, 30],
  [20, 30, 20, 30],
  [20, 30, 20, 30],
  [20, 30, 20, 30],
  [20, 30, 20, 30],
  [20, 30, 20, 30],
  [20, 30, 20, 30],
  [20, 30, 20, 30],
  [20, 30, 20, 30],
  [20, 30, 20, 30],
  [20, 30, 20, 30],
]
// 中央値を返す
const getFat = (ageIndex, sex) => {
  let i = 0
  if (sex === 'female') {
    i += 2
  }
  return (fat[ageIndex][i] + fat[ageIndex][i + 1]) / 2
}

// saturated fatty acid 飽和脂肪酸
// １～２（歳） ― ―
// ３～５（歳） ― ―
// ６～７（歳） ― ―
// ８～９（歳） ― ―
// 10～11（歳） ― ―
// 12～14（歳） ― ―
// 15～17（歳） ― ―
// 18～29（歳） 7 以下 7 以下
// 30～49（歳） 7 以下 7 以下
// 50～69（歳） 7 以下 7 以下
// 70 以上（歳） 7 以下 7 以下

// 最大値
const saturatedFattyAsid = [
  ['―', '―'],
  ['―', '―'],
  ['―', '―'],
  ['―', '―'],
  ['―', '―'],
  ['―', '―'],
  ['―', '―'],
  [7, 7],
  [7, 7],
  [7, 7],
  [7, 7],
]
// 最大値
const getSaturatedFattyAsid = (ageIndex, sex) => {
  let i = 0
  if (sex === 'female') {
    i += 1
  }
  return saturatedFattyAsid[ageIndex][i]
}

// n-6 系脂肪酸
// １～２（歳） 5 5
// ３～５（歳） 7 6
// ６～７（歳） 7 7
// ８～９（歳） 9 7
// 10～11（歳） 9 8
// 12～14（歳） 12 10
// 15～17（歳） 13 10
// 18～29（歳） 11 8
// 30～49（歳） 10 8
// 50～69（歳） 10 8
// 70 以上（歳） 8 7

const nSixFattyAsid = [
  [5, 5],
  [7, 6],
  [7, 7],
  [9, 7],
  [9, 8],
  [12, 10],
  [13, 10],
  [11, 8],
  [10, 8],
  [10, 8],
  [8, 7],
]
const getNSixFattyAsid = (ageIndex, sex) => {
  let i = 0
  if (sex === 'female') {
    i += 1
  }
  return nSixFattyAsid[ageIndex][i]
}

// n-3 系脂肪酸
// １～２（歳） 0.7 0.8
// ３～５（歳） 1.3 1.1
// ６～７（歳） 1.4 1.3
// ８～９（歳） 1.7 1.4
// 10～11（歳） 1.7 1.5
// 12～14（歳） 2.1 1.8
// 15～17（歳） 2.3 1.7
// 18～29（歳） 2.0 1.6
// 30～49（歳） 2.1 1.6
// 50～69（歳） 2.4 2.0
// 70 以上（歳） 2.2 1.9

const nThreeFattyAsid = [
  [0.7, 0.8],
  [1.3, 1.1],
  [1.4, 1.3],
  [1.7, 1.4],
  [1.7, 1.5],
  [2.1, 1.8],
  [2.3, 1.7],
  [2.0, 1.6],
  [2.1, 1.6],
  [2.4, 2.0],
  [2.2, 1.9],
]
const getNThreeFattyAsid = (ageIndex, sex) => {
  let i = 0
  if (sex === 'female') {
    i += 1
  }
  return nThreeFattyAsid[ageIndex][i]
}

// 炭水化物
// １～２（歳） 50～65（57.5） 50～65（57.5）
// ３～５（歳） 50～65（57.5） 50～65（57.5）
// ６～７（歳） 50～65（57.5） 50～65（57.5）
// ８～９（歳） 50～65（57.5） 50～65（57.5）
// 10～11（歳） 50～65（57.5） 50～65（57.5）
// 12～14（歳） 50～65（57.5） 50～65（57.5）
// 15～17（歳） 50～65（57.5） 50～65（57.5）
// 18～29（歳） 50～65（57.5） 50～65（57.5）
// 30～49（歳） 50～65（57.5） 50～65（57.5）
// 50～69（歳） 50～65（57.5） 50～65（57.5）
// 70 以上（歳） 50～65（57.5） 50～65（57.5）

// male min, male max, female min, female max
const carbohydrate = [
  [50, 65, 50, 65],
  [50, 65, 50, 65],
  [50, 65, 50, 65],
  [50, 65, 50, 65],
  [50, 65, 50, 65],
  [50, 65, 50, 65],
  [50, 65, 50, 65],
  [50, 65, 50, 65],
  [50, 65, 50, 65],
  [50, 65, 50, 65],
  [50, 65, 50, 65],
]
const getCarbohydrate = (ageIndex, sex) => {
  let i = 0
  if (sex === 'female') {
    i += 2
  }
  return (carbohydrate[ageIndex][i] + carbohydrate[ageIndex][i + 1]) / 2
}

// 食物繊維
// １～２（歳） ― ―
// ３～５（歳） ― ―
// ６～７（歳） 11 以上 10 以上
// ８～９（歳） 12 以上 12 以上
// 10～11（歳） 13 以上 13 以上
// 12～14（歳） 17 以上 16 以上
// 15～17（歳） 19 以上 17 以上
// 18～29（歳） 20 以上 18 以上
// 30～49（歳） 20 以上 18 以上
// 50～69（歳） 20 以上 18 以上
// 70 以上（歳） 19 以上 17 以上

// 最小量
const fiber = [
  ['―', '―'],
  ['―', '―'],
  [11, 10],
  [12, 12],
  [13, 13],
  [17, 16],
  [19, 17],
  [20, 18],
  [20, 18],
  [20, 18],
  [19, 17],
]
const getFiber = (ageIndex, sex) => {
  let i = 0
  if (sex === 'female') {
    i += 1
  }
  return fiber[ageIndex][i]
}

export const getNutritionData = exercise_level =>
  ages.map((age, i) => {
    return {
      ages: age,
      male: {
        energy: getEnergy(i, 'male', exercise_level),
        energyLow: getEnergy(i, 'male', 1),
        energyMiddle: getEnergy(i, 'male', 2),
        energyHigh: getEnergy(i, 'male', 3),
        protein: getProtein(i, 'male'),
        fat: getFat(i, 'male'),
        saturatdFattyAsid: getSaturatedFattyAsid(i, 'male'),
        nSixFattyAcid: getNSixFattyAsid(i, 'male'),
        nThreeFattyAcid: getNThreeFattyAsid(i, 'male'),
        carbohydrate: getCarbohydrate(i, 'male'),
        fiber: getFiber(i, 'male'),
      },
      female: {
        energy: getEnergy(i, 'female', exercise_level),
        energyLow: getEnergy(i, 'female', 1),
        energyMiddle: getEnergy(i, 'female', 2),
        energyHigh: getEnergy(i, 'female', 3),
        protein: getProtein(i, 'female'),
        fat: getFat(i, 'female'),
        saturatdFattyAsid: getSaturatedFattyAsid(i, 'female'),
        nSixFattyAcid: getNSixFattyAsid(i, 'female'),
        nThreeFattyAcid: getNThreeFattyAsid(i, 'female'),
        carbohydrate: getCarbohydrate(i, 'female'),
        fiber: getFiber(i, 'female'),
      },
    }
  })
