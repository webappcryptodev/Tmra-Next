const ACTIVE_CURRENCY_CODES = [
  'SAR',
  'AED',
  'JOD',
  'KWD',
  'LBP',
  'OMR',
  'EGP',
  'QAR',
  'USD',
  'EUR',
  'IDR',
  'GBP',
];

export function getActiveCurrencies() {
  return ACTIVE_CURRENCY_CODES.map(it => ({
    code: it,
  }));
}
