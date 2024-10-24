'use client'
import { useTheme } from '@/api/hooks/useTheme'
import { Button } from '@/components/ui/button'
import EmptyMessage from '@/components/ui/custom/empty-message/EmptyMessage'
import ErrorMessage from '@/components/ui/custom/error/error-message/ErrorMessage'
import Heading from '@/components/ui/custom/heading/Heading'
import { Skeleton } from '@/components/ui/skeleton'
import { NextPage } from 'next'
import styles from './Dictionary.module.scss'
import ThemeCard from './ThemeCard/ThemeCard'

const Dictionary: NextPage = () => {
	const { useGetThemes, useCreateTheme } = useTheme()
	const { themes, loading, error, setThemes } = useGetThemes()
	const { mutation, mutationLoading } = useCreateTheme()

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
					{error && <ErrorMessage message={error.message} />}
					{loading ? (
						Array.from({ length: 8 }).map((el, i) => (
							<Skeleton key={i} className='h-[95px]' />
						))
					) : themes?.length == 0 ? (
						<EmptyMessage message='You dont have any themes yet!' />
					) : (
						themes?.map((el, i) => (
							<ThemeCard data={el} key={i} setThemes={setThemes} />
						))
					)}
				</div>
			</div>
		</section>
	)
}

export default Dictionary
