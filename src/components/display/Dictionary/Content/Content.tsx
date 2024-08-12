import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/custom/heading/Heading'
import { Input } from '@/components/ui/input'
import { NextPage } from 'next'
import styles from './Content.module.scss'
import ContentCard from './ContentCard/ContentCard'
interface IProps {
	id: string
}

const Content: NextPage<IProps> = ({ id }) => {
	return (
		<section className={styles.container}>
			<Heading text='Counter Striike' />
			<div className={styles.content}>
				<div className={styles.actions}>
					<div>
						<Input placeholder='Type to search' />
					</div>
					<div>
						<Button variant={'default'}>Create new sentence</Button>
					</div>
				</div>
				<div className={styles.sentences}>
					<ContentCard />
				</div>
			</div>
		</section>
	)
}

export default Content
