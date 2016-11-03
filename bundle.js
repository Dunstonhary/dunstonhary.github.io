/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

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
	              
	              return 'Greetings';
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



/***/ },
/* 2 */
/***/ function(module, exports) {

	window.AudioContext =  window.AudioContext||window.webkitAudioContext;
	var context = new AudioContext(),
	    mousedown = false,
	    oscillator;
	    
	var gainNode = context.createGain();

	var calculateFrequency = function (mouseXPosition) {
	  var minFrequency = 20,
	      maxFrequency = 2000;

	  return ((mouseXPosition / window.innerWidth) * maxFrequency) + minFrequency;
	};
	var calculateGain = function (mouseYPosition) {
	  var minGain = 0,
	      maxGain = 1;

	  return 1 - ((mouseYPosition / window.innerHeight) * maxGain) + minGain;
	};

	window.document.body.addEventListener('mousedown', function (e) {
	  mousedown = true;
	  oscillator = context.createOscillator();
	  oscillator.frequency.setTargetAtTime(calculateFrequency(e.clientX), context.currentTime, 0.01);
	  oscillator.connect(gainNode);
	  gainNode.connect(context.destination);
	  oscillator.start(context.currentTime);
	});

	window.document.body.addEventListener('mouseup', function () {
	  mousedown = false;
	  oscillator.stop(context.currentTime);
	  oscillator.disconnect();
	});

	window.document.body.addEventListener('mousemove', function (e) {
	  if (mousedown) {
	      gainNode.gain.setTargetAtTime(calculateGain(e.clientY), context.currentTime, 0.01);
	  }
	});






	/*
	    **********  OnLoad Engine Start  **********
	 */
	  // window.addEventListener('load',window.onLoadProcessor.GreetUser);
	/*
	   ********** End Of Onload Engine Finish **********
	 */



/***/ }
/******/ ]);