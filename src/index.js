    //localStorage.setItem("checkpointNow", 2);
    //localStorage.setItem("checkpointNow", checkpointNow);
    //localStorage.getItem("checkpointNow");


    // 初始化关卡
    let checkpointNow = localStorage.getItem("checkpointNow") ? Number(localStorage.getItem("checkpointNow")) : 0;

    // 初始化步幅记录（最后 5 步）
    let lastFiveStep = [];

    // 更新步幅
    function pushLastFiveStep(arr){
      if(lastFiveStep.length >= 6){
        lastFiveStep.shift();
        lastFiveStep.push(arr);
      } else {
        lastFiveStep.push(arr);
      }
    }

    // 后退步幅
    function popLastFiveStep(){
      if(lastFiveStep.length <= 1){
      } else {
        lastFiveStep.pop();
      }
    }

    // 获取渲染位置
    let chessboardBox = document.getElementById("chessboard");

    function thisRender(round){
      chessboardBox.innerHTML = rederRow(round);
      checks[checkpointNow].map(items => {
        const {coordinate, value} = items;
        const answerCell = document.getElementById(`cell-${coordinate[0]}-${coordinate[1]}`);
        answerCell.style.color = "red";
        answerCell.innerText = value;
      })
    }

    // 将当前关卡初始数据存储、渲染
    pushLastFiveStep(rounds[checkpointNow]);
    thisRender(lastFiveStep[lastFiveStep.length - 1]);

    // 折
    function thisfold(arrs, axis){
      let thisstep = fold(arrs, axis);
      if (isWin(thisstep, checks[checkpointNow])) {
        pushLastFiveStep(thisstep);
        thisRender(lastFiveStep[lastFiveStep.length - 1]);
        openDialogBox();
      } else {
        pushLastFiveStep(thisstep);
        thisRender(lastFiveStep[lastFiveStep.length - 1]);
      }
    }

    // 后退
    function back(){
      popLastFiveStep();
      thisRender(lastFiveStep[lastFiveStep.length - 1]);
    }

    // 重新开始
    function Restart(){
      pushLastFiveStep(rounds[checkpointNow]);
      thisRender(lastFiveStep[lastFiveStep.length - 1]);
    }

    function openDialogBox(){
      document.getElementById("comeonBox").innerText = checkpointNow >= 3 ? "您已经通关了！": `您已经通过第 ${checkpointNow + 1} 关`;
      let button = document.getElementById("dialogBoxButton");
      button.innerText = checkpointNow >= 3 ? "关闭" : "下一关";
      document.getElementById('dialogBoxBackground').style.display = "flex";
      takeScreenshot();
    }

    function closeDialogBox(){
      document.getElementById('dialogBoxBackground').style.display = "none";
    }

    // 下一关
    function next(){
      if(checkpointNow < 3) {
        checkpointNow++
        localStorage.setItem("checkpointNow", checkpointNow);
      } else {
        checkpointNow = 0;
        localStorage.setItem("checkpointNow", checkpointNow);
      }
      lastFiveStep = [];
      // 将当前关卡初始数据存储、渲染
      pushLastFiveStep(rounds[checkpointNow]);
      thisRender(lastFiveStep[lastFiveStep.length - 1]);
      closeDialogBox();
    }

    let ruleTable = document.getElementById("ruleTable");
    ruleTable.innerHTML = rederRow(roundlearn);

    let menuList = ["root", "rule", "about"]
    function clickMenu(showItems) {
      menuList.map(items => {
        if(items === showItems){
          document.getElementById(items).style.display = "block";
        } else {
          document.getElementById(items).style.display = "none";
        }
      })
    }

    function takeScreenshot() {
      console.log('test');
      let chessboard = document.getElementById('chessboard');
      chessboard.style.border = "1px solid #333";
      let chessboardList = chessboard.childNodes;
      console.log(chessboardList);
      // chessboardList.map((items,index) => {
      //   console.log("index:", index, ",items:", items)
      // });
      for(let i = 0; i < chessboardList.length; i++){
        console.log("index:", i, ",items:", chessboardList[i])
        chessboardList[i].style.border = "none";
        let cCCNode = chessboardList[i].childNodes;
        for(let j = 0; j < cCCNode.length; j++){
          cCCNode[j].style.border = "none";
          cCCNode[j].innerText = "";
        }
      }
      // console.log(chessboard);
      new html2canvas(chessboard)
        .then(canvas => {
          let oImg = new Image();
          oImg.style.width = "16rem";
          oImg.style.height = "16rem";
          oImg.src = canvas.toDataURL(); 
          let outImg = document.getElementById("outImg");
          outImg.innerHTML = '';
          outImg.appendChild(oImg);
        });
    }
