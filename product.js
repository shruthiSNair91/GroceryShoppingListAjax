function showlist()
    { 
    var xhttp=new XMLHttpRequest();
    var showlist=document.getElementById("showList");
    document.getElementById("showList").style.visibility="hidden";
    xhttp.onreadystatechange=function(){
        if(xhttp.readyState==4 && xhttp.status==200)
        {
            var listObj=JSON.parse(this.responseText);
            var prodList=listObj.products;
            console.log(prodList);
            var DisplayList="";
            DisplayList +="<table><tr><th>Sr.No.</th><th>NAME</th><th>QUANTITY</th><th>UNIT</th><th>DEPARTMENT</th><th>NOTES</th></table>";
            for(var i=0;i<prodList.length;i++)
            {
                DisplayList +="<tr><td>"+prodList[i].Sno+"     "+"</td>"+"<td>"+prodList[i].Name+"     "+"</td>"+"<td>"+prodList[i].Quantity+"     "+"</td>"
                +"<td>"+prodList[i].Unit+"     "+"</td>"+"<td>"+prodList[i].Department+"     "+"</td>"+"<td>"+prodList[i].Notes+"       "+"</td></tr>";
            }
            document.getElementById("pTable").style.visibility="visible";
           document.getElementById("prodTable").innerHTML=DisplayList;
        
        }

    }
    xhttp.open("GET","ProductList.json",true);
    xhttp.send();

       
//   
}
