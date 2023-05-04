import { DetailsDivProps, WinnerType } from '@/types';
import styles from './GameField.module.scss';
import cn from 'classnames'
import { renderSymbol } from '@/helpers/renderSymbol';

interface GameFieldProps extends DetailsDivProps {
  winner: WinnerType
  cells: string[]
  handleCellClick: (idx: number) => void
  restart: () => void
}

export const GameField = ({ cells, handleCellClick, restart, winner, className, ...props }: GameFieldProps) => {

  return (
    <div className={styles.wrapper}>
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

      <button className={styles.reset} onClick={restart}>Try again!</button>
    </div>
  )
};
