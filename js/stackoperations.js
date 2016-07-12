function stack(){
	var top=null;
	var count=0;

	this.getCount=function(){
		return count;
	}

	//Push opertion
	this.push=function(data){
		var node{
			data:data;
			next: null;
		};
		node.next=top;
		top=node;
		count++;
	};

	//Peek Operation
	this.peek=function(){
		
		if(top==null){
			return null;
		}
		else
			return node;
	}
	
	//Pop operation
	this.pop=function(){
		if(top==null){
			return null;
		}
		else{
			var temp=top;
			top.next=top;
		}
		if(count>0){
			count--;
		}
		return out.data;
	}
    

   //Display operation
   this.displayAll=function(){
   	if (top === null) {
        return null;
    }
    else {
    	var arr[] = new Array();
    	var current=top;
    	for(var i=0;i<count;i++){
    		arr[i]=current;
    		current=current.next;
    	}

    return arr;
    }
   }

};