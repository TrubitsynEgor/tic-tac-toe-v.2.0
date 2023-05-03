import { DetailsDivProps } from '@/types';
import styles from './GameField.module.scss';
import cn from 'classnames'
import { renderSymbol } from '@/helpers/renderSymbol/renderSymbol';

interface GameFieldProps extends DetailsDivProps { }

export const SYMBOL_X = 'X'
export const SYMBOL_O = 'O'

export const getSymbolClassName = (symbol: string | null) => {
  if (symbol === SYMBOL_O) return 'symbol--o'
  if (symbol === SYMBOL_X) return 'symbol--x'
  return ''
}

const cells = [SYMBOL_X, SYMBOL_O, null, SYMBOL_X, null, SYMBOL_O, SYMBOL_X, SYMBOL_O, null];

export const GameField = ({ className, ...props }: GameFieldProps) => {


  return (
    <div className={cn(styles.gameField, className)} {...props}>

      {cells.map((btn, idx) => <button key={idx} className={cn(styles.cell)}>
        {renderSymbol(btn)}
      </button>)}

    </div>
  )
};
