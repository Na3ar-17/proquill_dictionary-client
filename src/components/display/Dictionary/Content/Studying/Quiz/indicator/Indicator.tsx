import { QuizSession } from '@/gql/graphql'
import { NextPage } from 'next'
import styles from './Indicator.module.scss'
interface IProps {
	data: QuizSession | undefined
}

const Indicator: NextPage<IProps> = ({ data }) => {
	return (
		<div
			style={{
				width:
					data?.variations &&
					`${(1 - data.itemsLeft / data.totalItems) * 100}%`,
			}}
			className={styles.indicator}
		></div>
	)
}

export default Indicator
