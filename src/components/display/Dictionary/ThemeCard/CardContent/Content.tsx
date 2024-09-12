import { useContent } from '@/api/hooks/useContent'
import { CardContent } from '@/components/ui/card'
import ProgressBar from '@/components/ui/custom/progress-bar/ProgressBar'
import { NextPage } from 'next'
import styles from '../ThemeCard.module.scss'

interface IProps {
	wordsLearned: number
	themeId: string
}

const Content: NextPage<IProps> = ({ wordsLearned, themeId }) => {
	const { useGetContentLength } = useContent()
	const { data, isContentLengthLoading } = useGetContentLength({ themeId })
	return (
		<CardContent className='w-full h-full flex items-end justify-end'>
			<div className={styles['progress-container']}>
				<ProgressBar className='h-[5px]' progress={wordsLearned} />
			</div>
			<p className='text-base text-zinc-500 font-semibold'>
				{isContentLengthLoading
					? 'loading'
					: data?.content_length
					? data?.content_length > 0 && (
							<span>
								{`${data?.content_length} item${
									data?.content_length > 1 ? 's' : ''
								}`}
							</span>
					  )
					: ''}
			</p>
		</CardContent>
	)
}

export default Content
