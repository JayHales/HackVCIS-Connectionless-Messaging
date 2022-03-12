import React from "react";
import { Message, IMessageProps } from "./Message";

export default class Inbox extends React.Component<IInboxProps, IInboxState> {

    render() {
        return (<div style={{width: '100%', margin: '0 10px', padding: '20px'}} className="Shadow">
            <h2>
                Inbox ({this.props.readableMessages.length})
            </h2>
            <br/>
            <div style={{maxHeight: '200px', overflowY: 'scroll'}}>

               
               {this.props.readableMessages.map((message, index) => {
                return <Message key={index} name={message.name} date={message.date} message={message.message} deliveredVia={message.deliveredVia}></Message>
               })}

                

            </div>
        </div>)
    }

}

interface IInboxProps {

    readableMessages: IMessageProps[]

}

interface IInboxState {

}