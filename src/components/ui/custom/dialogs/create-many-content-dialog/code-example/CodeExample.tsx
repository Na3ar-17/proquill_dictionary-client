import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card'
import { ClipboardCheck, Copy } from 'lucide-react'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import JsonFormatter from 'react-json-formatter'

const CodeExample: NextPage = () => {
	const [isCopied, setIsCopied] = useState<boolean>(false)
	const example = {
		sentence: 'Your sentence',
		translation: 'Your translation',
		transcription: 'Your transcription',
	}
	const example2 = {
		sentence: 'Your sentence 2',
		translation: 'Your translation 2',
		transcription: 'Your transcription 2',
	}
	const jsonStyle = {
		propertyStyle: { color: '#2651be' },
		stringStyle: { color: 'green' },
	}

	const text = `
[
   {
      "sentence": "Your sentence",
      "translation": "Your translation",
      "transcription": "Your transcription"
   },
   {
      "sentence": "Your sentence 2",
      "translation": "Your translation 2",
      "transcription": "Your transcription 2"
   }
]`
	useEffect(() => {
		setIsCopied(false)
	}, [])
	return (
		<HoverCard
			onOpenChange={() => {
				setTimeout(() => {
					if (isCopied) setIsCopied(false)
				}, 500)
			}}
		>
			<HoverCardTrigger>
				<p className='underline text-base text-primary cursor-pointer inline'>
					Preview
				</p>
			</HoverCardTrigger>
			<HoverCardContent className='w-fit'>
				<p className='text-sm'>{'"transcription"'} is optional</p>
				<div className='p-3 bg-[#08090a] rounded-md mt-2 relative'>
					{isCopied ? (
						<div className='absolute right-4 top-4 border border-solid border-border rounded-md p-2'>
							<ClipboardCheck className='size-4' />
						</div>
					) : (
						<div
							onClick={() => {
								navigator.clipboard.writeText(text.trim())
								setIsCopied(true)
							}}
							className='absolute right-4 top-4 bg-primary cursor-pointer hover:bg-primary/40 transition-colors rounded-md p-2'
						>
							<Copy className='size-4' />
						</div>
					)}
					{'['}
					<JsonFormatter
						json={example}
						jsonStyle={{ style: { marginLeft: '15px' }, ...jsonStyle }}
						tabWith={2}
					/>
					{' , '}
					<JsonFormatter
						json={example2}
						jsonStyle={{ style: { marginLeft: '15px' }, ...jsonStyle }}
						tabWith={2}
					/>
					{']'}
				</div>
			</HoverCardContent>
		</HoverCard>
	)
}

export default CodeExample
