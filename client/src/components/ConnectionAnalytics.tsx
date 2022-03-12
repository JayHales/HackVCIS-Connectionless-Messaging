import React, { CSSProperties } from "react";

export default class ConnectionAnalytics extends React.Component<IConnectionAnalyticsProps, IConnectionAnalyticsState> {

    constructor(props: IConnectionAnalyticsProps) {
        super(props);
    }

    render() {
        return (<div className="Shadow" style={{width: '46%', padding: '20px', margin: '0px 10px 10px 5px'}}>
            <h2>Connection</h2>
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '10px', height: '100%'}}>
                <p className="InfoBox" style={{backgroundColor: this.props.bluetoothEnabled ? '#50c878' : '#ed2939'}}>Bluetooth</p><br/>
                <p className="InfoBox" style={{backgroundColor: this.props.internetEnabled ? '#50c878' : '#ed2939'}}>Internet</p><br/>
                <p className="InfoBox" style={{backgroundColor: this.props.wiredEnabled ? '#50c878' : '#ed2939'}}>Wired</p>
            </div>

            
        </div>)
    }

}

interface IConnectionAnalyticsState {
    
}

interface IConnectionAnalyticsProps {
    bluetoothEnabled: boolean,
    internetEnabled: boolean,
    wiredEnabled: boolean
}
