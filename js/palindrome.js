var palindrome=function(str){
	str="";
	var revStr="";
	//str=getElementById("str").value;
	for(j=str.length;j>=0;j--){
		revStr=revStr+str.charAt(j);
	}
	if(str==revStr){
		console.log("The String is Palindrome");
	}
	else{
		console.log("The String is not a Palindrome");
	}
};
palindrome("madam");