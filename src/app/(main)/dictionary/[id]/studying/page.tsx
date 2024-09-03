import Studying from '@/components/display/Dictionary/Content/Studying/Studying'
import { NextPage } from 'next'

interface IProps {
	params: {
		id: string
	}
}

const page: NextPage<IProps> = ({ params: { id } }) => {
	return <Studying id={id} />
}

export default page
