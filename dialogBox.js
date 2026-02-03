function Alert_Function() {
    alert("HELLO\nWELCOME");
}
m
function Confirm_Function1() {   
    var txt;
    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed BUTTON!";
    }
    document.getElementById("confirm").innerHTML = txt;
}

function Prompt_Function() {
    let text;
    let person = prompt("Please enter your name:", "Name");
    if (person == null || person == "") {
      text = "YEAHHHHHH.";
    } else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("prompt").innerHTML = text;
}