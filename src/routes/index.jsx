import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/home'
import Signin from '../pages/signin/signin'
import Siginup from '../pages/signup/signup'
import useAuth from '../hooks/useAuth'

const Private = ({Item}) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />;
}


const RoutesApp = () => {
    return (
        <Router>
           <>
            <Routes>
                <Route exact path='/home' element={<Private Item={Home}/>}/>
                <Route path='/' element={<Signin/>}/>
                <Route path='/signup' element={<Siginup/>}/>
                <Route path='*' element={<Signin/>}/>
            </Routes>
           </>
        </Router>
    )
}

export default RoutesApp;