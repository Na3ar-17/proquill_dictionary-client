import { GetVariationsQuery } from '@/gql/graphql'
import { NextPage } from 'next'
import styles from './Indicator.module.scss'
interface IProps {
	data: GetVariationsQuery | undefined
}

const Indicator: NextPage<IProps> = ({ data }) => {
	return (
		<div
			style={{
				width:
					data?.variations &&
					`${
						(1 - data.variations.itemsLeft / data.variations.totalItems) * 100
					}%`,
			}}
			className={styles.indicator}
		></div>
	)
}

export default Indicator
