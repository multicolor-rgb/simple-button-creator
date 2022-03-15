	<?php

 
# get correct id for plugin
$thisfile=basename(__FILE__, ".php");
 
# register plugin
register_plugin(
	$thisfile, //Plugin id
	'Simple Button Creator', 	//Plugin name
	'1.0', 		//Plugin version
	'Mateusz Skrzypczak',  //Plugin author
	'https://multicolor.stargard.pl', //author website
	'add your own button to content in ckeditor', //Plugin description
	'theme', //page type - on which admin tab to display
	'hello_world_show'  //main function (administration)
);
 

 
 
register_script('btcreator_script', $SITEURL.'plugins/simplebuttoncreator/js/script.js', '0.1', TRUE);
register_style('btcreator_style', $SITEURL.'plugins/simplebuttoncreator/css/style.css', '0.1', FALSE);


queue_script ( 'btcreator_script' , GSBACK ) ; 
queue_style( 'btcreator_style' , GSBACK ) ;
 

?>