import React, { CSSProperties } from "react";

export default class SendMessage extends React.Component {

    style: CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        margin: '10px',
        padding: '20px'
    }

    render() {
        
        return (<div className="Shadow" style={this.style}>
            <h2>Create Message</h2>
            <input type="text" placeholder="Enter message..." style={{width: '100%'}}/>
            <input type="text" placeholder="Enter public key..." style={{flexGrow: 1}}/>
            <button>Create</button>

        </div>);

    }

}