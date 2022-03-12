import React from "react";

export function Message(props: IMessageProps) {

    const communicationLookup = ["Bluetooth", "internet", "wired"];


    return(
        <div>
            <h3 className="Inline">{props.name}</h3>
            <span className="Time" style={{marginLeft: "3px"}}> via {communicationLookup[props.deliveredVia]}</span><br/>
            <span className="Time">{props.date.toLocaleDateString()}</span>
            <p>{props.message}</p>
            <br/>
        </div>
    );

}

export interface IMessageProps {
    name: string,
    date: Date,
    message: string,
    deliveredVia: ICommunicationInterface
}

export enum ICommunicationInterface {
    BLUETOOTH,
    INTERNET,
    WIRED,
    NONE
}
