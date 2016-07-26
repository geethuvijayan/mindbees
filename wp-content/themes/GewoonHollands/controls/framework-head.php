<?php
    if($hook_suffix == 'toplevel_page_frameworkSettings'){
			wp_enqueue_script('frameworkSettings', get_template_directory_uri() . '/controls/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js', array('jquery'));
			wp_enqueue_style('frameworkSettings2', get_template_directory_uri() . '/controls/css/main.css');
			wp_enqueue_script('frameworkSettings3', get_template_directory_uri() . '/controls/js/vendor/jquery-1.11.2.min.js', array('jquery'));
			wp_enqueue_script('frameworkSettings4', get_template_directory_uri() . '/controls/js/main.js', array('jquery'));
	}
	else if($hook_suffix == 'admin_page_saveLayout') {
		//wp_enqueue_script('frameworkSettings', get_template_directory_uri() . '/controls/js/custom.js', array('jquery'));
        wp_enqueue_style('saveLayout', get_template_directory_uri() . '/controls/css/main.css');
		wp_enqueue_style('saveLayout2', get_template_directory_uri() . '/controls/css/bootstrap.min.css');
		wp_enqueue_style('saveLayout3', get_template_directory_uri() . '/controls/css/bootstrap-theme.min.css');
		wp_enqueue_style('saveLayout4', get_template_directory_uri() . '/controls/css/jquery.filer.css');
		wp_enqueue_script('saveLayout5', get_template_directory_uri() . '/controls/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js', array('jquery'));
		wp_enqueue_script('saveLayout6', get_template_directory_uri() . '/controls/js/vendor/jquery-1.11.2.min.js', array('jquery'));
		wp_enqueue_script('saveLayout7', get_template_directory_uri() . '/controls/js/vendor/bootstrap.min.js', array('jquery'));
		wp_enqueue_script('saveLayout8', get_template_directory_uri() . '/controls/js/jquery.filer.js', array('jquery'));
		wp_enqueue_script('saveLayout9', get_template_directory_uri() . '/controls/js/main.js', array('jquery'));
        ?>
        <script type="text/javascript">
        //<![CDATA[
        var template_directory = '<?php echo get_template_directory_uri() ?>';
        //]]>
        </script>
        <?php
    }
?>