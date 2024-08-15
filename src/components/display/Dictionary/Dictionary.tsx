'use client'
import { useUser } from '@/api/hooks/useUser'
import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/custom/heading/Heading'
import { NextPage } from 'next'
import { useEffect } from 'react'
import styles from './Dictionary.module.scss'
import ThemeCard from './ThemeCard/ThemeCard'
const Dictionary: NextPage = () => {
	const { useGetUser } = useUser()
	// const { data, loading } = useGetUser()

	return (
		<section className={styles.container}>
			<Heading text='Dictionary' />
			<div className={styles.content}>
				<h2 className=' text-muted-foreground text-lg '>My Themes</h2>
				<div className={styles.actions}>
					<Button>Create new theme</Button>
				</div>
				<div className={styles.themes}>
					<ThemeCard />
					<ThemeCard />
				</div>
			</div>
		</section>
	)
}

export default Dictionary
