<?php
		global $wpdb;
		$table_name = $wpdb->prefix . "layouts";
		
		//Create
		$create_sql = "CREATE TABLE IF NOT EXISTS ".$table_name." (
				`tid` INT( 50 ) NOT NULL AUTO_INCREMENT ,
				`page_id` INT( 50 ) NOT NULL ,
				`layout` TEXT( 1000 ) NOT NULL ,
				PRIMARY KEY ( `tid` )
				) ENGINE = MyISAM;";		 
		$wpdb->query($create_sql) or die(mysql_error());
	
?>
<link rel="stylesheet" href="<?php echo site_url(); ?>/wp-content/themes/GewoonHollands/controls/css/jquery-ui.css" />
<script type="text/javascript" src="<?php echo site_url(); ?>/wp-content/themes/GewoonHollands/controls/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="<?php echo site_url(); ?>/wp-content/themes/GewoonHollands/controls/js/jquery-ui.js"></script>
<script>
function checkSelection(pid){
	var url = "<?php echo site_url(); ?>/wp-content/themes/GewoonHollands/controls/ajaxCalls.php";
	var params = "action=page_layout&pid="+pid;
			
	var http = new XMLHttpRequest();
	http.open("POST", url, true);
	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	http.onreadystatechange = function() {
		//Call a function when the state changes.
		if(http.readyState == 4) {
			var msg = http.responseText;
			// open a welcome message as soon as the window loads
			if(msg=='1'){
			}else{//Works on first loading of site
				var retVal = confirm(msg);
               if( retVal == true ){
				  window.location="<?php echo site_url(); ?>/wp-admin/admin.php?page=saved_layouts&pid="+pid;
                  return true;
               }
               else{
					location.reload();
               }
			}
		}else{
			document.getElementById('status').innerHTML = 'Loading...';
		}
	}
	http.send(params);  
}
</script>
<style>
.sucsmsg{
	color:green;
	display:inline-block;
	width:100%;
	text-align:center;
	padding:5px 0;
	background:#8FE1AA;
}
#wpfooter{display:none;}
  img.drag {
      /*width: 60px;
      height: 40px;*/
      position: relative;
  }
  .drp {
      width: 100%;;
      height: 65px;
      border-top: 2px dotted #ccc;
	  border-b: 2ottompx dotted #ccc;
  }
  .right {
      float: right;
  }
  .left {
      float: left;
  }
  .clear {
      clear: both;
  }
  .drag-list img {
      min-width: 80px;
	  max-width:150px;
      vertical-align: middle;
      cursor: move;
  }
  .drag-list ul {
      margin: 0px;
      padding: 0px;
  }
  .drag-list li {
      margin-bottom: 5px;
  }
  .remove-drag-hover {
      background-color: #ED4949 !important;
  }
 .mycavas > div.drop-area:hover {
      background-color: #afd1b2;
  }
  .xicon {
      margin-top: 4px;
      position: absolute;
      margin-top: -4px;
      background: #FFF;
      font: message-box;
      text-decoration: none;
	  right:-4px;
	  border:1px solid;
	  border-radius:10px;
	  padding:2px 5px;
  }
  .xicon:hover {
      background-color: #fff;
      color: #000;
      width: 13px;
      height: 20px;
      text-align: center;
  }
  .tip {
      font-size: 12px;
      clear: both;
  }
  .mycavas div.block{padding:10px; border:1px solid #ccc;}
  .ui-state-highlight{background:#FF8B8B;}
  </style>
<script type="text/javascript" src="<?php echo get_template_directory_uri() . '/controls/js/custom.js'; ?>"></script>
<div class="welcome-panel" id="welcome-panel">
<img src="<?php echo get_template_directory_uri(); ?>/images/notfn.png" width="25px"/>
<span>Select Page from the top right drop down box. <b>Drag</b> blocks llisted in the left side of the section and <b>Drop</b> it into the <b>CANVAS</b>. Whole page content section can be managed from the canvas area which has been divided into 10 positions, so that you can add a maximum of 10 blocks into a particular page. Each position can accomodate a single block.  Drag and Drop blocks and save the layout to go manage contents for the page.<br /><br /></span>
</div>
<form name="" action="?page=saveLayout" method="post">
<div class="content-wrapper clear">
<?php if($success){ echo $success; }?>
	<div class="side-bar-block">
		<div id="drag-list" class="drag-list">
			<ul>
				<li rel="tooltip" title="Main banner block. You will have the option to set a background image and custom content section."><span id="b1" class="drag">
						<div class="block"><img src="http://placehold.it/120x80/c9112d/fff?txtsize=20&text=Block 1" width="100%" height="100%" style="display:none;" />Main banner with custom content</div>
					</span>
				</li>
				<li rel="tooltip" title="Product category block. Dynamic details in support with APIs."><span id="b2" class="drag">
						<div class="block"> <img src="http://placehold.it/120x80/E68500/fff?txtsize=20&text=Block 2" width="100%" height="100%" style="display:none;" />Product Category Block</div>
					</span>
				</li>
				<li rel="tooltip" title="coming soon.."><span id="b3" class="drag">
						<div class="block"><img src="http://placehold.it/120x80/00810C/fff?txtsize=20&text=Block 3" width="100%" height="100%"  style="display:none;"/>Unique Selling points</div>
					</span> 
				</li>
				<li rel="tooltip" title="coming soon.."><span id="b4" class="drag">
						<div class="block"><img src="http://placehold.it/120x80/0073AA/fff?txtsize=20&text=Block 4" width="100%" height="100%"  style="display:none;"/>Reviews</div>
					</span>
				</li>
				<li rel="tooltip" title="coming soon.."><span id="b5" class="drag">
						<div class="block"><img src="http://placehold.it/120x80/98CD71/fff?txtsize=20&text=Block 5" width="100%" height="100%" style="display:none;" />Double text block with single header</div>
					</span>
				</li>
				<li rel="tooltip" title="coming soon.."><span id="b6" class="drag">
						<div class="block"><img src="http://placehold.it/120x80/F39086/fff?txtsize=20&text=Block 6" width="100%" height="100%"  style="display:none;" />Single text block with header</div>
					</span>
				</li>
				<li rel="tooltip" title="coming soon.."><span id="b7" class="drag">
						<div class="block"><img src="http://placehold.it/120x80/F39086/fff?txtsize=20&text=Block 6" width="100%" height="100%"  style="display:none;" />Domain Checker</div>
					</span>
				</li>
				<li rel="tooltip" title="coming soon.."><span id="b8" class="drag">
						<div class="block"><img src="http://placehold.it/120x80/F39086/fff?txtsize=20&text=Block 6" width="100%" height="100%"  style="display:none;" />Promo section</div>
					</span>
				</li>
				<li rel="tooltip" title="coming soon.."><span id="b9" class="drag">
						<div class="block"><img src="http://placehold.it/120x80/F39086/fff?txtsize=20&text=Block 6" width="100%" height="100%"  style="display:none;" />Assembler block</div>
					</span>
				</li>
				<li rel="tooltip" title="coming soon.."><span id="b10" class="drag">
						<div class="block"><img src="http://placehold.it/120x80/F39086/fff?txtsize=20&text=Block 6" width="100%" height="100%"  style="display:none;" />Testimonial block</div>
					</span>
				</li>
				<li rel="tooltip" title="FAQ content."><span id="b11" class="drag">
						<div class="block"><img src="http://placehold.it/120x80/F39086/fff?txtsize=20&text=Block 6" width="100%" height="100%"  style="display:none;" />FAQ block</div>
					</span>
				</li>
				<li rel="tooltip" title="Content of the selected page will be displayed in this place."><span id="b12" class="drag">
						<div class="block"><img src="http://placehold.it/120x80/F39086/fff?txtsize=20&text=Block 6" width="100%" height="100%"  style="display:none;" />Wordpress Page content block</div>
					</span>
				</li>
			</ul>
		</div>
	</div>		
	
	<div class="content-area">
		<div class="select-page">
			<label>Select Page </label>
			<?php $args = array(
					'sort_order' => 'asc',
					'sort_column' => 'post_title',
					'hierarchical' => 1,
					'exclude' => '',
					'include' => '',
					'meta_key' => '',
					'meta_value' => '',
					'authors' => '',
					'child_of' => 0,
					'parent' => -1,
					'exclude_tree' => '',
					'number' => '',
					'offset' => 0,
					'post_type' => 'page',
					'post_status' => 'publish'
				); 
				$pages = get_pages($args); 
			?>
			<div class="cm-combo">
				<select name="pageLayout" id="page" class="cm-select" onchange="checkSelection(this.value);">
					<option value="">--Select Page--</option>
				<?php foreach($pages as $page){ ?>
					<option value="<?php echo $page->ID; ?>"><?php echo $page->post_title; ?></option>
				<?php } ?>
				</select>
				<?php /*?><input type="button" class="button"  name="load_existing_layout" value="Load Existing Layout" onclick="loadExistingLayout()" /><?php */?>
			</div>
		</div><!--select-page-->
		<div id="remove-drag" style="width: 100%; height: 80px; background-color: #FF8B8B;">
			<div style="color: #fff; font-size: 20px; text-align: center; padding-top: 20px;">Remove Blocks
				<div class="tip">Drop here</div>
			</div>
		</div>
		<div class="header-block">
			<h4>Header</h4>
		</div><!--header-block-->
		<div class="canvas-block">
			<label class="canvas-label">CANVAS</label>
			<div id="myCanvas" class="mycavas">
				<div class="col drp" id="droppable">	</div>
				<div class="col drp" id="droppable1"></div>
				<div class="col drp" id="droppable2"></div>
				<div class="col drp" id="droppable3">	</div>
				<div class="col drp" id="droppable4"></div>
				<div class="col drp" id="droppable5"></div>
				<div class="col drp" id="droppable6">	</div>
				<div class="col drp" id="droppable7"></div>
				<div class="col drp" id="droppable8"></div>
				<div class="col drp" id="droppable9">	</div>
			</div>
		</div>
		<div class="footer-block">
			<h4>Footer</h4>
		</div><!--footer-block-->
		<input type="submit" name="submit" class="button" value="Save  Layout & Load Settings" onclick="javascript:if(document.getElementById('page').value==''){alert('Please select page from the list');return false;}else{return true;}">
	</div><!--content-area-->
</div>
</form>