import React, { CSSProperties } from "react";

export default class StorageAnalytics extends React.Component {

    render() {
        return (<div className="Shadow" style={{width: '47%', padding: '20px', margin: '0px 5px 10px 10px'}}>

            <h2>Storage</h2>

            <svg style={{margin: '10px'}} xmlns="http://www.w3.org/2000/svg" id="sv" viewBox="0 0 180 180"><path id="0" fill="#cccccc" d="M90, 0 A90,90 0 0 1 177.335247228266,68.26167919139903 L148.22349815217734,75.50778612759935 A60,60 0 0 0 90,30 Z"></path><path id="1" fill="#8dceb2" d="M177.335247228266, 68.26167919139903 A90,90 0 0 1 18.55984848908571,144.73851251265063 L42.37323232605714,126.49234167510043 A60,60 0 0 0 148.22349815217734,75.50778612759935 Z"></path><path id="2" fill="#c6974b" d="M18.55984848908571, 144.73851251265063 A90,90 0 0 1 89.98429203681187,0.0000013707783779182137 L89.98952802454124,30.000000913852254 A60,60 0 0 0 42.37323232605714,126.49234167510043 Z"></path></svg>           

            <span className="SquareIcon" style={{backgroundColor: '#c6974b'}}></span>
            <span>Free: 36% </span><br/>
            <span className="SquareIcon" style={{backgroundColor: '#cccccc'}}></span>
            <span>Message Data: 21% </span><br/>
            <span className="SquareIcon" style={{backgroundColor: '#8dceb2'}}></span>
            <span>Other: 45% </span><br/>
        </div>)
    }

}