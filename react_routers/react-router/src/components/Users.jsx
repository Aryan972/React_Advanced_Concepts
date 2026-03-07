import { useParams } from 'react-router-dom'

export default function Users() {
    const { Id} = useParams();

    return <div> User id: {Id}</div>
}