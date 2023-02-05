/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const Register = (props) => {
    const [Data, setData] = useState({
        email: "",
        username: "",
        password: "",
        check_password: ""
    });
    const handleChange1 = (event) => {
        // 👇 Get input value from "event"
        setData({
            email: event.target.value,
            username: Data.username,
            password: Data.password,
            check_password: Data.check_password
        });
    };
    const handleChange2 = (event) => {
        // 👇 Get input value from "event"
        setData({
            email: Data.email,
            username: event.target.value,
            password: Data.password,
            check_password: Data.check_password
        });
    };
    const handleChange3 = (event) => {
        // 👇 Get input value from "event"
        setData({
            email: Data.email,
            username: Data.username,
            password: event.target.value,
            check_password: Data.check_password
        });
    };
    const handleChange4 = (event) => {
        // 👇 Get input value from "event"
        setData({
            email: Data.email,
            username: Data.username,
            password: Data.password,
            check_password: event.target.value
        });
    };
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    var url = 'https://nchuclass.axisflow.biz/php_server/auto_login.php';
    let obj
    if (token !== null) {
        obj = {
            key: token.data.JWT,
        }
    }
    else {
        obj = {
            key: "",
        }
    }

    const [ret, setRet] = useState({
        code: 2,
        message: ""
    });
    useEffect(() => {
        if (ret.code === 2) {
            async function get() {
                await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(obj)
                })
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (body) {
                        setRet(body);
                    });

            }
            get();
        }
    }, [ret.code]);
    if (ret.code === 0) {
        return (
            <>
                <div id="register-form">
                    信箱 : <input type="text" name="eamil" id="email" onChange={handleChange1} /><br />
                    帳號 : <input type="text" name="username" id="username" onChange={handleChange2} /><br />
                    密碼 : <input type="password" name="password" id="password" onChange={handleChange3} /><br />
                    確認密碼 : <input type="password" name="check-password" id="check-password" onChange={handleChange4} />
                    <button onClick={() => {
                        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                        if(!Data.email || regex.test(Data.email) === false){
                            alert("email錯誤");
                            return;
                        }
                        if(Data.password !== Data.check_password)
                        {
                            alert("密碼與確認密碼不相符");
                            return;
                        }
                        if(Data.password.length < 6)
                        {
                            alert("密碼長度至少需要6個字元");
                            return;
                            
                        }
                        var url = 'https://nchuclass.axisflow.biz/php_server/register.php';
                        let obj = {
                            email: Data.email,
                            username: Data.username,
                            password: Data.password,
                        }
                        fetch(url, {
                            method: 'POST',
                            body: JSON.stringify(obj)
                        }
                        )
                            .then(function (response) {
                                if(response.status === 201)
                                    window.location.href = "https://nchuclass.axisflow.biz/Login";
                                else
                                    alert("email已經註冊過，註冊失敗!!");
                            })
                    }}>註冊</button>
                </div>
            </>
        );
    }
    else {
        return (<></>);
    }
}

export default Register;