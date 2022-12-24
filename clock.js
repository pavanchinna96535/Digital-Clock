function displaytime(){

    var date=new Date();
    const displaytime=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    
    document.getElementById("ip1").innerHTML=displaytime;
    
    }
    setInterval(displaytime,10);