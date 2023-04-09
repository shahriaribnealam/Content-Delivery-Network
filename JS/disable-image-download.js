/*
Project Name: Disable Image Download
Description: This JavaScript code helps you to disable image download from your website.
Author: Shahriar Ibne Alam
Author URI: https://www.shahriaribnealam.com
Version: 1.0
Release Date: April 2023
*/

function nocontext(e) {var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName;if (clickedTag == "IMG") {alert(alertMsg);return false;}}var alertMsg = "The image download has been disabled!";document.oncontextmenu = nocontext;
