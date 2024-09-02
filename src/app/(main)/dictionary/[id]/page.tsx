import Content from '@/components/display/Dictionary/Content/Content'
import { NextPage } from 'next'

interface IProps {
	params: {
		id: string
	}
}

const page: NextPage<IProps> = async ({ params: { id } }) => {
	return <Content id={id} />
}

export default page
