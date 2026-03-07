import { useNavigate } from 'react-router-dom'

export default function OrderSummary() {

    const navigate = useNavigate();
    return (
        <>
         <div>Order Confirmed;</div>
         <button onClick={() => navigate("/")}>Go back</button>
        </> 
    )
}