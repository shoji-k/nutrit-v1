export const isProduction = process.env.NODE_ENV === 'production'

export const isNumber = n => typeof n === 'number' && isFinite(n)
export const isNaturalNumber = n => isNumber(n) && n > 0
export const roundNumber = (n, precise) => {
  const ratio = Math.pow(10, precise)
  return Math.round(n * ratio) / ratio
}
