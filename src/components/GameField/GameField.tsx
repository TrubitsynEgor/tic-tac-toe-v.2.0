import { DetailsDivProps } from '@/types';
import styles from './GameField.module.scss';
import cn from 'classnames'

interface GameFieldProps extends DetailsDivProps { }

export const GameField = ({ className, ...props }: GameFieldProps) => {

  return (
    <div className={cn(styles.gameField, className)} {...props}>
      <button className={cn(styles.cell, styles.cellWin)}><span className='symbol symbol--x'>X</span></button>
      <button className={cn(styles.cell)}><span className='symbol symbol--o'>O</span></button>
      <button className={cn(styles.cell)}></button>
      <button className={cn(styles.cell, styles.cellWin)}><span className='symbol symbol--x'>X</span></button>
      <button className={cn(styles.cell)}></button>
      <button className={cn(styles.cell)}></button>
      <button className={cn(styles.cell, styles.cellWin)}><span className='symbol symbol--x'>X</span></button>
      <button className={cn(styles.cell)}><span className='symbol symbol--o'>O</span></button>
      <button className={cn(styles.cell)}></button>
    </div>
  )
};
