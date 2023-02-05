import React, { Component } from 'react';
import NameContext from './nameContext.js'
import Header from './Header';
import { Route, Routes } from 'react-router';
import Activity from './Activity.js';
import Product from './Product.js';
import Content from './Content.js';
import Login from './Login.js';
import Register from './Register.js';
import Teach from './Teach.js';
import Footer from './Footer.js';
import { BrowserRouter } from 'react-router-dom';
//第一次物件創建時流程                   constructor() => static getDerivedStateFromProps(props,state) => render() => 渲染DOM => componentDidMount
//第一次到第N次物件Props,State更新時流程 shouldComponentUpdate(nextProps,nextState) => getSnapshotBeforeUpdate(prevProps,prevState) => render() => 渲染DOM => componentDidUpdate
//最後要刪除物件時觸發流程               componentWillUnmount()
class App extends Component {
  static contextType = NameContext;
  constructor(props) {
    //繼承props
    super(props);
    //宣告state
    this.state = {
      name: "",
      first: true,
      width: 1000
    }
    //綁定changeName函式的this 為 class App 的 this
    //this.shorten = this.shorten.bind(this);
    //this.lengthen = this.lengthen.bind(this);
  }
  //changeName 給button onClick用的函式
  change = () => {
    this.setState({
      name: this.state.name,
      first: this.state.first === false ? true : false,
      width: this.state.width
    }
    )
  }
/*   shorten = (newName) => {
    if (this.state.width >= 990) {
      const len = this.state.width - 1;
      this.setState({
        name: this.state.name,
        first: this.state.first,
        width: len
      }
      )
      document.getElementById("msg").style.height = (len.toString() + "px");
      this.tm = setTimeout(this.shorten, 20);
    }
    else {
      this.setState({
        name: this.state.name,
        first: this.state.first === false ? true : false,
        width: this.state.width
      }
      )
    }
  }

  lengthen = (newName) => {
    if (this.state.width <= 999) {
      const len = this.state.width + 1;
      this.setState({
        name: this.state.name,
        first: this.state.first,
        width: len
      }
      )
      document.getElementById("msg").style.height = (len + "px");
      this.tm2 = setTimeout(this.lengthen, 20);
    }
    else {
      this.setState({
        name: this.state.name,
        first: this.state.first === false ? true : false,
        width: this.state.width
      }
      )
    }
  } */

  //DerivedStateFromProps 用props來修改state的render phase
  static getDerivedStateFromProps(props, state) {
    if (state.first === true)
      return { name: "新的1", first: state.first };
    else
      return { name: "新的2", first: state.first };
  }
  //componentDidMonut 用來修改render後的DOM樣式 // 可以fetch style DOM...
  componentDidMount() {
    if (this.state.first === true) {
      //this.shorten();
    }
    else {
      //this.lengthen();
    }
  }
  //componentWillUnmonut   時會觸發 delete
  componentWillUnmount() {
    return;
  }
  //shouldComponentUpdate(nextProps,nextState) 
  //return true 代表可以做 Update 的 render 
  //return false 代表不可以做 Update 的 render
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.first !== this.state.first) {
      return true;
    }
    else {
      return false;
    }
  }

  //getSnapshotBeforeUpdate 在 render 與 render產生DOM 之間把目前狀態做儲存可以用
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }
  //componentDidUpdate 更新後可以修改 render 的 DOM 內容樣式 // fetch DOM style js...
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.first === true) {
      clearTimeout(this.tm2);
    }
    else {
      clearTimeout(this.tm);
    }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  //render 渲染的return (DOM);
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>系統出錯!!</h1>;
    }
    return (
      <>
        <BrowserRouter>
        <Header first={this.state.first}/> 
          <Routes>
          <Route path="/Teach" element={<Teach first={this.state.first} width={this.state.width} handlefirst={this.change}></Teach>}></Route>
          <Route path="/Register" element={<Register first={this.state.first} width={this.state.width} handlefirst={this.change}></Register>}></Route>
          <Route path="/Login" element={<Login first={this.state.first} width={this.state.width} handlefirst={this.change}></Login>}></Route>
          <Route path="/Activity" element={<Activity first={this.state.first} width={this.state.width} handlefirst={this.change}></Activity>}></Route>
          <Route path="/Product" element={<Product first={this.state.first} width={this.state.width} handlefirst={this.change}></Product>}></Route>
          <Route path="/" element={<Content first={this.state.first} width={this.state.width} handlefirst={this.change}></Content>}></Route>
        </Routes>
        
        <Footer/>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
