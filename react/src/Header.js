/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useEffect, useState} from 'react';
import { NavbarProvider } from './NavbarContext';
import Navbar from './Navbar';

//Navbar
const navlink = {
    Target1: {
        link: "/Login",
        item: "登入"
    },
    Target2: {  
        link: "/Register",
        item: "註冊"
    }
};

//Navbar
const navlink2 = {
    Target1: {
        link: "/",
        item: "系級課程"
    },
    Target2: {
        link: "/Activity",
        item: "通識課程"
    },
    Target3: {
        link: "/Product",
        item: "體育/全校"
    },
    Target4: {
        link: "/Teach",
        item: "教育學程"
    },
};

const navlink3 = {
    Target1: {
        link: "/",
        item: ""
    },
};

const Header = (props) => {
    //localStorage.clear();
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
          else if (ret.code === 0)
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

    }, [ret.code,props.first]);
    
    let ob = (
        <>
            <div id="header">
                <NavbarProvider value={navlink}>
                    <Navbar first={props.first}></Navbar>
                </NavbarProvider>
            </div>
        </>
    );
    let ob2 = (
        <>
            <div id="header">
                <NavbarProvider value={navlink2}>
                    <Navbar first={props.first}></Navbar>
                </NavbarProvider>
            </div>
        </>
    );
    let ob3 = (
        <>
            <div id="header">
                <NavbarProvider value={navlink3}>
                    <Navbar first={props.first}></Navbar>
                </NavbarProvider>
            </div>
        </>
    );
    if(ret.code === 0)
        return ob;
    else if(ret.code === 1)
        return ob2;
    else 
        return ob3;

}

export default Header;