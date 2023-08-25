// JavaScript Document
// Function that only executes when page is loaded
document.addEventListener("DOMContentLoaded", function () {		
var closingSidebar = document.getElementById("sidebarClose"); // Sidebar button
var openingSidebar = document.querySelector(".sidebar");	// Sidebar

closingSidebar.addEventListener("click", function (){	//On click, function executes
	openingSidebar.classList.toggle("open");
});		// Function adds or removes the "open" class
	
	
// Buttons
var buttonHome = document.getElementById("homeButton");		// Home button
	
buttonHome.addEventListener("click", function() {
	window.location.href = "Homepage.html";
});	

	
var buttonAllCars = document.getElementById("allCarsButton");	// See All Cars button
	
buttonAllCars.addEventListener("click", function() {
	window.location.href = "Allcarspage.html";
});

	
var buttonContact = document.getElementById("contactButton");	// Contact Us button
	
buttonContact.addEventListener("click", function() {
	window.location.href = "Contactpage.html";
});
	

var	buttonHatchback = document.getElementById("hatchbackButton");		// Hatchback button

buttonHatchback.addEventListener("click", function() {
	window.location.href = "Hatchback.html";
});

	
var buttonMinivan = document.getElementById("minivanButton");	// Minivan button
	
buttonMinivan.addEventListener("click", function() {
	window.location.href = "Minivan.html";
});
	

var buttonPickupTruck = document.getElementById("pickupTruckButton");	// Pick-up truck button
	
buttonPickupTruck.addEventListener("click", function() {
	window.location.href = "Pickuptruck.html";
});
	

var buttonSedan = document.getElementById("sedanButton");					// Sedan button
	
buttonSedan.addEventListener("click", function() {
	window.location.href = "Sedan.html";
});
	
// Closes the main function and addeventlistener 	
});
