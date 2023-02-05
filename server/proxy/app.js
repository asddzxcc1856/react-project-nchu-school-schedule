// 引入 library
const https = require("https");
const express = require('express');
const fs = require('fs');
// express 引入的是一個 function
const app = express();
const cors = require('cors');
const { response } = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
// 建立一個不易產生衝突的 port 用來測試
const port = 8080;

  app.use(cors());
  var DomParser = require('dom-parser');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text({ type: 'text/*' }))



app.post("/", (req,res) =>{
  const product = req.body;
  console.log(req.body);
  fetch("https://onepiece.nchu.edu.tw/cofsys/plsql/crseqry_home_now",{
    method: 'POST', 
    body: product,
    headers: { 
      'Accept': 'text/document',
      'Content-Type': 'multipart/form-data'},
    agent: new https.Agent({
      rejectUnauthorized: false
    })
  })
  .then(response => response.text()).then(ress =>
    {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(ress)
    })
}
)

app.post("/post", (req,res) =>{
  const product = req.body;
  console.log(req.body);
  fetch("https://onepiece.nchu.edu.tw/cofsys/plsql/crseqry_home",{
    method: 'POST', 
    body: product,
    headers: { 
      'Accept': 'text/document',
      'Content-Type': 'multipart/form-data'},
    agent: new https.Agent({
      rejectUnauthorized: false
    })
  })
  .then(response => response.text()).then(ress =>
    {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(ress)
    })
}
)

app.post("/post2", (req,res) =>{
  const product = req.body;
  console.log(req.body);
  fetch("https://onepiece.nchu.edu.tw/cofsys/plsql/crseqry_all",{
    method: 'POST', 
    body: product,
    headers: { 
      'Accept': 'text/document',
      'Content-Type': 'multipart/form-data'},
    agent: new https.Agent({
      rejectUnauthorized: false
    })
  })
  .then(response => response.text()).then(ress =>
    {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(ress)
    })
}
)

app.post("/post3", (req,res) =>{
  const product = req.body;
  console.log(req.body);
  fetch("https://onepiece.nchu.edu.tw/cofsys/plsql/crseqry_m25",{
    method: 'POST', 
    body: product,
    headers: { 
      'Accept': 'text/document',
      'Content-Type': 'multipart/form-data'},
    agent: new https.Agent({
      rejectUnauthorized: false
    })
  })
  .then(response => response.text()).then(ress =>
    {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(ress)
    })
}
)


app.post("/post4", (req,res) =>{
  const product = req.body;
  console.log(req.body);
  fetch("https://onepiece.nchu.edu.tw/cofsys/plsql/crseqry_gene_now",{
    method: 'POST', 
    body: product,
    headers: { 
      'Accept': 'text/document',
      'Content-Type': 'multipart/form-data'},
    agent: new https.Agent({
      rejectUnauthorized: false
    })
  })
  .then(response => response.text()).then(ress =>
    {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(ress)
    })
}
)

app.post("/post5", (req,res) =>{
  const product = req.body;
  console.log(req.body);
  fetch("https://onepiece.nchu.edu.tw/cofsys/plsql/crseqry_gene",{
    method: 'POST', 
    body: product,
    headers: { 
      'Accept': 'text/document',
      'Content-Type': 'multipart/form-data'},
    agent: new https.Agent({
      rejectUnauthorized: false
    })
  })
  .then(response => response.text()).then(ress =>
    {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(ress)
    })
}
)


https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/nchuclass.axisflow.biz/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/nchuclass.axisflow.biz/fullchain.pem')
},app).listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})