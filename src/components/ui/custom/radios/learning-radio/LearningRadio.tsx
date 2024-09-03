'use client'

import { NextPage } from 'next'
import styles from './LearningRadio.module.scss'

interface IProps {
	text: string
	onChange: () => void
	value: string
	selectedValue: string
}

const LearningRadio: NextPage<IProps> = ({
	text,
	onChange,
	value,
	selectedValue,
}) => {
	return (
		<label className={styles['label']}>
			<input
				type='radio'
				checked={value === selectedValue}
				name='value-radio'
				onChange={onChange}
				value={value}
			/>
			<p className={styles['text']}>{text}</p>
		</label>
	)
}

export default LearningRadio
