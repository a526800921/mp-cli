export default num => {
  if (typeof num !== 'number') return false
  if (num !== num) return false // NaN
  return true
}