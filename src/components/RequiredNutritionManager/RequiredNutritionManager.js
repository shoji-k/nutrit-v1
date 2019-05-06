import React, { Fragment } from 'react'
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect'
import { roundNumber } from '../../utils'
import { getPersonData } from '../RequiredNutrition/constants'

const sum = (data, itemName) => data.reduce((a, c) => a + c[itemName], 0)

const yogurt = {
  name: '明治ブルガリアヨーグルトLB81 プレーン',
  amount: '150g あたり',
  referenceUrl:
    'https://catalog-p.meiji.co.jp/products/dairies/yogurt/020201/4902705011625.html',
  energy: 62 * 1.5, // kcal
  protein: 3.4 * 1.5, // g
  fat: 3.0 * 1.5, // g
  carbohydrate: 5.3, // g
  salt: 0.13 * 1.5, // g
  calcium: 109 * 1.5, // mg
}

const oligosaccharide = {
  name: 'イソマルトオリゴ糖シロップ',
  amount: '15g あたり',
  referenceUrl: 'https://www.itohkampo.co.jp/products/1148388.html',
  energy: (302 * 15) / 100, // kcal
  protein: 0, // g
  fat: 0, // g
  carbohydrate: (75.4 * 15) / 100, // g
  natrium: 0, // mg
}

const balanceup = {
  name: 'バランスアップ 玄米ブラン はちみつレーズン',
  amount: '1袋(30g)',
  referenceUrl:
    'https://www.asahi-fh.com/products/balanced-food/balance-up/popup05.html',
  energy: 141, // kcal
  protein: 1.9, // g
  fat: 6.3, // g
  carbohydrate: 20.1, // g
  fiber: 18, // g
}

const data = []
data.push(yogurt)
data.push(oligosaccharide)
data.push(balanceup)

const exercise_level = 2
const age = 35
const sex = 'male'
const personData = getPersonData(exercise_level, age, sex)

const sumData = {
  energy: roundNumber(sum(data, 'energy'), 0),
  protein: roundNumber(sum(data, 'protein'), 1),
  fat: roundNumber(sum(data, 'fat'), 1),
  carbohydrate: roundNumber(sum(data, 'carbohydrate'), 1),
}

const chartData = [
  {
    type: 'energy',
    ratio: roundNumber((sumData.energy / personData.energy) * 100, 0),
  },
  {
    type: 'protein',
    ratio: roundNumber((sumData.protein / personData.protein) * 100, 0),
  },
  {
    type: 'fat',
    ratio: roundNumber((sumData.fat / personData.fat) * 100, 0),
  },
  {
    type: 'carbohydrate',
    ratio: roundNumber(
      (sumData.carbohydrate / personData.carbohydrate) * 100,
      0
    ),
  },
]

const RequiredNutritionManager = () => {
  return (
    <div>
      {data.map((one, i) => (
        <Fragment key={i}>
          <h3>{one.name}</h3>
          <p>{one.amount}</p>
          <table className="uk-table uk-table-divider">
            <tbody>
              <tr>
                <th>エネルギー</th>
                <td>{one.energy} kcal</td>
              </tr>
              <tr>
                <th>たんぱく質</th>
                <td>{one.protein} g</td>
              </tr>
              <tr>
                <th>脂質</th>
                <td>{one.fat} g</td>
              </tr>
              <tr>
                <th>炭水化物</th>
                <td>{one.carbohydrate} g</td>
              </tr>
            </tbody>
          </table>
          <small>
            <a
              href={one.referenceUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              出典リンク
            </a>
          </small>
        </Fragment>
      ))}

      {isBrowser ? (
        <Fragment>
          <h3>合計</h3>
          <table className="uk-table uk-table-divider">
            <thead>
              <tr>
                <th />
                {data.map((one, i) => (
                  <th key={i}>{one.name}</th>
                ))}
                <th>合計</th>
                <th>必要量</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>エネルギー</th>
                {data.map((one, i) => (
                  <td key={i}>{one.energy} kcal</td>
                ))}
                <td>{sumData.energy} kcal</td>
                <td>{personData.energy} kcal</td>
              </tr>
              <tr>
                <th>たんぱく質</th>
                {data.map((one, i) => (
                  <td key={i}>{one.protein} g</td>
                ))}
                <td>{sumData.protein} g</td>
                <td>{personData.protein} g</td>
              </tr>
              <tr>
                <th>脂質</th>
                {data.map((one, i) => (
                  <td key={i}>{one.fat} g</td>
                ))}
                <td>{sumData.fat} g</td>
                <td>{personData.fat} g</td>
              </tr>
              <tr>
                <th>炭水化物</th>
                {data.map((one, i) => (
                  <td key={i}>{one.carbohydrate} g</td>
                ))}
                <td>{sumData.carbohydrate} g</td>
                <td>{personData.carbohydrate} g</td>
              </tr>
            </tbody>
          </table>
        </Fragment>
      ) : (
        <Fragment>
          <h3>合計</h3>
          <table className="uk-table uk-table-divider">
            <thead>
              <tr>
                <th />
                {/* <th>詳細</th> */}
                <th>合計</th>
                <th>必要量</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>エネルギー</th>
                {/* <td>
                  {data.map((one, i) => (
                    <Fragment key={i}>
                      {one.name + ': ' + one.energy} kcal
                      <br />
                    </Fragment>
                  ))}
                </td> */}
                <td>{sumData.energy} kcal</td>
                <td>{personData.energy} kcal</td>
              </tr>
              <tr>
                <th>たんぱく質</th>
                {/* <td>
                  {data.map((one, i) => (
                    <Fragment key={i}>
                      {one.name + ': ' + one.protein} kcal
                      <br />
                    </Fragment>
                  ))}
                </td> */}
                <td>{sumData.protein} kcal</td>
                <td>{personData.protein} kcal</td>
              </tr>
              <tr>
                <th>脂質</th>
                {/* <td>
                  {data.map((one, i) => (
                    <Fragment key={i}>
                      {one.name + ': ' + one.fat} kcal
                      <br />
                    </Fragment>
                  ))}
                </td> */}
                <td>{sumData.fat} kcal</td>
                <td>{personData.fat} kcal</td>
              </tr>
              <tr>
                <th>炭水化物</th>
                {/* <td>
                  {data.map((one, i) => (
                    <Fragment key={i}>
                      {one.name + ': ' + one.carbohydrate} kcal
                      <br />
                    </Fragment>
                  ))}
                </td> */}
                <td>{sumData.carbohydrate} kcal</td>
                <td>{personData.carbohydrate} kcal</td>
              </tr>
            </tbody>
          </table>
        </Fragment>
      )}

      <h3>合計%チャート</h3>
      <RadarChart width={480} height={360} data={chartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="type" />
        <PolarRadiusAxis angle={90} domain={[0, 100]} />
        <Radar
          name="%"
          dataKey="ratio"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  )
}

export default RequiredNutritionManager
