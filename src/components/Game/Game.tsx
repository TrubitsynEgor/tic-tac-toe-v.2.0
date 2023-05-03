import { DetailsDivProps } from '@/types';
import styles from './Game.module.scss';
import cn from 'classnames'
import { GameField } from '../GameField/GameField';

interface GameProps extends DetailsDivProps { }

export const Game = ({ className, ...props }: GameProps) => {

  return (
    <div className={cn(styles.game, className)} {...props}>
      <h1>Ход: <span className='symbol symbol--x' >X</span></h1>
      <GameField />
    </div>
  )
};
