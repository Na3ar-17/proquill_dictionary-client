import { NextPage } from 'next'
import Quiz from './Quiz/Quiz'
interface IProps {
	id: string
}

const Studying: NextPage<IProps> = ({ id }) => {
	return <Quiz id={id} />
}

export default Studying
