<?php 
require_once( ABSPATH . 'wp-admin/includes/upgrade.php' ); 
require_once(ABSPATH .'wp-load.php');
require_once('block_structure.php');
global $wpdb, $post;
function framework_admin_action(){
    add_menu_page(
        __('Framework Settings'),// the page title
        __('Framework Settings'),//menu title
        'edit_themes',//capability 
        'frameworkSettings',//menu slug/handle this is what you need!!!
        'framework_settings',//callback function
        '',//icon_url,
        '11'//position
    );
    add_submenu_page(
        '',
        'Save Layout', //page title
        'save_layout', //menu title
        'edit_themes', //capability,
        'saveLayout',//menu slug
        'saveLayout' //callback function
    );
	add_submenu_page(
        'frameworkSettings',
        'Layouts', //page title
        'layouts', //menu title
        'edit_themes', //capability,
        'saved_layouts',//menu slug
        'savedLayouts' //callback function
    );
}
add_action('admin_menu', 'framework_admin_action');
//Cpanel
add_menu_page('Theme Settings', 'Theme Settings', 'edit_themes', "themeSettings", "themeSettings",'',12);
//theme settings - general settings
function themeSettings(){
	underConstruction();
}
//Saved layouts
function savedLayouts(){
	require_once('layoutList.php');
}
function saveLayout(){
	require_once('saveLayout.php');
}
function frameworkSettings_enqueue($hook_suffix) {
	require_once('framework-head.php');
}
add_action('admin_enqueue_scripts', 'frameworkSettings_enqueue');
function framework_settings(){
	require_once('framework-settings.php');
}
function getRecentID(){
	global $wpdb, $post;
	$table_name = $wpdb->prefix . "layouts";
	$select_sq0 = "SELECT tid from ".$table_name. " order by tid DESC limit 0,1";		 //echo $select_sq0;
	$result0 = $wpdb->get_results($select_sq0);
	//print_r($result0);
	foreach($result0 as $row){
		$recentId = $row->tid;
	}
	return $recentId;
}
function getBlockData($block,$pos){
	extract($_POST);
	extract($_FILES);
	$blockData = array();
	switch($block){
		case 1: /* Main banner with custom content
		fields - bannerContent||files*/
		$blockData['bannerContent']	= $bannerContent[$pos];
		$blockData['files']						= $files[$pos];
		if(!is_serialized($blockData)){ 
			$Data = maybe_serialize($blockData); 
		}
		return $Data;
	}
}
function getPageID($lid){
	global $wpdb, $post;
	$table_name = $wpdb->prefix . "layouts";
	$select_sq0 = "SELECT page_id from ".$table_name. " where tid = '".$lid."'";		 //echo $select_sq0;
	$result0 = $wpdb->get_results($select_sq0);
	//print_r($result0);
	foreach($result0 as $row){
		$pageid = $row->page_id;
	}
	return $pageid;
}
function underConstruction(){
	echo '<div style=" background:#fff; margin:0 auto; width:75%;">';
	echo '<img src="'.get_template_directory_uri().'/images/Website-Under-Construction.jpg" width="100%" />';
	echo '</div>';
}
?>