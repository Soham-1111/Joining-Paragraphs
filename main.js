function getpara1(){
    var inputs=[];
    for(var i=1; i<=6; i++){
        inputs.push(document.getElementById("para1_input_box_" +i).value);
        document.getElementById("display1").innerHTML =inputs.join(". ");
    }
}

function getpara2(){
    var inputstwo=[];
    for(var i=1; i<=6; i++){
        inputstwo.push(document.getElementById("para2_input_box_" +i).value);
        document.getElementById("display2").innerHTML = inputstwo.join(". ");
    }
}