import { DetailsDivProps } from '@/types';
import styles from './Game.module.scss';
import cn from 'classnames'
import { GameField } from '../GameField/GameField';
import { renderSymbol } from '@/helpers/renderSymbol/renderSymbol';
import { useTicTacToe } from '../hooks/useTicTacToe';

export type IWinner = {
  array: number[]
  winnerSymbol: string
} | null

export const Game = ({ className, ...props }: DetailsDivProps) => {

  const { isDraw, winner, currentStep, cells, handleCellClick, restart } = useTicTacToe()

  return (
    <div className={cn(styles.game, className)} {...props}>
      {!isDraw ?
        (winner === null
          ? <h1>Step: {renderSymbol(currentStep)} </h1>
          : <h1>Winner:{renderSymbol(winner.winnerSymbol)} </h1>)
        : <h1>The draw!</h1>}
      <GameField winner={winner} cells={cells} handleCellClick={handleCellClick} restart={restart} />
    </div>
  )
};
