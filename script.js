var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    for(var i=0;i<250;i++)
    {
        try{
        var cname=data[i].name;
        var lang=data[i].latlng;
        if(lang.length===0)throw new console.error("Longitude for this place is not defined");
        weatherdata(cname,...lang);
        }catch(e)
        {
            console.log("Error has been handled"+cname+" "+e.message);
        }
}}
function weatherdata(name,lat,lang)
{
    var req=new XMLHttpRequest();
    var url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=6ca858c03af2d32bbe46341e5419cfd1';
    req.open('GET',url,true);
    req.send();
    req.onload=function(){
        var data=JSON.parse(this.response);
        console.log(`${name} : ${data.main.temp}`);
    }
}