export default function DebugOutgoing(props: IDebugOutgoingProps): JSX.Element {
    
    return (
        <div>

            <p>To and encrypted with: {props.receiverPublicKey}</p>
            <p>Sender public key: {props.senderPublicKey}</p>
            <p>Message: {props.message}</p>
            <p>Date: {props.sendDate.toLocaleDateString()}</p>
            <br/>
        </div>
    );

}

export interface IDebugOutgoingProps {
    senderPublicKey: string,
    receiverPublicKey: string,
    message: string,
    sendDate: Date
}