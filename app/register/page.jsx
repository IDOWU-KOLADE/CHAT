import { LoginHeader } from "../COMPONENTS/LOGIN-COMPONENTS/Loginheader"
import { RegisterFooter } from "../COMPONENTS/REGISTER-COMPONENTS/RegisterFooter"
import { RegisterForm } from "../COMPONENTS/REGISTER-COMPONENTS/RegisterForm"
import { RegisterWelcome } from "../COMPONENTS/REGISTER-COMPONENTS/RegisterWelcome"
export default function LoginPage() {
    return (
        <div className="px-6">
            <LoginHeader/>
            <RegisterWelcome/>
            <RegisterForm/>
            <RegisterFooter/>
        </div>
    )
}