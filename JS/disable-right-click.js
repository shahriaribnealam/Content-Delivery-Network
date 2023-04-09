/*
Project Name: Disable Right Click
Description: This JavaScript code helps you to disable right click from your website.
Author: Shahriar Ibne Alam
Author URI: https://www.shahriaribnealam.com
Version: 1.0
Release Date: April 2023
*/

document.addEventListener("contextmenu", function(event){
event.preventDefault();
alert('Right Click is Disabled!');    
}, false);
