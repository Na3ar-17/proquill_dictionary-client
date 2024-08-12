import { NextPage } from 'next'

interface IProps {
	text: string
}

const Heading: NextPage<IProps> = ({ text }) => {
	return <h1 className='text-lg font-semibold md:text-2xl'>{text}</h1>
}

export default Heading
