var request = new XMLHttpRequest();
//open the connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//send the request
request.send();
//load response when it is ready.
// the function is triggered when onload is ready with response 
request.onload = function() {
    var data = JSON.parse(this.response);//JSON.parse to parse into perfect json object 
    
    var asiacountry = data.filter(function (elements,index){
        return elements.region==='Asia';
    });
    console.log(asiacountry);
    
    
    var population2 = data.filter(function (elements){
        return elements.population < 200000
   });
   console.log(population2);
    
    
    data.forEach(function(element) {
        console.log(element.name  +"      "+ element.capital +"        "+ element.flag);
   });
  
    
    var totalpop = data.reduce(function(accvalue,current) {
       //console.log(accvalue);
       return accvalue + current.population;
   },0)
   console.log(totalpop);
   
    
    var usd_country = data.filter((element) => {
    let flag = false
    element.currencies.forEach(elements => {
        if(elements.code ==='USD') 
            flag = true;
    });
    if(flag==true) 
        return true;
    else 
        return false;
})
console.log(usd_country);

}
    
