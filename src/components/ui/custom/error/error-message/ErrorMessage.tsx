import { NextPage } from 'next'

interface IProps {
	message: string
}

const ErrorMessage: NextPage<IProps> = ({ message }) => {
	return (
		<div className='text-red-500 bg-destructive/40 border-2 border-solid border-destructive px-3 py-4 rounded-md'>
			{message}
		</div>
	)
}

export default ErrorMessage
