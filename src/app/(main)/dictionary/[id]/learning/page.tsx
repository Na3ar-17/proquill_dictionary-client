import Learning from '@/components/display/Dictionary/Content/Learning/Learning'
import { NextPage } from 'next'

interface IProps {
	params: {
		id: string
	}
}

const page: NextPage<IProps> = ({ params: { id } }) => {
	return <Learning id={id} />
}

export default page
