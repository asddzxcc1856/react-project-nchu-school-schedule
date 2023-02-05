/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Progress4 from "./Progress4";

const Teach = () => {
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
    const handle_remove = (numberofclass, number) => {
        let number2 = "";
        let numberofclass2 = "";
        for (let i = 0; i < number.length; i++) {
            if (number[i] === ',') {
                i++;
                numberofclass2 = number.substring(i, i + 1);

                number2 = number.substring((i + 1));
                break;
            }
            if (i === 0)
                document.getElementById("thead-td-" + (8 * (parseInt(number[i], 16) - 1) + parseInt(numberofclass[0]) + 1)).innerHTML = "";
            else
                document.getElementById("thead-td-" + (8 * (parseInt(number[i], 16) - 1) + parseInt(numberofclass[0]) + 1)).innerHTML = "";
        }
        for (let i = 0; i < number2.length; i++) {
            if (i === 0)
                document.getElementById("thead-td-" + (8 * (parseInt(number2[i], 16) - 1) + parseInt(numberofclass2[0]) + 1)).innerHTML = "";
            else
                document.getElementById("thead-td-" + (8 * (parseInt(number2[i], 16) - 1) + parseInt(numberofclass2[0]) + 1)).innerHTML = "";
        }
        //console.log("remove-" + text);
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
        else if (ret.code === 0) {
            window.location.href = "https://nchuclass.axisflow.biz/Login";
        }
        else {
            obj = {
                key: token.data.JWT
            }
            let url = 'https://nchuclass.axisflow.biz/php_server/get_table.php';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(obj)
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (body) {
                    setRet(body);
                    if (body.message !== "") {
                        document.getElementById("curriculum").innerHTML = body.message;
                        for (let i = 1; i <= 104; i++) {
                            if (document.getElementById("thead-td-" + i).childNodes.length === 11 || document.getElementById("thead-td-" + i).childNodes.length === 10) {
                                document.getElementById("thead-td-" + i).children[0].addEventListener("click", function () { handle_remove(document.getElementById("thead-td-" + i).children[0].id.substring(0, 1), document.getElementById("thead-td-" + i).children[0].id.substring(1)); }, false);
                            }
                        }
                    }
                });
        }
    }, [ret.code]);
    //useEffect 的用法有四種 
    //
    //useEffect(() => {componentDidMount + componentDidUpdate內容},[props參數])
    //useEffect(() => {componentDidMount return (ComponentWillUnmount內容);},[])
    //useEffect(() => {componentDidMount + componentDidUpdate內容 return (ComponentWillUnmount內容);},[props參數])
    //useEffect(() => {componentDidMount + componentDidUpdate內容 return (ComponentWillUnmount內容);})
    /*const mounted = useRef(false);
    useEffect(() => {
        if (mounted.current === false) {
            mounted.current = true;
            document.getElementsByClassName("submit")[0].addEventListener("mouseup", function () {
                setTimeout(() => {
                },5000);
                document.getElementsByClassName("submit")[0].setAttribute("disabled",true);
                setTimeout(() => {
                    document.getElementsByClassName("submit")[0].removeAttribute("disabled")
                },5000);
                
            },false);
        }
        else {
            document.getElementsByClassName("submit")[0].addEventListener("mouseup", function () {
                document.getElementsByClassName("submit")[0].setAttribute("disabled",true);
                setTimeout(() => {
                    document.getElementsByClassName("submit")[0].removeAttribute("disabled")
                },5000);
                
            },false);
        }

    }, [props.first]);*/
    if (ret.code === 1) {
        return (
            <>
                <table id="sel">
                    <tbody><tr>
                        <td><span>學年期：</span>
                            <select name="p_year" id="sel-year">
                                <option value="1112">1112</option>
                                <option value="1111">1111</option>
                                <option value="1102">1102</option>
                                <option value="1101">1101</option>
                                <option value="1092">1092</option>
                                <option value="1091">1091</option>
                                <option value="1082">1082</option>
                                <option value="1081">1081</option>
                                <option value="1072">1072</option>
                                <option value="1071">1071</option>
                                <option value="1062">1062</option>
                                <option value="1061">1061</option>
                                <option value="1052">1052</option>
                                <option value="1051">1051</option>
                                <option value="1042">1042</option>
                                <option value="1041">1041</option>
                                <option value="1032">1032</option>
                                <option value="1031">1031</option>
                                <option value="1022">1022</option>
                                <option value="1021">1021</option>
                                <option value="1012">1012</option>
                                <option value="1011">1011</option>
                                <option value="1002">1002</option>
                                <option value="1001">1001</option>
                                <option value="0992">0992</option>
                                <option value="0991">0991</option>
                                <option value="0982">0982</option>
                                <option value="0981">0981</option>
                                <option value="0972">0972</option>
                                <option value="0971">0971</option>
                                <option value="0962">0962</option>
                                <option value="0961">0961</option>
                                <option value="0952">0952</option>
                                <option value="0951">0951</option>
                                <option value="0942">0942</option>
                                <option value="0941">0941</option>
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <Progress4 />
                <div id="content">
                </div>
                <table id="curriculum">
                    <thead id="curriculum-thead">
                        <tr id="thead-tr">
                            <th id="thead-th-1" className="thead-th">
                                星期/節次
                            </th>
                            <th id="thead-th-2" className="thead-th">
                                星期一
                            </th>
                            <th id="thead-th-3" className="thead-th">
                                星期二
                            </th>
                            <th id="thead-th-4" className="thead-th">
                                星期三
                            </th>
                            <th id="thead-th-5" className="thead-th">
                                星期四
                            </th>
                            <th id="thead-th-6" className="thead-th">
                                星期五
                            </th>
                            <th id="thead-th-7" className="thead-th">
                                星期六
                            </th>
                            <th id="thead-th-8" className="thead-th">
                                星期日
                            </th>
                        </tr>
                    </thead>
                    <tbody id="curriculum-tbody">
                        <tr id="tbody-tr">
                            <td id="thead-td-1" className="thead-td">
                                08:10-09:00
                            </td>
                            <td id="thead-td-2" className="thead-td">
                            </td>
                            <td id="thead-td-3" className="thead-td">
                            </td>
                            <td id="thead-td-4" className="thead-td">
                            </td>
                            <td id="thead-td-5" className="thead-td">
                            </td>
                            <td id="thead-td-6" className="thead-td">
                            </td>
                            <td id="thead-td-7" className="thead-td">
                            </td>
                            <td id="thead-td-8" className="thead-td">
                            </td>
                        </tr>
                        <tr id="tbody-tr">
                            <td id="thead-td-9" className="thead-td">
                                09:10-10:00
                            </td>
                            <td id="thead-td-10" className="thead-td">
                            </td>
                            <td id="thead-td-11" className="thead-td">
                            </td>
                            <td id="thead-td-12" className="thead-td">
                            </td>
                            <td id="thead-td-13" className="thead-td">
                            </td>
                            <td id="thead-td-14" className="thead-td">
                            </td>
                            <td id="thead-td-15" className="thead-td">
                            </td>
                            <td id="thead-td-16" className="thead-td">
                            </td>
                        </tr>
                        <tr id="tbody-tr">
                            <td id="thead-td-17" className="thead-td">
                                10:10-11:00
                            </td>
                            <td id="thead-td-18" className="thead-td">
                            </td>
                            <td id="thead-td-19" className="thead-td">
                            </td>
                            <td id="thead-td-20" className="thead-td">
                            </td>
                            <td id="thead-td-21" className="thead-td">
                            </td>
                            <td id="thead-td-22" className="thead-td">
                            </td>
                            <td id="thead-td-23" className="thead-td">
                            </td>
                            <td id="thead-td-24" className="thead-td">
                            </td>
                        </tr>
                        <tr id="tbody-tr">
                            <td id="thead-td-25" className="thead-td">
                                11:10-12:00
                            </td>
                            <td id="thead-td-26" className="thead-td">
                            </td>
                            <td id="thead-td-27" className="thead-td">
                            </td>
                            <td id="thead-td-28" className="thead-td">
                            </td>
                            <td id="thead-td-29" className="thead-td">
                            </td>
                            <td id="thead-td-30" className="thead-td">
                            </td>
                            <td id="thead-td-31" className="thead-td">
                            </td>
                            <td id="thead-td-32" className="thead-td">
                            </td>
                        </tr>
                        <tr id="tbody-tr">
                            <td id="thead-td-33" className="thead-td">
                                13:10-14:00
                            </td>
                            <td id="thead-td-34" className="thead-td">
                            </td>
                            <td id="thead-td-35" className="thead-td">
                            </td>
                            <td id="thead-td-36" className="thead-td">
                            </td>
                            <td id="thead-td-37" className="thead-td">
                            </td>
                            <td id="thead-td-38" className="thead-td">
                            </td>
                            <td id="thead-td-39" className="thead-td">
                            </td>
                            <td id="thead-td-40" className="thead-td">
                            </td>
                        </tr>
                        <tr id="tbody-tr">
                            <td id="thead-td-41" className="thead-td">
                                14:10-15:00
                            </td>
                            <td id="thead-td-42" className="thead-td">
                            </td>
                            <td id="thead-td-43" className="thead-td">
                            </td>
                            <td id="thead-td-44" className="thead-td">
                            </td>
                            <td id="thead-td-45" className="thead-td">
                            </td>
                            <td id="thead-td-46" className="thead-td">
                            </td>
                            <td id="thead-td-47" className="thead-td">
                            </td>
                            <td id="thead-td-48" className="thead-td">
                            </td>
                        </tr>
                        <tr id="tbody-tr">
                            <td id="thead-td-49" className="thead-td">
                                15:10-16:00
                            </td>
                            <td id="thead-td-50" className="thead-td">
                            </td>
                            <td id="thead-td-51" className="thead-td">
                            </td>
                            <td id="thead-td-52" className="thead-td">
                            </td>
                            <td id="thead-td-53" className="thead-td">
                            </td>
                            <td id="thead-td-54" className="thead-td">
                            </td>
                            <td id="thead-td-55" className="thead-td">
                            </td>
                            <td id="thead-td-56" className="thead-td">
                            </td>
                        </tr>
                        <tr id="tbody-tr">
                            <td id="thead-td-57" className="thead-td">
                                16:10-17:00
                            </td>
                            <td id="thead-td-58" className="thead-td">
                            </td>
                            <td id="thead-td-59" className="thead-td">
                            </td>
                            <td id="thead-td-60" className="thead-td">
                            </td>
                            <td id="thead-td-61" className="thead-td">
                            </td>
                            <td id="thead-td-62" className="thead-td">
                            </td>
                            <td id="thead-td-63" className="thead-td">
                            </td>
                            <td id="thead-td-64" className="thead-td">
                            </td>
                        </tr>
                        <tr id="tbody-tr">
                            <td id="thead-td-65" className="thead-td">
                                17:10-18:00
                            </td>
                            <td id="thead-td-66" className="thead-td">
                            </td>
                            <td id="thead-td-67" className="thead-td">
                            </td>
                            <td id="thead-td-68" className="thead-td">
                            </td>
                            <td id="thead-td-69" className="thead-td">
                            </td>
                            <td id="thead-td-70" className="thead-td">
                            </td>
                            <td id="thead-td-71" className="thead-td">
                            </td>
                            <td id="thead-td-72" className="thead-td">
                            </td>
                        </tr>
                        <tr id="tbody-tr">
                            <td id="thead-td-73" className="thead-td">
                                18:20-19:10
                            </td>
                            <td id="thead-td-74" className="thead-td">
                            </td>
                            <td id="thead-td-75" className="thead-td">
                            </td>
                            <td id="thead-td-76" className="thead-td">
                            </td>
                            <td id="thead-td-77" className="thead-td">
                            </td>
                            <td id="thead-td-78" className="thead-td">
                            </td>
                            <td id="thead-td-79" className="thead-td">
                            </td>
                            <td id="thead-td-80" className="thead-td">
                            </td>
                        </tr>
                        <tr id="tbody-tr">
                            <td id="thead-td-81" className="thead-td">
                                19:15-20:05
                            </td>
                            <td id="thead-td-82" className="thead-td">
                            </td>
                            <td id="thead-td-83" className="thead-td">
                            </td>
                            <td id="thead-td-84" className="thead-td">
                            </td>
                            <td id="thead-td-85" className="thead-td">
                            </td>
                            <td id="thead-td-86" className="thead-td">
                            </td>
                            <td id="thead-td-87" className="thead-td">
                            </td>
                            <td id="thead-td-88" className="thead-td">
                            </td>
                        </tr>
                        <tr id="tbody-tr">
                            <td id="thead-td-89" className="thead-td">
                                20:10-21:00
                            </td>
                            <td id="thead-td-90" className="thead-td">
                            </td>
                            <td id="thead-td-91" className="thead-td">
                            </td>
                            <td id="thead-td-92" className="thead-td">
                            </td>
                            <td id="thead-td-93" className="thead-td">
                            </td>
                            <td id="thead-td-94" className="thead-td">
                            </td>
                            <td id="thead-td-95" className="thead-td">
                            </td>
                            <td id="thead-td-96" className="thead-td">
                            </td>
                        </tr>
                        <tr id="tbody-tr">
                            <td id="thead-td-97" className="thead-td">
                                21:05-21:55
                            </td>
                            <td id="thead-td-98" className="thead-td">
                            </td>
                            <td id="thead-td-99" className="thead-td">
                            </td>
                            <td id="thead-td-100" className="thead-td">
                            </td>
                            <td id="thead-td-101" className="thead-td">
                            </td>
                            <td id="thead-td-102" className="thead-td">
                            </td>
                            <td id="thead-td-103" className="thead-td">
                            </td>
                            <td id="thead-td-104" className="thead-td">
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="savebutton">
                    <button className="save_table" onClick={() => {
                        var yes = window.confirm("你確定要重新儲存嗎，會覆蓋上次內容");

                        if (yes) {

                            obj = {
                                key: token.data.JWT,
                                body: document.getElementById("curriculum").innerHTML
                            }
                            var url = 'https://nchuclass.axisflow.biz/php_server/save_table.php';
                            fetch(url, {
                                method: 'POST',
                                body: JSON.stringify(obj)
                            })
                                .then(function (response) {
                                    return response.json();
                                })
                                .then(function (body) {
                                    setRet(body);
                                    alert('成功儲存');
                                });
                        }
                        else {
                            alert('取消儲存');
                        }

                    }}>儲存課表</button>
                    <button className="get_table" onClick={() => {
                        var yes = window.confirm("你確定要重新存取嗎，會覆蓋目前內容");
                        if (yes) {
                            obj = {
                                key: token.data.JWT
                            }
                            var url = 'https://nchuclass.axisflow.biz/php_server/get_table.php';
                            fetch(url, {
                                method: 'POST',
                                body: JSON.stringify(obj)
                            })
                                .then(function (response) {
                                    return response.json();
                                })
                                .then(function (body) {
                                    setRet(body);
                                    if (body.message !== "") {
                                        document.getElementById("curriculum").innerHTML = body.message;
                                    }
                                    alert('成功存取');
                                });
                        }
                        else {
                            alert('取消存取');
                        }
                    }}>存取課表</button>
                </div>
            </>

        );
    }
    else {
        return (
            <></>
        );
    }
}

export default Teach;