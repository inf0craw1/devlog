import { useState } from "react";
import { AuthTemplate } from "../containers/auth/AuthTemplate";
import { AuthLogin } from "../components/auth/AuthLogin";
import "../styles/auth.scss";
export function Auth() {
    const [isLoginAuth, setLoginAuth] = useState(true);

    return (
        <div className="page page-auth">
            <div className="r-container">
                <AuthTemplate authBody={isLoginAuth ? <AuthLogin/> : <AuthLogin/>}>
                </AuthTemplate>
            </div>

        </div>
    );
}