import React, { CSSProperties } from "react";

export default class Inbox extends React.Component {

    render() {
        return (<div style={{width: '100%', margin: '0 10px', padding: '20px'}} className="Shadow">
            <h2>
                Inbox
            </h2>
            <br/>
            <div>
                <h3>James</h3>
                <span className="Time">12:34 16/3/29</span>
                <p>Where are you?</p>
                <br/>
                <h3>Mel</h3>
                <span className="Time">15:09 32/13/98</span>
                <p>Call me on 12345678912 ASAP.</p>
                <br/>
                <h3>UK Government</h3>
                <span className="Time">15:09 32/13/98</span>
                <p>We encourage users on Mars to leave the area as soon as possible.</p>
            </div>
        </div>)
    }

}