
export function AuthTemplate(props){
    return (
        <div className="auth-content"> 
            <div className="auth-header">
                <div className="auth-header-item"><span>Login</span></div>
                <div className="auth-header-item"><span>Join</span></div>
            </div>
            <div className="auth-body">
                { props.authBody }
            </div>
        </div>
    );
}