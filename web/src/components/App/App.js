import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Post from '../Post/Post';
import About from '../About/About';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';
import * as service from '../../service/postService';

class App extends Component {
    render() {
        service.getAllPost();
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <div className="App-header">
                        <Switch>
                            <Route path="/" component={Home} exact/>
                            <Route path="/post/:id" component={Post}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                            <Route component={Error}/>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
