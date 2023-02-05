import React from "react";
import fetch from 'node-fetch';



//function component
const Progress3 = () => {
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
    const handle_add = (idx) => {
        var tr_child = document.getElementById("trall-" + idx).children;

        /*         
                for(let i = 0 ; i < tr_child.length ; i++)
                {
                    console.log(i + " " + tr_child[i].innerText);
                } 
                */
        /*        
         0 選修
         1 1907
         2 資訊視覺設計
           Information Visualization Design
         3 　
         4 半
         5 2
         6 2
         7 　
         8 278
         9 　
         10 A205
         11 
         12 鄭怡玲
         13 　
         14 文學院
         15 31
         16 　
         17 31
         18 中文
         19 文學院學生優先
         20 新增課程 
         */
        //1 2 8 10 12
        let numberofclass = tr_child[7].innerText;
        let number = numberofclass.substring(1, numberofclass.length);
        //console.log(number);
        for (let i = 0; i < number.length; i++) {
            //console.log(parseInt(number[i],16));
            if (document.getElementById("thead-td-" + (8 * (parseInt(number[i], 16) - 1) + parseInt(numberofclass[0]) + 1)).innerHTML !== "") {
                alert("不能有衝堂的課!");
                return;
            }
        }
        for (let i = 0; i < number.length; i++) {
            if (i === 0)
                document.getElementById("thead-td-" + (8 * (parseInt(number[i], 16) - 1) + parseInt(numberofclass[0]) + 1)).innerHTML = "<button className='remove' id='" + numberofclass + "'>X</button><br/>" + tr_child[5].innerText + "<br/>(<a href='" + tr_child[4].children[0].href + "'>" + tr_child[4].innerText + "</a>)<br/>" + tr_child[10].innerText + "<br/>" + tr_child[9].innerText;
            else
                document.getElementById("thead-td-" + (8 * (parseInt(number[i], 16) - 1) + parseInt(numberofclass[0]) + 1)).innerHTML = tr_child[5].innerText + "<br/>(<a href='" + tr_child[4].children[0].href + "'>" + tr_child[4].innerText + "</a>)<br/>" + tr_child[10].innerText + "<br/>" + tr_child[9].innerText;
        }
        document.getElementById(numberofclass).addEventListener("click", function () { handle_remove(numberofclass, number); }, false);

        //2  3  4  5  6  7  8
        //10 11 12 13 14 15 16
        //                 104
    }
    const handle_add2 = (idx) => {
        var tr_child = document.getElementById("trall-" + idx).children;

        /*         
                for(let i = 0 ; i < tr_child.length ; i++)
                {
                    console.log(i + " " + tr_child[i].innerText);
                } 
                */
        /*        
         0 選修
         1 1907
         2 資訊視覺設計
           Information Visualization Design
         3 　
         4 半
         5 2
         6 2
         7 　
         8 278
         9 　
         10 A205
         11 
         12 鄭怡玲
         13 　
         14 文學院
         15 31
         16 　
         17 31
         18 中文
         19 文學院學生優先
         20 新增課程 
         */
        //1 2 8 10 12
        let numberofclass = tr_child[4].innerText;
        let number = numberofclass.substring(1, numberofclass.length);
        //console.log(number);
        for (let i = 0; i < number.length; i++) {
            //console.log(parseInt(number[i],16));
            if (document.getElementById("thead-td-" + (8 * (parseInt(number[i], 16) - 1) + parseInt(numberofclass[0]) + 1)).innerHTML !== "") {
                alert("不能有衝堂的課!");
                return;
            }
        }
        for (let i = 0; i < number.length; i++) {
            if (i === 0)
                document.getElementById("thead-td-" + (8 * (parseInt(number[i], 16) - 1) + parseInt(numberofclass[0]) + 1)).innerHTML = "<button className='remove' id='" + numberofclass + "'>X</button><br/>" + tr_child[1].innerText + "<br/>(<a href='" + tr_child[0].children[0].href + "'>" + tr_child[0].innerText + "</a>)<br/>" + tr_child[6].innerText + "<br/>" + tr_child[5].innerText;
            else
                document.getElementById("thead-td-" + (8 * (parseInt(number[i], 16) - 1) + parseInt(numberofclass[0]) + 1)).innerHTML = tr_child[1].innerText + "<br/>(<a href='" + tr_child[0].children[0].href + "'>" + tr_child[0].innerText + "</a>)<br/>" + tr_child[6].innerText + "<br/>" + tr_child[5].innerText;
        }
        document.getElementById(numberofclass).addEventListener("click", function () { handle_remove(numberofclass, number); }, false);

        //2  3  4  5  6  7  8
        //10 11 12 13 14 15 16
        //                 104
    }
    //useState(傳入參數) 解構給 name 變數 和 changeName 函式 
    return (
        <React.StrictMode>
            <div>
                <button className="submit" onClick={() => {
                    if (document.getElementById("sel-year").value === "1112") {
                        let text;
                        text = "p_check=1&p_subject=" +
                            document.getElementById("sel-subject").value + "&p_year=" +
                            document.getElementById("sel-year").value + "&p_group=" +
                            document.getElementById("sel-group").value + "&p_lang=" +
                            document.getElementById("sel-lang").value + "&p_crsName=" +
                            document.getElementById("sel-crsName").value + "&p_teacher=" +
                            document.getElementById("sel-teacher").value + "&p_week=" +
                            document.getElementById("sel-week").value + "&p_mtg=" +
                            document.getElementById("sel-mtg").value + "&p_emi=" +
                            document.getElementById("sel-emi").value;
                        //console.log(text);
                        //console.log("v_year=&v_career=U&v_excel=0&v_dept=U64F&v_level=&v_lang=&v_text=&v_teach=&v_week=&v_mtg=&v_emi=");
                        fetch('https://nchuclass.axisflow.biz:8080/post4', {
                            method: 'POST',
                            body: text,
                            headers: {
                                'Accept': 'text/document',
                                'Content-Type': 'text/plain'
                            }
                        }).then(res => res.text())
                            .then(ress => {
                                var parser = new DOMParser();
                                var doc = parser.parseFromString(ress, 'text/html');
                                //console.log(doc);
                                let myNodeList = doc.getElementsByClassName("word_13");
                                document.getElementById("content").innerHTML = "";
                                for (let i = 0; i < myNodeList.length; i++) {
                                    if (myNodeList[i].className === "word_13" && myNodeList[i].tagName === "TABLE") {

                                        document.getElementById("content").innerHTML += "<table class='word_13'  cellspacing='0' cellpadding='0' name='mytable'>" + myNodeList[i].innerHTML + "</table>";
                                    }
                                }
                                let line = document.getElementsByTagName("tr");
                                console.log(line);
                                if (document.getElementById("sel-subject").value === "3") {
                                    for (let i = 4; i < 5; i++) {
                                        for (let j = 0; j <= 15; j++) {
                                            if (line[i].children[j].style.minWidth)
                                                line[i].children[j].style.minWidth = 0;
                                            if (line[i].children[j].style.maxWidth)
                                                line[i].children[j].style.minWidth = 0;
                                        }
                                    }

                                    for (let i = 5; i < line.length; i++) {
                                        if (line[i].id !== "")
                                            break;

                                        line[i].children[0].children[0].href = (line[i].children[0].children[0].href).replace("https://nchuclass.axisflow.biz/", "https://onepiece.nchu.edu.tw/cofsys/plsql/");
                                        line[i].setAttribute("id", "trall-" + i);
                                        line[i].children[12].removeAttribute('colspan');
                                        line[i].innerHTML += "<td><button class='new-add' id='button-" + i + "'>新增課程</button></td>";
                                        line[i].children[1].innerText = line[i].children[1].innerText.replace(/[^\u4E00-\u9FA5]/g, '');
                                        line[i].children[12].innerHTML = line[i].children[12].innerText ? "<details><summary></summary>" + line[i].children[12].innerText + "</details>" : "";
                                        document.getElementById("button-" + i).addEventListener("click", function () { handle_add2(i); }, false)
                                    }
                                }
                                else if (document.getElementById("sel-subject").value === "L") {
                                    for (let i = 4; i < 5; i++) {
                                        for (let j = 0; j <= 11; j++) {
                                            if (line[i].children[j].style.minWidth)
                                                line[i].children[j].style.minWidth = 0;
                                            if (line[i].children[j].style.maxWidth)
                                                line[i].children[j].style.minWidth = 0;
                                        }
                                    }

                                    for (let i = 5; i < line.length; i++) {
                                        if (line[i].id !== "")
                                            break;

                                        line[i].children[0].children[0].href = (line[i].children[0].children[0].href).replace("https://nchuclass.axisflow.biz/", "https://onepiece.nchu.edu.tw/cofsys/plsql/");
                                        line[i].setAttribute("id", "trall-" + i);
                                        line[i].children[11].removeAttribute('colspan');
                                        line[i].innerHTML += "<td><button class='new-add' id='button-" + i + "'>新增課程</button></td>";
                                        line[i].children[1].innerText = line[i].children[1].innerText.replace(/[^\u4E00-\u9FA5]/g, '');
                                        line[i].children[11].innerHTML = line[i].children[11].innerText ? "<details><summary></summary>" + line[i].children[11].innerText + "</details>" : "";
                                        document.getElementById("button-" + i).addEventListener("click", function () { handle_add2(i); }, false)
                                    }
                                }
                                else if (document.getElementById("sel-subject").value === "N") {
                                    for (let i = 4; i < 5; i++) {
                                        for (let j = 0; j <= 11; j++) {
                                            if (line[i].children[j].style.minWidth)
                                                line[i].children[j].style.minWidth = 0;
                                            if (line[i].children[j].style.maxWidth)
                                                line[i].children[j].style.minWidth = 0;
                                        }
                                    }

                                    for (let i = 5; i < line.length; i++) {
                                        if (line[i].id !== "")
                                            break;

                                        line[i].children[0].children[0].href = (line[i].children[0].children[0].href).replace("https://nchuclass.axisflow.biz/", "https://onepiece.nchu.edu.tw/cofsys/plsql/");
                                        line[i].setAttribute("id", "trall-" + i);
                                        line[i].children[11].removeAttribute('colspan');
                                        line[i].innerHTML += "<td><button class='new-add' id='button-" + i + "'>新增課程</button></td>";
                                        line[i].children[1].innerText = line[i].children[1].innerText.replace(/[^\u4E00-\u9FA5]/g, '');
                                        line[i].children[11].innerHTML = line[i].children[11].innerText ? "<details><summary></summary>" + line[i].children[11].innerText + "</details>" : "";
                                        document.getElementById("button-" + i).addEventListener("click", function () { handle_add2(i); }, false)
                                    }
                                }
                                else {
                                    for (let i = 4; i < 5; i++) {
                                        for (let j = 0; j <= 17; j++) {
                                            if (line[i].children[j].style.minWidth)
                                                line[i].children[j].style.minWidth = 0;
                                            if (line[i].children[j].style.maxWidth)
                                                line[i].children[j].style.minWidth = 0;
                                        }
                                    }
                                    for (let i = 5; i < 6; i++) {
                                        for (let j = 0; j <= 3; j++) {
                                            if (line[i].children[j].style.minWidth)
                                                line[i].children[j].style.minWidth = 0;
                                            if (line[i].children[j].style.maxWidth)
                                                line[i].children[j].style.minWidth = 0;
                                        }
                                    }

                                    for (let i = 6; i < line.length; i++) {
                                        if (line[i].id !== "")
                                            break;

                                        line[i].children[4].children[0].href = (line[i].children[4].children[0].href).replace("https://nchuclass.axisflow.biz/", "https://onepiece.nchu.edu.tw/cofsys/plsql/");
                                        line[i].children[16].removeAttribute('colspan');
                                        line[i].setAttribute("id", "trall-" + i);
                                        line[i].innerHTML += "<td><button class='new-add' id='button-" + i + "'>新增課程</button></td>";
                                        line[i].children[5].innerText = line[i].children[5].innerText.replace(/[^\u4E00-\u9FA5]/g, '');
                                        line[i].children[16].innerHTML = line[i].children[16].innerText ? "<details><summary></summary>" + line[i].children[16].innerText + "</details>" : "";
                                        document.getElementById("button-" + i).addEventListener("click", function () { handle_add(i); }, false)
                                    }
                                }

                            })
                    }
                    else {
                        let text;
                        text = "p_check=1&p_subject=" +
                            document.getElementById("sel-subject").value + "&p_year=" +
                            document.getElementById("sel-year").value + "&p_group=" +
                            document.getElementById("sel-group").value + "&p_lang=" +
                            document.getElementById("sel-lang").value + "&p_crsName=" +
                            document.getElementById("sel-crsName").value + "&p_teacher=" +
                            document.getElementById("sel-teacher").value + "&p_week=" +
                            document.getElementById("sel-week").value + "&p_mtg=" +
                            document.getElementById("sel-mtg").value + "&p_emi=" +
                            document.getElementById("sel-emi").value;
                        //console.log(text);
                        //console.log("v_year=&v_career=U&v_excel=0&v_dept=U64F&v_level=&v_lang=&v_text=&v_teach=&v_week=&v_mtg=&v_emi=");
                        fetch('https://nchuclass.axisflow.biz:8080/post5', {
                            method: 'POST',
                            body: text,
                            headers: {
                                'Accept': 'text/document',
                                'Content-Type': 'text/plain'
                            }
                        }).then(res => res.text())
                            .then(ress => {
                                var parser = new DOMParser();
                                var doc = parser.parseFromString(ress, 'text/html');
                                //console.log(doc);
                                let myNodeList = doc.getElementsByClassName("word_13");
                                document.getElementById("content").innerHTML = "";
                                for (let i = 0; i < myNodeList.length; i++) {
                                    if (myNodeList[i].className === "word_13" && myNodeList[i].tagName === "TABLE") {

                                        document.getElementById("content").innerHTML += "<table class='word_13'  cellspacing='0' cellpadding='0' name='mytable'>" + myNodeList[i].innerHTML + "</table>";
                                    }
                                }

                                let line = document.getElementsByTagName("tr");
                                console.log(line);
                                if (document.getElementById("sel-subject").value === "L") {
                                    for (let i = 4; i < 5; i++) {
                                        for (let j = 0; j <= 11; j++) {
                                            line[i].children[j].style.minWidth = 0;
                                        }
                                    }
                                    for (let i = 5; i < line.length; i++) {
                                        if (line[i].id !== "")
                                            break;
                                        line[i].children[0].children[0].href = (line[i].children[0].children[0].href).replace("https://nchuclass.axisflow.biz/", "https://onepiece.nchu.edu.tw/cofsys/plsql/");
                                        line[i].setAttribute("id", "trall-" + i);
                                        line[i].children[1].innerText = line[i].children[1].innerText.replace(/[^\u4E00-\u9FA5]/g, '');
                                        line[i].children[11].innerHTML = line[i].children[11].innerText ? "<details><summary></summary>" + line[i].children[11].innerText + "</details>" : "";
                                    }
                                }
                                else if (document.getElementById("sel-subject").value === "3") {
                                    for (let i = 4; i < 5; i++) {
                                        for (let j = 0; j <= 12; j++) {
                                            line[i].children[j].style.minWidth = 0;
                                        }
                                    }
                                    for (let i = 5; i < line.length; i++) {
                                        if (line[i].id !== "")
                                            break;
                                        line[i].children[0].children[0].href = (line[i].children[0].children[0].href).replace("https://nchuclass.axisflow.biz/", "https://onepiece.nchu.edu.tw/cofsys/plsql/");
                                        line[i].setAttribute("id", "trall-" + i);
                                        line[i].children[1].innerText = line[i].children[1].innerText.replace(/[^\u4E00-\u9FA5]/g, '');
                                        line[i].children[12].innerHTML = line[i].children[12].innerText ? "<details><summary></summary>" + line[i].children[12].innerText + "</details>" : "";
                                    }
                                }
                                else if (document.getElementById("sel-subject").value === "8") {
                                    for (let i = 4; i < 5; i++) {
                                        for (let j = 0; j <= 11; j++) {
                                            line[i].children[j].style.minWidth = 0;
                                        }
                                    }
                                    for (let i = 5; i < line.length; i++) {
                                        if (line[i].id !== "")
                                            break;
                                        line[i].children[0].children[0].href = (line[i].children[0].children[0].href).replace("https://nchuclass.axisflow.biz/", "https://onepiece.nchu.edu.tw/cofsys/plsql/");
                                        line[i].setAttribute("id", "trall-" + i);
                                        line[i].children[1].innerText = line[i].children[1].innerText.replace(/[^\u4E00-\u9FA5]/g, '');
                                        line[i].children[11].innerHTML = line[i].children[11].innerText ? "<details><summary></summary>" + line[i].children[11].innerText + "</details>" : "";
                                    }
                                }
                                else if (document.getElementById("sel-subject").value === "N") {
                                    for (let i = 4; i < 5; i++) {
                                        for (let j = 0; j <= 11; j++) {
                                            line[i].children[j].style.minWidth = 0;
                                        }
                                    }
                                    for (let i = 5; i < line.length; i++) {
                                        if (line[i].id !== "")
                                            break;
                                        line[i].children[0].children[0].href = (line[i].children[0].children[0].href).replace("https://nchuclass.axisflow.biz/", "https://onepiece.nchu.edu.tw/cofsys/plsql/");
                                        line[i].setAttribute("id", "trall-" + i);
                                        line[i].children[1].innerText = line[i].children[1].innerText.replace(/[^\u4E00-\u9FA5]/g, '');
                                        line[i].children[11].innerHTML = line[i].children[11].innerText ? "<details><summary></summary>" + line[i].children[11].innerText + "</details>" : "";
                                    }
                                }
                                else {
                                    for (let i = 4; i < 5; i++) {
                                        for (let j = 0; j <= 14; j++) {
                                            line[i].children[j].style.minWidth = 0;
                                        }
                                    }
                                    for (let i = 5; i < line.length; i++) {
                                        if (line[i].id !== "")
                                            break;
                                        line[i].children[2].children[0].href = (line[i].children[2].children[0].href).replace("https://nchuclass.axisflow.biz/", "https://onepiece.nchu.edu.tw/cofsys/plsql/");
                                        line[i].children[14].removeAttribute('colspan');
                                        line[i].setAttribute("id", "trall-" + i);
                                        line[i].children[3].innerText = line[i].children[3].innerText.replace(/[^\u4E00-\u9FA5]/g, '');
                                        line[i].children[14].innerHTML = line[i].children[14].innerText ? "<details><summary></summary>" + line[i].children[14].innerText + "</details>" : "";
                                    }
                                }

                            })
                    }

                    document.getElementsByClassName("submit")[0].setAttribute("disabled", true);
                    setTimeout(() => {
                        document.getElementsByClassName("submit")[0].removeAttribute("disabled");
                    }, 5000);
                }}>查詢</button>


            </div>
        </React.StrictMode>
    );
    //fetch(url).then(參數 => 回傳值).then(參數 => 函式內容).catch(err => 回報錯誤)
}

export default Progress3;