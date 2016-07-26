<?php
 require_once('../../../../wp-blog-header.php');
require_once( ABSPATH . 'wp-admin/includes/upgrade.php' ); 
require_once(ABSPATH .'wp-load.php');
 global $wpdb, $post;
 extract($_POST);
 //echo 'sdsds';
	$table_name = $wpdb->prefix . "layouts";
	$select_sq0 = "SELECT * from ".$table_name." where page_id='".$pid."'";	
		$result0 = $wpdb->get_results($select_sq0);

		$cnt = count($result0);
		
		if($cnt>0){
			echo "Already exists an entry for this page in Layout table. Do you want to modify the existing layout?";
		}else{
			echo 1;//continue
		}	