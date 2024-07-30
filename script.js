function submit(){
    const pan=document.getElementById("pan").value;

    if(pan==="")
        alert("Enter your PAN number");
    else if(pan.length!==10)
        alert("Invalid PAN number");
    else if(pan==="/^[A-Z]{5}[0-9]{4}[A-Z]{1}")
        alert("Invalid PAN number");
    else{
        document.getElementById("result").innerHTML="Valid PAN Number";
        pan.value="";
    }
}
