import React, { CSSProperties } from "react";

export default class ConnectionAnalytics extends React.Component {

    render() {
        return (<div className="Shadow" style={{width: '46%', padding: '20px', margin: '0px 10px 10px 5px'}}>
            <h2>Connection</h2>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '10px', height: '100%'}}>
                <p className="InfoBox" style={{backgroundColor: '#50c878'}}>Bluetooth</p><br/>
                <p className="InfoBox" style={{backgroundColor: '#ed2939'}}>Internet</p><br/>
                <p className="InfoBox" style={{backgroundColor: '#ed2939'}}>Wired</p>
            </div>

            
        </div>)
    }

}