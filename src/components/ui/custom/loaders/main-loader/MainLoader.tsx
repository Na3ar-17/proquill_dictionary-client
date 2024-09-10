import { NextPage } from 'next'
import './MainLoader.css'
interface IProps {}

const MainLoader: NextPage<IProps> = ({}) => {
	return (
		<div className='container'>
			<div className='spinner'>
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	)
}

export default MainLoader
