import React from 'react';
import './style/App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Buttons from './components/Buttons';
import Text from './components/Text';
import Search from './components/Search';

function App() {
    return (
        <div className="container">
            <div className="top-bar">
                <Header />
                <Navigation />
                <Buttons />
            </div>
            <div className="content">
                <Text />
                <Search />
            </div>
        </div>
    );
}

export default App;
