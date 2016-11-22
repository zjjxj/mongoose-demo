(function () {
    var $=function (el) {
        return document.querySelector(el)
    };

    (function createMap() {
        for(var i=0;i<10;i++){
            $("#map").innerHTML+="<div><span></span><span></span><span>" +
                "</span><span></span><span></span><span></span>" +
                "<span></span><span></span><span></span><span></span></div>"
        }
    })();

    function getDir(){
        var num=Math.ceil(Math.random()*4)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ;
        return num;
    };

    function getRowCol() {
        var num=Math.ceil(Math.random()*10)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ;
        return num-1;
    };

    var initDir=getDir();
    var initRow=getRowCol();
    var initCol=getRowCol();

    //生成棋子，dir表示方向 1，2，3，4依次表示上右下左
    function showChess(rows,cols,dir) {
        var elem=$("#map").getElementsByTagName("div")[rows].getElementsByTagName("span")[cols];
        elem.style.backgroundColor="red";
        switch (dir){
            case 1:
                elem.style.borderTop="10px solid blue";
                elem.style.height="40px";
                break;
            case 2:
                elem.style.borderRight="10px solid blue";
                elem.style.width="41px";
                break;
            case 3:
                elem.style.borderBottom="10px solid blue";
                elem.style.height="41px";
                break;
            case 4:
                elem.style.borderLeft="10px solid blue";
                elem.style.width="40px";
                break;
        }
    };

    //控制操作
    var control={
        getElem:function () {
            return  $("#map").getElementsByTagName("div")[initRow].getElementsByTagName("span")[initCol];
        },
        clearChess:function (rows,cols,dir) {
            var elem=this.getElem();
            elem.style.backgroundColor="";
            switch (dir){
                case 1:
                    elem.style.borderTop="";
                    elem.style.height="50px";
                    break;
                case 2:
                    elem.style.borderRight="1px solid gainsboro";
                    elem.style.width="50px";
                    break;
                case 3:
                    elem.style.borderBottom="1px solid gainsboro";
                    elem.style.height="50px";
                    elem.style.width="50px";
                    break;
                case 4:
                    elem.style.borderLeft="";
                    elem.style.width="50px";
                    break;
            }
        },
        TraLef:function () {
            if(initCol>0){
                this.clearChess(initRow,initCol,initDir);
                initCol-=1;
                showChess(initRow,initCol,initDir);
            }
        },
        TraRig:function () {
            if(initCol<9){
                this.clearChess(initRow,initCol,initDir);
                initCol+=1;
                showChess(initRow,initCol,initDir);
            }
        },
        TraTop:function () {
            if(initRow>0){
                this.clearChess(initRow,initCol,initDir);
                initRow-=1;
                showChess(initRow,initCol,initDir);
            }
        },
        TraBot:function () {
            if(initRow<9){
                this.clearChess(initRow,initCol,initDir);
                initRow+=1;
                showChess(initRow,initCol,initDir);
            }
        },
        MovLef:function () {
            if(initCol<9){
                this.clearChess(initRow,initCol,initDir);
                initCol+=1;
                initDir=4;
                showChess(initRow,initCol,4);
            }
        },
        MovRig:function () {
            if(initCol<9){
                this.clearChess(initRow,initCol,initDir);
                initCol+=1;
                initDir=2;
                showChess(initRow,initCol,2);
            }
        },
        MovTop:function () {
            if(initRow>0){
                this.clearChess(initRow,initCol,initDir);
                initRow-=1;
                initDir=1;
                showChess(initRow,initCol,1);
            }
        },
        MovBot:function () {
            if(initRow<9){
                this.clearChess(initRow,initCol,initDir);
                initRow+=1;
                initDir=3;
                showChess(initRow,initCol,3);
            }
        },
    };

    //点击事件
    $("button").onclick=function () {
        var input=$("input").value.toLowerCase().trim();
        switch (input){
            case "mov left":
            case "mov lef":
                control.MovLef();
                break;
            case "mov right":
            case "mov rig":
                control.MovRig();
                break;
            case "mov bot":
            case "mov bottom":
                control.MovBot();
                break;
            case "mov top":
                control.MovTop();
                break;
            case "tra left":
            case "tra lef":
                control.TraLef();
                break;
            case "tra right":
            case "tra rig":
                control.TraRig();
                break;
            case "tra bot":
            case "tra bottom":
                control.TraBot();
                break;
            case "tra top":
                control.TraTop();
                break;
        }
        return false;
    };

    showChess(initRow,initCol,initDir);
})();

