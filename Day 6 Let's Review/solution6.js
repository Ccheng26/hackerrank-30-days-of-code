function processData(input) {
    //Enter your code here
    var oddInd='',
        evenInd='',
        //split on line breaks
        words= input.split("\n"); 
    //iterate through array of words, starting with ind 1
    for(i=1; i<words.length; i++){
        //loop over characters checking for even and odd
        for(j=0; j<words[i].length; j++){
            if(j%2==0){
                evenInd+=words[i][j];
            }else{
                oddInd+=words[i][j];
            }
        }
        console.log(evenInd + ' ' +oddInd)
        //clears evenInd and oddInd to reset function for next line
        evenInd=''
        oddInd=''
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
