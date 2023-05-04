import { getSymbolClassName } from '../getSymbolClassName';

export const renderSymbol = (symbol: string | null) =>
  symbol !== null
    ? <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
    : ''


