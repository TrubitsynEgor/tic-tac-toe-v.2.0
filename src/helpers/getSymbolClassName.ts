export const SYMBOL_X = 'X'
export const SYMBOL_O = 'O'

export const getSymbolClassName = (symbol: string | null) => {
	if (symbol === SYMBOL_O) return 'symbol--o'
	if (symbol === SYMBOL_X) return 'symbol--x'
	return ''
}
