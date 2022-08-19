const app = require("../app") //../app =>상위 폴더로 가서 app을 불러온다
const PORT = 3000;
app.listen(PORT, () => {
    console.log("서버 가동");
});
