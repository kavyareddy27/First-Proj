var queue=function(){
    var head=null;
    var tail=null;
    var count=0;
    this.getCount=function(){
    	count++;
    }

    //Enqueue operation

   this.enqueue=function(){
   	var node{
   		data:data;
   		next:next;

   	}
   	if(head===null){
   		tail=node;
   	}
   	head=node;
   	count++;
   }

   //Dequeue operation
   this.dequeue=function(){
   	 if(count===0){
   	 	return;
   	 }
   	 else{
   	 	var current=head;
   	 	var previous=null;
   	 	//travesing
   	 	while(current.next){
   	 		current=previous;
   	 		current=current.next;
   	 	}
   	 	//if more than 1 element exists
   	 	if(count>1){
   	 		   previous.next=null
                tail=previous;
   	 	}
   	 	else{
   	 		head=null;
   	 		tail=null;
   	 	}
   	 	count--;
   	 }
   }
   //Display operation
   this.displayAll=function(){
   	if (head === null) {
        return null;
    }
    else {
    	var arr[] = new Array();
    	var current=head;
    	for(var i=0;i<count;i++){
    		arr[i]=current;
    		current=current.next;
    	}

    return arr;
    }
   }
};