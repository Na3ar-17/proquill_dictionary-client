import { NextPage } from 'next'
import './MainLoader.css'

const MainLoader: NextPage = () => {
	return (
		<div className='loader'>
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
