import { useState } from "react";
import * as axios from "axios";

export function AuthLogin(){
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmitClick(e){
        e.preventDefault();
        axios({
            method: "post",
            url: "http://localhost:4000/users/login",
            data: {
                id: id,
                password: password
            }
        })
        .then((res) => console.log(res)).catch(err => console.log(err));
        // fetch("http://localhost:4000/users/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         "id": "abc",
        //         "password": "abc"
        //     }),
        //     abc: "abc"
        // }).then(res => console.log(res)).catch(err => console.error(err));
    }

    function handleIDChange(e){
        setId(e.target.value);
    }

    function handlePWDChange(e){
        setPassword(e.target.value);
    }

    return (
        <form>
            <label htmlFor="authLoginId">ID</label>
            <input type="text" className="auth-input" name="id" id="authLoginId"  onChange={handleIDChange}/>
            <label htmlFor="authLoginPwd">Password</label>
            <input type="password" className="auth-input" name="password" id="authLoginPwd" onChange={handlePWDChange}/>
            <input type="submit" className="auth-submit" value="submit" onClick={handleSubmitClick}/>
        </form>
    );
}
