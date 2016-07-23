function App() {
	this.init_two();
	this.init();
	
}
App.prototype = Object.create(Helper.prototype);//наследование хелпер у аппа
App.prototype.init = function(){
	this.getDate("2016-06-18 11:10:00", "ru");
};
App.prototype.init_two = function(){
	this.getFrame();
};

window.addEventListener("DOMContentLoaded", function(){
	new App();
});
