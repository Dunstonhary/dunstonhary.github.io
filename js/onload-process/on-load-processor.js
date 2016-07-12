var $ = window.$ || undefined,
    document = window.document;

var emptyChecker = {
  	  checkIsEmtpy : function(obj,message){
  	  	 try{
  	  	 	mesage  = message || ' Invalid Value ';
  	  	 	if(!obj || Object.keys(obj).length ==0)
  	  	 		throw message;
  	  	 }catch(error){
  	  	 	console.error(' Error on emptyChecker : checkIsEmtpy() ',error);
  	  	 }
  	  }
  }; 
  window.emptyChecker;

/*
    On Load Processor Begins
 */      
(function(windowObj){
  var model = {
  	  init : function(){
  	  	this.currentDate = '';
  	  },
  	  getCurrentDate : function(){
  	  	return this.currentDate;
  	  },
  	  setCurrentDate : function(currentDate){
  	  	this.currentDate = currentDate;
  	  }
  };
  var controller={
  	  init : function(){
  	  	model.init();
  	  	view.init();
  	  	this.initialize();
  	  },
  	  initialize : function(){
  	  	 this.setUpCurrentDate();
  	  	 this.greetUser();
  	  },
  	  setUpCurrentDate : function(){
  	  	try{
  	  		 model.setCurrentDate(new Date());
  	  	}catch(error){
  	  		console.error(' Erro on setting up current Date ',error);
  	  	}
  	  },
  	  greetUser : function(userName){
  	  	var userTime 	= model.getCurrentDate();
  	  	var hrs 	 	= userTime.getHours();
  	    var greetMsg 	= this.getGreetings(hrs);
        var viewReferer = view.render();
            viewReferer.renderGreetingMessage(greetMsg);
  	  },
  	  getGreetings : function(hrs){
  	  	//window.emptyChecker.checkIsEmtpy(hrs);
  	  	if(hrs<12)
  	  		return 'Good Morning';
  	  	else if(hrs >= 12 && hrs <= 15)
  	  		return 'Good Noon';
  	  	else if(hrs >= 15 && hrs <=19)
  	  		return 'Good Evening';
  	  	else if(hrs >=19 && hrs<=24)
  	  		return "It's Night ! Still you are here, I Appreciate Your Dedication ";
  	  	else
  	  		return 'Good that you stepped In to Learn';
  	  },
  };
  var view = {
  	  init : function(){
  	  	this.greetUser =  document.getElementById('greet-user');
  	  },
  	  render : function(){
  	  	var self = this;
  	  	return {
  	  		renderGreetingMessage : function(message){
  	  			self.greetUser.innerHTML = message || ' Huh! Good that you are Here ....!';
  	  		}
  	  };
  	}
  };
  windowObj.onLoadProcessor  = {
  		GreetUser : controller.init.bind(controller)
  };
})(window);


  



/*
    **********  OnLoad Engine Start  **********
 */
 	window.addEventListener('load',window.onLoadProcessor.GreetUser());
/*
   ********** End Of Onload Engine Finish **********
 */

