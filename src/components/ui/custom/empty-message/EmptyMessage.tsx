import { NextPage } from 'next'

interface IProps {
	message: string
}

const EmptyMessage: NextPage<IProps> = ({ message }) => {
	return <div className='text-xl font-bold'>{message}</div>
}

export default EmptyMessage
