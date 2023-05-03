import { getSymbolClassName } from '@/components/GameField/GameField';

export const renderSymbol = (symbol: string | null) =>
  symbol !== null
    ? <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
    : ''


