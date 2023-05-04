import { SYMBOL_O, SYMBOL_X } from '@/helpers/getSymbolClassName'
import { IWinner } from '../Game/Game'
import { useState } from 'react'
import { calculateWinner } from '@/helpers/calculateWinner'


export const useTicTacToe = () => {
	const [cells, setCells] = useState(['', '', '', '', '', '', '', '', ''])
	const [currentStep, setCurrentStep] = useState(SYMBOL_X)
	const [winner, setWinner] = useState<IWinner>(null)

	const isDraw = !winner && cells.filter(el => el).length === 9


	const handleCellClick = (idx: number) => {
		if (cells[idx] || winner !== null) return
		const newCells = [...cells]
		newCells[idx] = currentStep

		setCells(newCells)
		setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_O : SYMBOL_X)
		setWinner(calculateWinner(newCells))

	}

	const restart = () => {
		setCells(['', '', '', '', '', '', '', '', ''])
		setWinner(null)
		setCurrentStep(SYMBOL_X)
	}


	return {
		cells,
		currentStep,
		winner,
		isDraw,
		handleCellClick,
		restart
	}

}