/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect,useState} from "react";

const Login = (props) => {
    const [Data, setData] = useState({
        email: "",
        password: ""
    });
    const handleChange1 = (event) => {
        // 👇 Get input value from "event"
        setData({
            email: event.target.value,
            password: Data.password
        });
      };
      const handleChange2 = (event) => {
        // 👇 Get input value from "event"
        setData({
            email: Data.email,
            password: event.target.value
        });
      };
      let token = localStorage.getItem("token");
      token = JSON.parse(token);
      var url = 'https://nchuclass.axisflow.biz/php_server/auto_login.php';
      let obj
      if(token !== null)
      {
          obj = {
              key: token.data.JWT,
          }
      }
      else
      {
          obj = {
              key: "",
          }
      }
      
      const [ret, setRet] = useState({
          code: 2,
          message: ""
      });
      useEffect(() => {
          if(ret.code === 2)
          {
              async function get(){
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
          else
          {
            props.handlefirst();
          }
      }, [ret.code]);
    if(ret.code === 0)
    {
            return (
            <>
                <div id="login-form">
                    信箱 : <input type="text" name="email" id="email" onChange={handleChange1}/>
                    密碼 : <input type="password" name="password" id="password" onChange={handleChange2}/>   
                    <button onClick={() => {
                            var url = 'https://nchuclass.axisflow.biz/php_server/login.php';
                            let obj = {
                                email:  Data.email,
                                password: Data.password
                            }
                            fetch(url,{
                                method: 'POST',
                                body: JSON.stringify(obj)
                            }
                            )
                            .then(function (response) {
                                if(response.status === 200)
                                {
                                    return response.json();
                                }
                                else
                                {
                                    alert("密碼或email錯誤，登入失敗");
                                    return null;
                                }
                            })
                            .then(function (body) {
                                if(body !== null)
                                {
                                    localStorage.setItem("token",JSON.stringify(body));
                                    setRet(body);
                                }
                                
                            })
                        
                    }}>登入</button>
                </div>
            </>
        );
    }
    else
    {
        return (<></>);
    }
    
}

export default Login;