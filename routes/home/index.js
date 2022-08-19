//라우팅(Routing)이란
// 네트워크상에서 주소를 이용하여 
//목적지까지 메시지를 전달하는 방법을
// 체계적으로 결정하는 경로선택 과정
"use strict";//자바스크립트는 항상 상단에 선언해야한다.

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");//home ctrl 파일에 함수를 호출


router.get("/", ctrl.home); //router은 /login이라는 도메인으로 들어왔을 때 클라이언트 요청과 연결하는 것으로,(req, res) => { res.render("home/index"); => 실제 기능을 수행하는 부분=controller
     //도메인에 왔을때 이동할 코드 / 문자열 안에 파일 이름 적기=>home에 ind

router.get("/login", ctrl.login);

module.exports = router;