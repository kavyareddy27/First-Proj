var array=['a','a','a','b','v'];
	var count=0;
	var flag=-1;
	var biggest=0;
    for(var i=0;i<array.length;i++){
    	if(flag){
    	for(j=i;j<array.length;j++){
    		if(array[i]==array[j]){
    			count++;
    		}
        }
        if(count>biggest){
        	biggest=count;
        	console.log(array[i] + "is" + count + "times");
        }
        count=0;
    }
    flag=0;
}
