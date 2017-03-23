var $ = window.$ || undefined,
    document = window.document;

var emptyChecker = {
  	  checkIsEmtpy : function(obj,message){
  	  	 try{
  	  	 	mesage  = message || ' Invalid Value ';
          if(typeof obj == 'object')
            if(!obj || Object.keys(obj).length ==0)
  	  	 		 throw message;
          else if(!obj)
             throw message;
          else if(!obj.length)
             throw message;
  	  	 }catch(error){
  	  	 	console.error(' Error on emptyChecker : checkIsEmtpy() ',error);
  	  	 }
  	  }
  }; 
  window.emptyChecker = emptyChecker;

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
  	  	try{ 
            window.emptyChecker.checkIsEmtpy(hrs,' Invalid Hours Passed / Hours can not be Emtpy ');
            if(hrs<12)
              
              return 'Nothing Big in here! To further lookup';
        }
        catch(exception){
          console.error(' exception araised on get greetings  ',exception);
          
        }
  	  	
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
  	  			self.greetUser.innerHTML = message || ' Greetings..!';
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
 	window.addEventListener('load',window.onLoadProcessor.GreetUser);
/*
   ********** End Of Onload Engine Finish **********
 */

