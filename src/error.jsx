import {useNavigate} from 'react-router-dom'


const ErrorPage = () => {

    const navigate = useNavigate()

    const home = () => {
        navigate("/")
    }
    return ( <>
    
    
    <h1>page not found</h1> go back <button onClick={home}>home page</button>
    </> );
}
 
export default ErrorPage;