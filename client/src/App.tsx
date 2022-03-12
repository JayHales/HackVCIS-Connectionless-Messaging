import React from 'react';

import SendMessage from './components/SendMessage';
import ConnectionAnalytics from './components/ConnectionAnalytics';
import StorageAnalytics from './components/StorageAnalytics';
import Inbox from './components/Inbox';

import './App.css';
import { ICommunicationInterface, IMessageProps } from './components/Message';
import DebugOutgoing, { IDebugOutgoingProps } from './components/DebugOutgoing';

export default class App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {

    super(props);
    
    this.state = {
      bluetoothEnabled: true,
      internetEnabled: true,
      wiredEnabled: false,
      readableMessages: [],

      outgoingMessages: []
    }

    this.sendMessage = this.sendMessage.bind(this);
  }

  simulateIncomingMessagePlain() {

    let comInterface = ICommunicationInterface.NONE;

    if (this.state.wiredEnabled)
      comInterface = ICommunicationInterface.WIRED;

    if (this.state.bluetoothEnabled)
      comInterface = ICommunicationInterface.BLUETOOTH;

    if (this.state.internetEnabled)
      comInterface = ICommunicationInterface.INTERNET;

    if (comInterface === ICommunicationInterface.NONE)
      return;


    this.setState({
      readableMessages: this.state.readableMessages.concat([{name: "Beep", date: new Date(Date.now()), message: "Boop", deliveredVia: comInterface}])
    })

  } 

  sendMessage(message: string, key: string) {

    this.setState({
      outgoingMessages: this.state.outgoingMessages.concat([{message: message, receiverPublicKey: key, senderPublicKey: '5', sendDate: new Date(Date.now())}])
    })

  }

  render() {
    return (
      <div>
        <br/>
        <div className="App">
  
        <header>
  
        </header>
  
        <SendMessage sendMessage={this.sendMessage}></SendMessage>
        <StorageAnalytics></StorageAnalytics>
        <ConnectionAnalytics bluetoothEnabled={this.state.bluetoothEnabled} internetEnabled={this.state.internetEnabled} wiredEnabled={this.state.wiredEnabled}></ConnectionAnalytics>
  
        <Inbox readableMessages={this.state.readableMessages}></Inbox>
  
        <br/>
  
        </div>
  
        <div className='Debugger Shadow'>
          <h1>Debugger</h1>
  
          <button onClick={() => {
            this.setState({bluetoothEnabled: !this.state.bluetoothEnabled})
          }}>Toggle Bluetooth</button>
          <button onClick={() => {
            this.setState({internetEnabled: !this.state.internetEnabled})
          }}>Toggle Internet</button>
          <button onClick={() => {
            this.setState({wiredEnabled: !this.state.wiredEnabled})
          }}>Toggle Wired</button>
  
          <button>Simulate Incoming Message (Unreadable)</button>
          <button onClick={() => this.simulateIncomingMessagePlain()}>Simulate Incoming Message (Readable)</button>

          <div className="Outgoing">
            <h1>
              Outgoing
            </h1>
            <div style={{height: '200px', overflow: 'scroll'}}>
            {
              this.state.outgoingMessages.map((message, index) => {

                return <DebugOutgoing key={index} senderPublicKey={message.senderPublicKey} receiverPublicKey={message.receiverPublicKey} message={message.message} sendDate={message.sendDate}></DebugOutgoing>

              })
            }
            </div>
            
            
          </div>
        </div>
  
      </div>
  
      
      
    );
  }
}

interface IAppState {
  bluetoothEnabled: boolean,
  internetEnabled: boolean,
  wiredEnabled: boolean,
  readableMessages: IMessageProps[],

  outgoingMessages: IDebugOutgoingProps[]
} 

interface IAppProps {

}
