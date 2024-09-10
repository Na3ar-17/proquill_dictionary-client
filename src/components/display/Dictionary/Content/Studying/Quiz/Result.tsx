import { Button } from '@/components/ui/button'
import { QuizzResultChart } from '@/components/ui/custom/charts/QuizzResultChart/QuizzResultChart'
import { Skeleton } from '@/components/ui/skeleton'
import { NextPage } from 'next'

interface IProps {
	resultLoading: boolean
	correctAnswers: number
	handleRestart: () => void
}

const Result: NextPage<IProps> = ({
	resultLoading,
	handleRestart,
	correctAnswers,
}) => {
	return (
		<div className='flex flex-col items-center'>
			{resultLoading ? (
				<Skeleton className='h-[184px] w-[184px] rounded-full mb-8' />
			) : (
				<QuizzResultChart
					chartText='Correct answers'
					correctAnswersPercent={correctAnswers}
				/>
			)}
			<Button onClick={handleRestart}>Restart</Button>
		</div>
	)
}

export default Result
