'use client'

import { cn } from '@/lib/utils'
import { NextPage } from 'next'
import styles from './LearningRadio.module.scss'

interface IProps {
	text: string
	onChange: () => void
	value: string
	selectedValue: string
	isCorrect: boolean
	disabled: boolean
}

const LearningRadio: NextPage<IProps> = ({
	text,
	onChange,
	value,
	selectedValue,
	isCorrect,
	disabled,
}) => {
	return (
		<label
			className={cn(styles['label'], {
				[styles.correct]: isCorrect,
				[styles.canHover]: !disabled,
				[styles.disabled]: disabled,
			})}
		>
			<input
				type='radio'
				checked={value === selectedValue}
				name='value-radio'
				onChange={onChange}
				value={value}
				disabled={disabled}
			/>
			<p className={styles['text']}>{text}</p>
		</label>
	)
}

export default LearningRadio
