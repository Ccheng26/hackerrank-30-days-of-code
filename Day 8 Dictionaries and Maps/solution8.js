function processData(input) {
    //Enter your code here
    //split input on line break
    inList= input.split("\n")
    //first value is amount of key, value pairs
    n= parseInt(inList[0]);
    
    //create dictionary
    function Dict(){
        //create key, value store
        var items={};
        //function to set keys and values
        this.set=function(key,value){
            items[key]=value;
        }
        //search for key
        this.has= function(key){
            return key in items
        }
        //return key value store
        this.get=function(key){
            //looks for key, if key found, return value, else return undefined
            if(this.has(key)){
                return items[key];
            } else {
                return undefined;
            }
        }

    }
    //end limited Dictionary class
    
    //instantiate new limited dictionary class
    var phone= new Dict();
    
    //iterate through next set of values defining key value pairs
    for(i=1; i<=n; i++){
        //split on space
        var key= inList[i].split(" ")[0]
        var value= inList[i].split(" ")[1]
        //set dictionary values and keys 
        phone.set(key, value);
    }
    //iterate through next set of values for lookup values
    for(j=1+n; j<inList.length;j++){
        //look for keys, if found return key and value, else return Not found
        if(phone.has(inList[j])){
            console.log(inList[j]+"="+phone.get(inList[j]));
        } else{
            console.log("Not found")
        }
    }

    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
