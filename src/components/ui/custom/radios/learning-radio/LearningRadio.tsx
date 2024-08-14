'use client'

import { NextPage } from 'next'
import { useState } from 'react'
import styles from './LearningRadio.module.scss'
interface IProps {
	text: string
	id: string
	onChange: () => void
}

const LearningRadio: NextPage<IProps> = ({ text, id, onChange }) => {
	const [isChecked, setIsCkecked] = useState<boolean>(false)
	return (
		<label className={styles['label']}>
			<input
				type='radio'
				id={id}
				checked={isChecked}
				name='value-radio'
				value={id}
				onChange={onChange}
			/>
			<p className={styles['text']}>{text}</p>
		</label>
	)
}

export default LearningRadio
