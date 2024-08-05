    let color="";
    let shapeName="";
    let=preShape="";
    const shapeSelection = function(){
      if(preShape){
        let existedShape = document.getElementsByClassName(`${preShape}`)[0];
        if(existedShape){
          existedShape.remove();
        }
      }
           let parent=document.getElementsByClassName("right-side")
      
          let container=document.createElement("div");
          parent[0].appendChild(container); 
          preShape=shapeName;
          if(container){
          container.className=`${shapeName}`;
          if(shapeName=="Triangle"||shapeName=="Trapezoid"){
                 container.style.borderBottom=`200px solid ${color}`;
          }
          else{
            if(color)
          container.style.backgroundColor=`${color}`
    }
  }
  }
    const selectedShape = document.getElementById("select-shape");
    const onShapeChange= function(){
        shapeName=selectedShape.value;
      
        shapeSelection();
       
    }
    selectedShape.addEventListener("change", onShapeChange);
  

    const selectedColor = document.getElementById("select-color");
    const onColorChange= function(){
       color=selectedColor.value;
       shapeSelection();
    }
    selectedColor.addEventListener("change", onColorChange);
  