import { ChatScreen } from "@/app/COMPONENTS/CHATSCREEN-COMP/Chatscreen";

export default function ChatPage ({params}) {
    return <ChatScreen conversationId = {params.id}/>
}