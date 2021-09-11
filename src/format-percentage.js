const numberFormat = new Intl.NumberFormat ('en-US', {
  style: 'percent',
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

//    formatPercentage :: Number -> Number -> String
const formatPercentage = dividend => divisor => (
  divisor === 0
  ? '-'
  : numberFormat.format (dividend / divisor)
);

export default formatPercentage;
