"use strict";

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) =>{
    res.render("home/login");
};
  //module.exports=> 이처럼 내보내기를 해야 밖에서 사용가능하다.
module.exports = { //=> 사실상 {key : key} {hellp:hello, login:login}; 이렇게 저장된 꼴
    home,
    login,
};