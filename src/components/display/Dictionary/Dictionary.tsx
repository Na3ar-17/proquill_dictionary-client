'use client'
import { useTheme } from '@/api/hooks/useTheme'
import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/custom/heading/Heading'
import { ITheme } from '@/entities/theme.entity'
import { graphql } from '@/gql'
import { useMutation, useQuery } from '@apollo/client'
import { NextPage } from 'next'
import { useEffect } from 'react'
import styles from './Dictionary.module.scss'
import ThemeCard from './ThemeCard/ThemeCard'

const GET_THEMES_QUERY = graphql(`
	query getThemes {
		getAllThemes {
			id
			createdAt
			title
		}
	}
`)

const Dictionary: NextPage = () => {
	const { useGetThemes, useCreateTheme } = useTheme()
	const { data, error, loading } = useGetThemes()
	const { mutation, mutationLoading } = useCreateTheme()

	if (loading) {
		return <div>Loading</div>
	}

	if (error || !data) {
		return <div>{error && error.message}</div>
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
					{data.getAllThemes.map((el, i) => (
						<ThemeCard data={el} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Dictionary
