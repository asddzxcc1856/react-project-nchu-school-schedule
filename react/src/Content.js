/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect,useState} from "react";
import Progress from "./Progress";

const Content = (props) => {
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
    const handle_remove = (numberofclass, number) => {
        let number2 = "";
        let numberofclass2 = "";
        for (let i = 0; i < number.length; i++) {
            if(number[i] === ',')
            {
                i++;
                numberofclass2 = number.substring(i,i+1);
                
                number2 = number.substring((i + 1));
                break;
            }
            if (i === 0)
                document.getElementById("thead-td-" + (8 * (parseInt(number[i],16)-1) + parseInt(numberofclass[0]) + 1)).innerHTML = "";
            else
                document.getElementById("thead-td-" + (8 * (parseInt(number[i],16)-1) + parseInt(numberofclass[0]) + 1)).innerHTML = "";
        }
        for (let i = 0; i < number2.length; i++) {
            if (i === 0)
                document.getElementById("thead-td-" + (8 * (parseInt(number2[i] ,16)-1) + parseInt(numberofclass2[0]) + 1)).innerHTML = "";
            else
                document.getElementById("thead-td-" + (8 * (parseInt(number2[i] ,16)-1) + parseInt(numberofclass2[0]) + 1)).innerHTML = "";
        }
        //console.log("remove-" + text);
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
                    if(body.message !== "")
                    {
                        document.getElementById("curriculum").innerHTML = body.message;
                        for(let i = 1 ; i <= 104 ; i++)
                        {
                            if (document.getElementById("thead-td-" + i).childNodes.length === 11 || document.getElementById("thead-td-" + i).childNodes.length === 10)
                            {
                                document.getElementById("thead-td-" + i).children[0].addEventListener("click", function () { handle_remove(document.getElementById("thead-td-" + i).children[0].id.substring(0,1), document.getElementById("thead-td-" + i).children[0].id.substring(1)); }, false);
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
                            <select name="v_year" id="sel-year">
                                <option value="11121008752333">1112</option>
                                <option value="11113023467651">1111</option>
                                <option value="11023538180981">1102</option>
                                <option value="1101514208576">1101</option>
                                <option value="10921104467734">1092</option>
                                <option value="10912531301425">1091</option>
                                <option value="10821184300331">1082</option>
                                <option value="10812313695667">1081</option>
                                <option value="1072784752350">1072</option>
                                <option value="1071927896078">1071</option>
                                <option value="10624226886550">1062</option>
                                <option value="1061961326668">1061</option>
                                <option value="10521112026779">1052</option>
                                <option value="10513525370479">1051</option>
                                <option value="1042783858657">1042</option>
                                <option value="10412874040036">1041</option>
                                <option value="1032451137169">1032</option>
                                <option value="10311004030579">1031</option>
                                <option value="10223055927528">1022</option>
                                <option value="10213084569949">1021</option>
                                <option value="10123079432558">1012</option>
                                <option value="10113608604903">1011</option>
                                <option value="10023120126082">1002</option>
                                <option value="1001292893181">1001</option>
                                <option value="09921385914702">0992</option>
                                <option value="09913989836479">0991</option>
                                <option value="09822654818489">0982</option>
                                <option value="09813148860817">0981</option>
                                <option value="0972355623715">0972</option>
                                <option value="09713685801176">0971</option>
                                <option value="0962652863480">0962</option>
                                <option value="09611673676407">0961</option>
                                <option value="09522301722882">0952</option>
                                <option value="0951430125575">0951</option>
                                <option value="09423689125758">0942</option>
                                <option value="0941734006992">0941</option>
                            </select>
                        </td>
                        <td>
                            <span >學制：</span><select name="v_career" id="sel-career">
                                <option value="U">學士班</option>
                            </select>
                        </td>
                        <td>
                            <span>系所：
                                <select name="v_dept" id="sel-dept">
                                    <option value="C10">C10 文學院</option>
                                    <option value="C20">C20 管理學院</option>
                                    <option value="C30">C30 農業暨自然資源學院</option>
                                    <option value="C60">C60 工學院</option>
                                    <option value="U10F">U10F 台灣人文創新學士學位學程</option>
                                    <option value="U11">U11 中國文學系學士班</option>
                                    <option value="U12">U12 外國語文學系學士班</option>
                                    <option value="U13">U13 歷史學系學士班</option>
                                    <option value="U21">U21 財務金融學系學士班</option>
                                    <option value="U23">U23 企業管理學系學士班</option>
                                    <option value="U24">U24 法律學系學士班</option>
                                    <option value="U28">U28 會計學系學士班</option>
                                    <option value="U29">U29 資訊管理學系學士班</option>
                                    <option value="U30F">U30F 景觀與遊憩學士學位學程</option>
                                    <option value="U30G">U30G 生物科技學士學位學程</option>
                                    <option value="U30H">U30H 國際農企業學士學位學程</option>
                                    <option value="U31">U31 農藝學系學士班</option>
                                    <option value="U32">U32 園藝學系學士班</option>
                                    <option value="U33A">U33A 森林學系林學組學士班</option>
                                    <option value="U33B">U33B 森林學系木材科學組學士班</option>
                                    <option value="U34">U34 應用經濟學系學士班</option>
                                    <option value="U35">U35 植物病理學系學士班</option>
                                    <option value="U36">U36 昆蟲學系學士班</option>
                                    <option value="U37">U37 動物科學系學士班</option>
                                    <option value="U38B">U38B 獸醫學系學士班</option>
                                    <option value="U38A">U38A 獸醫學系學士班</option>
                                    <option value="U39">U39 土壤環境科學系學士班</option>
                                    <option value="U40">U40 生物產業機電工程學系學士班</option>
                                    <option value="U42">U42 水土保持學系學士班</option>
                                    <option value="U43">U43 食品暨應用生物科技學系學士班</option>
                                    <option value="U44">U44 行銷學系學士班</option>
                                    <option value="U51">U51 化學系學士班</option>
                                    <option value="U52">U52 生命科學系學士班</option>
                                    <option value="U53F">U53F 應用數學系應用數學組學士班</option>
                                    <option value="U53G">U53G 應用數學系數據科學與計算組學士班</option>
                                    <option value="U54A">U54A 物理學系一般物理組學士班</option>
                                    <option value="U54B">U54B 物理學系光電物理組學士班</option>
                                    <option value="U56">U56 資訊工程學系學士班</option>
                                    <option value="U60G">U60G 智慧創意工程學士學位學程</option>
                                    <option value="U61B">U61B 機械工程學系學士班</option>
                                    <option value="U61A">U61A 機械工程學系學士班</option>
                                    <option value="U62A">U62A 土木工程學系學士班</option>
                                    <option value="U62B">U62B 土木工程學系學士班</option>
                                    <option value="U63">U63 環境工程學系學士班</option>
                                    <option value="U64A">U64A 電機工程學系學士班</option>
                                    <option value="U64B">U64B 電機工程學系學士班</option>
                                    <option value="U64F">U64F 電機資訊學院學士班</option>
                                    <option value="U65">U65 化學工程學系學士班</option>
                                    <option value="U66">U66 材料科學與工程學系學士班</option>
                                    <option value="U86">U86 學士後醫學系學士班</option>
                                </select>
                            </span>
                        </td>
                            <td>
                                <span className="word_13">年級：</span>
                                <select name="v_level" id="sel-level">
                                    <option value=""></option>
                                    <option value="1">一年級</option>
                                    <option value="2">二年級</option>
                                    <option value="3">三年級</option>
                                    <option value="4">四年級</option>
                                    <option value="5">五年級</option>
                                </select>
                            </td>
                            <td><span className="word_13">授課語言：
                                <select name="v_lang" id="sel-lang">
                                    <option value=""></option>
                                    <option value="中">中文</option>
                                    <option value="英">英文</option>
                                    <option value="中/英文">中/英文</option>
                                    <option value="日文">日文</option>
                                </select>
                            </span></td>
                        </tr>
                    </tbody>
                </table>
                <table id="sel">
                    <tbody>
                        <tr>
                            <td>
                                <strong>進 階 查 詢</strong>
                            </td>
                            <td className="word_13">科目：
                                <input name="v_text" type="text" id="sel-text" size="14" />
                            </td>
                            <td><span className="word_13">教師：
                                <input name="v_teach" type="text" id="sel-teach" size="7" maxLength="5" />
                            </span>
                            </td>
                            <td><span className="word_13">星期：
                                <select name="v_week" id="sel-week">
                                    <option value=""></option>
                                    <option value="1">一</option>
                                    <option value="2">二</option>
                                    <option value="3">三</option>
                                    <option value="4">四</option>
                                    <option value="5">五</option>
                                    <option value="6">六</option>
                                    <option value="7">日</option>
                                </select>
                            </span></td>
                            <td><span className="word_13">節次：
                                <select name="v_mtg" id="sel-mtg">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                </select>
                            </span></td>
                            <td><span className="word_13">EMI：
                                <select name="v_emi" id="sel-emi">
                                    <option value=""></option>
                                    <option value="Y">Y</option>
                                    <option value="N">N</option>
                                </select>
                            </span></td>
                        </tr>
                    </tbody></table>
                <Progress />
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
                                if(body.message !== "")
                                {
                                    document.getElementById("curriculum").innerHTML = body.message;
                                }
                                alert('成功存取');
                            });
                        }
                        else
                        {
                            alert('取消存取');
                        }
                    }}>存取課表</button>
                </div>
                
            </>

        );
    }
    else {
        return (
            <>
            </>
        );
    }

}

export default Content;