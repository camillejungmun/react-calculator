import React, { Component } from 'react';
import NavBar from './navbar';
import {Routes, Route,Navigate} from 'react-router-dom';
import Home from './content/home';
import Calculator from './content/calculator';
import Login from './content/login';
import Register from './content/register';
import NotFound from './content/nofound';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar />
                <div className='container'></div>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/home' element={<Home/>} />
                        <Route path='/calculator' element={<Calculator/>} />
                        <Route path='/login' element={<Login/>} />
                        <Route path='/register' element={<Register/>} />
                        <Route path ='/nofound' element={<NotFound/>} />
                        <Route path="*" element={ <Navigate replace to="/404" /> } />
                    </Routes>
            </React.Fragment>
        );
    }
}
 
export default App;