import { SYMBOL_O, SYMBOL_X } from '@/helpers/getSymbolClassName'
import { useState } from 'react'
import { calculateWinner } from '@/helpers/calculateWinner'
import { WinnerType } from '@/types'


export const useTicTacToe = () => {
	const [cells, setCells] = useState(Array.from({ length: 9 }, () => ''))
	const [currentStep, setCurrentStep] = useState(SYMBOL_X)
	const [winner, setWinner] = useState<WinnerType>(null)
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
		setCells(Array.from({ length: 9 }, () => ''))
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