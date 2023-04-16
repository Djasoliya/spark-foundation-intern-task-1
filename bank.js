function trans(){
    window.open('moneytras.html');
}
function succses(){
    var x = document.getElementById("transname").value;
    var y = document.getElementById("cid").value;
    var z = document.getElementById("amount").value;
    var w = confirm("Succsesfull " + z + " rupees transfer to " + y + " id and " +x+" name");
    if(w==true){
        window.close('moneytras.html');
    }
    else{
        alert("wrong");
    }
}