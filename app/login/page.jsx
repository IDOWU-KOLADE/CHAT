import { LoginFooter } from "../COMPONENTS/LOGIN-COMPONENTS/Loginfooter"
import { LoginForm } from "../COMPONENTS/LOGIN-COMPONENTS/LoginForm"
import { LoginHeader } from "../COMPONENTS/LOGIN-COMPONENTS/Loginheader"
import { LoginWelcome } from "../COMPONENTS/LOGIN-COMPONENTS/LoginWelcome"


export default function LoginPage() {
    return (
        <div className="px-6">
            <LoginHeader/>
            <LoginWelcome/>
            <LoginForm/>
            <LoginFooter/>
        </div>
    )
}