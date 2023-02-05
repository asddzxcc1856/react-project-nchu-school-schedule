import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import App from './App';
import { NameProvider } from './nameContext';

//Name
const Name = { name: "伸縮按鈕" };

//建立 root
const root = ReactDOM.createRoot(document.getElementById('root'));
//讓 root 進行第一次的 render 產生DOM 也呼叫底下的 class component 或 function component 兩者都可將 props 傳入給他們各自的component使用(ex: props.name)
root.render(
  <>
      <NameProvider value={Name}>
        <App />
      </NameProvider>

  </>
);

//可以用一層一層的關係用props傳下去
//可以直接用Global State 把[name,changeName]=useState(0)改成

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
