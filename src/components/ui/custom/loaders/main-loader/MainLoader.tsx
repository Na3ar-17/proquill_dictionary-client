import { NextPage } from 'next'
import './MainLoader.css'

const MainLoader: NextPage = () => {
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
