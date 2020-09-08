import React from 'react';

class Navbar extends React.component {
    render() {
        const { name, score } = this.props;
        return (
            <div className="navbar">
                <div className="game-title">Memory</div>
                <div className="name">{name}</div>
                <div className="score">Score: {score}</div>
            </div>
        );
    }
}

export default Navbar;