'use client'
import { useTheme } from '@/api/hooks/useTheme'
import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/custom/heading/Heading'
import { NextPage } from 'next'
import styles from './Dictionary.module.scss'
import ThemeCard from './ThemeCard/ThemeCard'

const Dictionary: NextPage = () => {
	const { useGetThemes, useCreateTheme } = useTheme()
	const { data, error, loading } = useGetThemes()
	const { mutation, mutationLoading } = useCreateTheme()

	if (loading) {
		return <div>Loading</div>
	}

	if (error) {
		return <div>{error.message}</div>
	}
	return (
		<section className={styles.container}>
			<Heading text='Dictionary' />
			<div className={styles.content}>
				<h2 className=' text-muted-foreground text-lg'>My Themes</h2>
				<div className={styles.actions}>
					<Button disabled={mutationLoading} onClick={() => mutation()}>
						Create new theme
					</Button>
				</div>

				<div className={styles.themes}>
					{data?.getAllThemes.map((el, i) => (
						<ThemeCard data={el} key={i} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Dictionary
