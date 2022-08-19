// const http = require("http");
// const app = http.createServer((req,res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
//    if(req.url === '/') {
//     res.end("여기는 루트입니다.");
//    } else if (req.url === "/login") {
//     res.end("여기는 로그인 화면입니다.");
//    }
// });

// app.listen(3001, () =>{
//     console.log("http로 가동된 서버입니다.");
// });
"use strict";
//모듈
const express = require("express");
const app = express();

const PORT = 3000;

//라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views", "./views"); //화면 view를 관리해줄 파일이 저장될 폴더 이름을 정의: 두번째 파라미터->./views라고 폴더 이름 설정
app.set("view engine", "ejs"); //html 코드를 어떤 엔진으로 해석할지 정의하는 것. ejs로 사용할 것이라는 뜻
//실행 후 cannot find ejs 뜸=> ejs를 설치하지 않았기 때문=> npm inintall ejs-s 입력


app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;
