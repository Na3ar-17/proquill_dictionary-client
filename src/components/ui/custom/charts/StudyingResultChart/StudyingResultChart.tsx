'use client'

import {
	Label,
	PolarGrid,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart,
} from 'recharts'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'

interface IProps {
	chartText: string
	correctAnswersPercent: number
}

export function StudyingResultChart({
	chartText,
	correctAnswersPercent,
}: IProps) {
	const chartData = [
		{ browser: 'safari', correctAnswersPercent, fill: 'var(--color-safari)' },
	]

	const chartConfig = {
		correctAnswersPercent: {
			label: 'correct answers percent',
		},
		safari: {
			label: 'Safari',
			color: 'hsl(var(--chart-5))',
		},
	} satisfies ChartConfig

	return (
		<Card className='flex flex-col border-none w-fit h-fit'>
			<CardHeader className='items-center pb-0'>
				<CardTitle></CardTitle>
				<CardDescription></CardDescription>
			</CardHeader>
			<CardContent className='pb-0 '>
				<ChartContainer
					config={chartConfig}
					className='mx-auto aspect-square h-[250px]'
				>
					<RadialBarChart
						data={chartData}
						endAngle={0}
						innerRadius={80}
						outerRadius={140}
					>
						<PolarGrid
							gridType='circle'
							radialLines={false}
							stroke='none'
							className='first:fill-muted last:fill-card'
							polarRadius={[86, 74]}
						/>
						<RadialBar dataKey='correctAnswersPercent' background />
						<PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
							<Label
								content={({ viewBox }) => {
									if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor='middle'
												dominantBaseline='middle'
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className='fill-foreground text-4xl font-bold'
												>
													{chartData[0].correctAnswersPercent.toLocaleString() +
														'%'}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className='fill-muted-foreground'
												>
													{chartText}
												</tspan>
											</text>
										)
									}
								}}
							/>
						</PolarRadiusAxis>
					</RadialBarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className='flex-col gap-2 text-sm'></CardFooter>
		</Card>
	)
}
