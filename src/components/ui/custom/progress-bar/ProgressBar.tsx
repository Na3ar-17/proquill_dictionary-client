'use client'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
interface IProps {
	className?: string
}

const ProgressBar: NextPage<IProps> = ({ className }) => {
	const [progress, setProgress] = useState(13)

	useEffect(() => {
		const timer = setTimeout(() => setProgress(66), 500)
		return () => clearTimeout(timer)
	}, [])
	return <Progress value={progress} className={cn('w-[100%] h-2', className)} />
}

export default ProgressBar
