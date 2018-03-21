function readAsDataURL() { 
    if(typeof FileReader=='undifined'){ //判断浏览器是否支持filereader 
        result.innerHTML="<p>抱歉，你的浏览器不支持 FileReader</p>"; 
        return false; 
    } 
    var file=document.getElementById("myfile").files[0];
    var reader=new FileReader(); 
    reader.readAsDataURL(file);
    var result=document.getElementById("result1");  
    if(/image\/\w+/.test(file.type)){ //判断获取的是否为图片文件 
        reader.onload=function(e) { 
            result.innerHTML='<img src="'+this.result+'" alt=""/>' 
        } 
    }else if (/text\/\w+/.test(file.type)) {

        reader.onload=function(e) {  
            result.innerHTML="<p>"+this.result+ "</p>";
        } 
    }
} 

function owrite(){
    var otext= document.getElementById("mytext");
    try { 
        var fso=new ActiveXObject("Scripting.FileSystemObject"); 

    } catch (e) { 
        alert("当前浏览器不支持");//仅支持Ie浏览器
        return;
    } 
    var f=fso.createtextfile("E://Git//test1.txt",true); 
    f.writeLine(otext.value); 
    f.close();
    otext.value="";
}

function oread() {
    var fso=new ActiveXObject(Scripting.FileSystemObject); 
    var f=fso.opentextfile("E://Git//test1.txt",1); 
    document.getElementById("result2").innerHTML=f.ReadLine(); 
    f.close();

}