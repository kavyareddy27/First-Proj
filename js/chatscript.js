var username="";
		    function send_mess(message){
                 $("#container").html("<span class='box'> Chatbox:</span>"+message);		    }
		    function get_username(){
		    	send_mess("Hello! What is your name?");
		    }	
		    function talk(message){
		    	
		    	if(username.length<10){
		    		username=message;
		    		send_mess("Nice to meet you "+username+" .How are you doing today?");
		    	}
		    }

			$(function(){
				get_username();
				$("#textbox").keypress(function(event){
                   if(event.which == 13){
                      if($("#info").prop("checked")){
                      	  $("#send").click();
                      	  event.preventDefault();
                      }
                   }
				});

				$("#send").click(function(event){
				  var username="<span class='username'>You:</span>";
                  var firsttext=$("#textbox").val();
                  $("#textbox").val("");
                  var sectext=$("#container").html();
                  console.log(sectext.length);
                  if(sectext.length>10){
                  	 sectext=sectext+"<br>";
                  }
                 
                  $("#container").html(sectext+username+firsttext);
                 $("#container").scrollTop($("#container").prop("scrollHeight"));
                 talk(firsttext);
				});
			});