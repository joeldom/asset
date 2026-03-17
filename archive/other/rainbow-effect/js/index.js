$(function() {
  var stageWidth;
  var stageHeight;
  var context = $("canvas")[0].getContext('2d');
  var objectList;
  var timeout;
  var isMouseOnStage = false;
  var mouseX = 0;
  var mouseY = 0;
  var cellXCount;
  var cellYCount;
  var stats;
  
  var prms = {
    fps:60,
    objectDistance: 30,
    mouseForce: 40,
    friction: 0.25,
    hueV: 5
  }
  
  init();
  
  function init(){
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    //document.body.appendChild( stats.domElement );

    $(window).resize(reset);
    $("#wrapper").bind("mousemove",function(e){
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseOnStage = true;
    }).bind("mouseleave touchend touchcancel",function(e){
      isMouseOnStage = false;
    }).bind("touchstart",function(e){
       var touches = e.touches;
      if(touches[0]){
        var touch = touches[0];
        mouseX = touch.clientX;
        mouseY = touch.clientY;
        isMouseOnStage = true;
      }
    });

    reset();
  }
  
  
  function reset(){
    
    stageWidth = $("#wrapper").width();
    stageHeight = $("#wrapper").height();
    
    $("#wrapper canvas").attr("width",stageWidth);
    $("#wrapper canvas").attr("height",stageHeight);
    
    // 表示オブジェクトを作成
    objectList = [];
    
    // 各Cellを作成
    var x = -prms.objectDistance * .5;
    var y;
    cellXCount = Math.ceil(stageWidth/prms.objectDistance) + 2;
    cellYCount = Math.ceil(stageHeight/prms.objectDistance) + 2;
    
    for(var xIndex = 0; xIndex < cellXCount; xIndex++){
      y = -prms.objectDistance * .5;
      for(var yIndex = 0; yIndex < cellYCount; yIndex++){
        var xDist = x/stageWidth;
        var yDist = y/stageHeight;
        var hue = 60 * (xDist + yDist) + 120;
        objectList.push(
          new Circle(
            x,
            y, 
            hue
          )
        );
        y += prms.objectDistance;
      }
      x += prms.objectDistance;
    }
    
    //各Cellの上下左右のCellをセット
    var tempCell;
    var tempIndex;
    for(xIndex = 0; xIndex < cellXCount; xIndex++){
      for(yIndex = 0; yIndex < cellYCount; yIndex++){
        tempIndex = xIndex * cellYCount + yIndex;
        tempCell = objectList[tempIndex];
        //左のCellをセット
        if(xIndex > 0){
          tempIndex = (xIndex - 1) * cellYCount + yIndex;
          tempCell.leftCircle = objectList[tempIndex];
        }
        //右のCellをセット
        if(xIndex < cellXCount - 1){
          tempIndex = (xIndex + 1) * cellYCount + yIndex;
          tempCell.rightCircle = objectList[tempIndex];
        }
        //上のCellをセット
        if(yIndex > 0){
          tempIndex = xIndex * cellYCount + yIndex - 1;
          tempCell.topCircle = objectList[tempIndex];
        }
        //下のCellをセット
        if(yIndex < cellYCount - 1){
          tempIndex = xIndex * cellYCount + yIndex + 1;
          tempCell.bottomCircle = objectList[tempIndex];
        }
        
        
      }
    }
    
    // タイマーをリセット
    if(timeout){
      clearTimeout(timeout);
    }
    timeout = setTimeout(onEnterFrame, 1000/prms.fps);
  }
  
  function Circle(_x, _y, _hue){
    this.x = _x;
    this.y = _y;
    this.hue = _hue;
    this.hueV = 0;
    this.hueA = 0;
    this.rightCircle = null;
    this.leftCircle = null;
    this.topCircle = null;
    this.bottomCircle = null;
    
  }
  Circle.prototype.rotationV = prms.objectRotationV;
  Circle.prototype.radius = prms.objectRadius;
  Circle.prototype.tick = function(){
    var dist = prms.objectDistance;
    
    var mouseF = prms.mouseForce;
    
    
    if(isMouseOnStage){
      //マウス位置からの距離反比例して加速
      var distX = this.x - mouseX;
      var distY = this.y - mouseY;
      var dist = Math.max(0.1,Math.sqrt(distX * distX + distY * distY));
      
      this.hueA = mouseF/dist;
    }else{
      this.hueA = 0;
    }
    
    this.hueV += this.hueA - this.hueV * prms.friction;
    
    if(this.rightCircle){
      this.hueV += diffAngle(this.hue,this.rightCircle.hue)*.05;
    }
    if(this.leftCircle){
      this.hueV += diffAngle(this.hue,this.leftCircle.hue)*.05;
    }
    if(this.topCircle){
      this.hueV += diffAngle(this.hue,this.topCircle.hue)*.05;
    }
    if(this.bottomCircle){
      this.hueV += diffAngle(this.hue,this.bottomCircle.hue)*.05;
    }
    
    
    this.hue += this.hueV;
    if(this.hue > 180){
      this.hue -= 360;
    }else if(this.hue < -180){
      this.hue += 360;
    }
    /*
    if(this.x < 0 && this.y < 0){
        console.log(this.hue,this.hueV,this.hueA);
    }*/
    
  }
  
  function onEnterFrame(){
    stats.begin();
    
    var len = objectList.length;
    var dist = prms.objectDistance;
    var object;
    // 表示オブジェクトの位置を計算
    
    while(len > 0){
      len -= 1;
      object = objectList[len];
      object.tick();
    }
    
    // 表示オブジェクトを描画
    context.clearRect(0, 0, stageWidth, stageHeight);
 
    var tempCell;
    context.strokeStyle = 'rgba(255,255,255,.12)';
    for (var x = 0; x < cellXCount; x++) {
      for (var y = 0; y < cellYCount; y++) {
        idx = x * cellYCount + y;
        tempCell = objectList[idx];
        
        if(tempCell.rightCircle && tempCell.bottomCircle){
          context.beginPath();

          var hue = tempCell.hue;
          var lightness = 50;
          var saturation = 100;
          /*
          lightness = (Math.cos(hue/180*Math.PI) + 1)/2 * 100;
          hue = 180;
          */
          context.fillStyle = 'hsl('+hue+','+saturation+'%,'+lightness+'%)';
          context.rect(tempCell.x - dist/2, tempCell.y - dist/2, dist, dist);
    //context.stroke();
    context.fill();
        }
        
        
      }
    }
    
    stats.end();
    
    // 次フレーム呼び出し
    timeout = setTimeout(onEnterFrame, 1000/prms.fps);
  }
  
  //２つの角度（°）、angle1からangle2のの差を返す汎用関数
  function diffAngle(angle1, angle2){
    var diff = angle2 - angle1;
    if(diff > 180){
      diff -= 360;
    }else if(diff < -180){
      diff += 360;
    }
    return diff;
  }

})