'use client'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
interface IProps {
	className?: string
	progress: number
}

const ProgressBar: NextPage<IProps> = ({ className, progress }) => {
	const [indicator, setIndicator] = useState(0)

	useEffect(() => {
		const timer = setTimeout(() => setIndicator(progress), 500)
		return () => clearTimeout(timer)
	}, [])
	return (
		<Progress value={indicator} className={cn('w-[100%] h-2', className)} />
	)
}

export default ProgressBar
