import { DetailsDivProps, WinnerType } from '@/types';
import styles from './GameField.module.scss';
import cn from 'classnames'
import { renderSymbol } from '@/helpers/renderSymbol';

interface GameFieldProps extends DetailsDivProps {
  winner: WinnerType
  cells: string[]
  handleCellClick: (idx: number) => void

}

export const GameField = ({ cells, handleCellClick, winner, className, ...props }: GameFieldProps) => {

  return (
    <div className={cn(styles.gameField, className)} {...props}>
      {cells.map((btn, idx) => <button
        onClick={() => handleCellClick(idx)}
        key={idx}
        className={cn(styles.cell, {
          [styles.cellWin]: winner?.array?.includes(idx)
        })}>
        {renderSymbol(btn)}
      </button>)}
    </div>
  )
};
