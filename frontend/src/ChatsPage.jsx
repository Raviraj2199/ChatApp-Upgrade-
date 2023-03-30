import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'


const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('267e9c34-52db-487f-8961-64628912e540',
    props.user.username,
    props.user.secret);
    return (
    <div style={{ height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
        )
}


export default ChatsPage;