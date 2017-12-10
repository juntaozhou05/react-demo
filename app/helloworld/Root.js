import React from 'react';
import Player from './components/Player';
import "./root.less"

class Root extends React.Component{
    render() {
        return (
            <div>
                <div className="title">
                    <img src="../static/images/logo.png" width="50" />
                    <span>Music Player</span>
                </div>
                <Player></Player>
            </div>
        );
    }
};

export default Root;
