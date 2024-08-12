import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/custom/heading/Heading'
import { NextPage } from 'next'
import styles from './Dictionary.module.scss'
import { default as Card, default as ThemeCard } from './ThemeCard/ThemeCard'
const Dictionary: NextPage = () => {
	return (
		<section className={styles.container}>
			<Heading text='Dictionary' />
			<div className={styles.content}>
				<div className={styles.actions}>
					<Button>Create new theme</Button>
				</div>
				<h2 className=' text-muted-foreground text-lg'>My Themes</h2>
				<div className={styles.themes}>
					<ThemeCard />
					<ThemeCard />
				</div>
			</div>
		</section>
	)
}

export default Dictionary
