function okay() {
    //var truevar = valid()

    // if (truevar === true) {
    //     $("#errorbox").dialog("close");
    //     var mD = document.getElementsByClassName("mainDiv");
    //     mD.style.opacity = 1;
    //     var head = document.getElementsByTagName("h1");
    //     head.style.opacity = 1;
    //     return true;
    // }

    $("#errorbox").dialog("close");
    $(".mask").css("opacity", "1");
    // $("h1").css("opacity", "1");
    // var mD = document.getElementsByClassName("mainDiv");
    // mD.style.opacity = 1;
    // var head = document.getElementsByTagName("h1");
    // head.style.opacity = 1;
    return true;

}

function notokay() {
    return null;
}

function valid() {
    var data = {
        "a": "1",
        "b": "2",
        "c": "3",
        "21544920171124610002" : "21544920171124610002",
        "21544920181124610026" : "21544920181124610026",
        "21544920181124610027" : "21544920181124610027",
        "21544920181124610028" : "21544920181124610028",
        "21544920181124610029" : "21544920181124610029",
        "21544920181124610030" : "21544920181124610030",
        "21544920181124610031" : "21544920181124610031",
        "21544920181124610032" : "21544920181124610032",
        "21544920181124610033" : "21544920181124610033",
        "21544920181124610034" : "21544920181124610034",
        "21544920181124610035" : "21544920181124610035",
        "21544920181124610036" : "21544920181124610036",
        "21544920181124610037" : "21544920181124610037",
        "21544920181124610038" : "21544920181124610038",
        "21544920181124610039" : "21544920181124610039",
        "21544920181124610040" : "21544920181124610040",
        "21544920181124610041" : "21544920181124610041",
        "21544920181124610042" : "21544920181124610042",
        "21544920181124610043" : "21544920181124610043",
        "21544920181124610044" : "21544920181124610044",
        "21544920181124610045" : "21544920181124610045"
    }
    var u = document.getElementById("uname").value; //input() 
    var p = document.getElementById("pass").value; //input() 

    for (var key in data) {
        if (key === u && data[key] === p) {
            console.log("correct credential");
            return okay();
        } else {
            alert("incorrect credentials");
            break;
            //return false;
        }

    }

}

// document.addEventListener("contextmenu", function(e) {
//     e.preventDefault();
// }, false);


document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);
$("#errorbox").dialog({
    title: "Login",
    draggable: false,
    resizable: false,
    width: 650,
    height: 700,
    modal: true,

});
