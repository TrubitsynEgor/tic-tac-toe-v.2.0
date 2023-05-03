import { DetailsDivProps } from '@/types';
import styles from './Game.module.scss';
import cn from 'classnames'
import { GameField, SYMBOL_O, SYMBOL_X, getSymbolClassName } from '../GameField/GameField';
import { renderSymbol } from '@/helpers/renderSymbol/renderSymbol';

interface GameProps extends DetailsDivProps { }

export const Game = ({ className, ...props }: GameProps) => {
  const currentStep = SYMBOL_X

  return (
    <div className={cn(styles.game, className)} {...props}>
      <h1>Ход: {renderSymbol(currentStep)}</h1>
      <GameField />
    </div>
  )
};
