import React, { CSSProperties } from "react";

export default class SendMessage extends React.Component<ISendMessageProps, ISendMessageState> {

    constructor(props: ISendMessageProps) {
        super(props);

        this.state = {
            message: '',
            key: ''
        }
    }

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
            <input type="text" value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} placeholder="Enter message..." style={{width: '100%'}}/>
            <input type="text" value={this.state.key} onChange={(e) => this.setState({ key: e.target.value })} placeholder="Enter public key..." style={{flexGrow: 1}}/>
            <button onClick={() => {this.props.sendMessage(this.state.message, this.state.key); this.setState({message: '', key: ''})}}>Create</button>

        </div>);

    }

}

interface ISendMessageProps {

    sendMessage: Function

}

interface ISendMessageState {
    message: string,
    key: string
}