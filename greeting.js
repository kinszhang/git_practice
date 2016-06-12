var greeting;

var checkNewCustomer = function(newCustomer) {
	if(newCustomer) {
	  greeting = function() {
	     alert('Welcome, new customer!');
	  };
	}
	else {
	  greeting = function() {
	     alert('welcome back!');
	  };
	}
};

var closeShop (greeting) {
	greeting();
}

checkNewCustomer(true);
closeShop(greeting);