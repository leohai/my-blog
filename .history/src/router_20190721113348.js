import React,{Component} from 'react';
import App from './App';
import {browserHistory,Router,Route} from 'react-router-dom'
import  Home from './page'
class MainRouter extends Component{
    render(){
        return <Router histroy={browserHistory}>
            <App>
                <Route path='/' Component={Home}></Route>
            </App>
        </Router>
    }
}

export default router