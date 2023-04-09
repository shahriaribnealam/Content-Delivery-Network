/*
Project Name: Remove I
Description: This JavaScript code helps you to remove "?i=" from your website URL.
Author: Shahriar Ibne Alam
Author URI: https://www.shahriaribnealam.com
Version: 1.0
Release Date: December 2020
*/

var sia= new URL(window.location.href);
sia.searchParams.delete("i");
history.replaceState(null, null, sia);
