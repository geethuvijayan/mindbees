<?php
		global $wpdb;
		$table_name = $wpdb->prefix . "layouts";
		$table_Data = $wpdb->prefix . "layoutData";
		
		//Create
		$create_sql = "CREATE TABLE IF NOT EXISTS ".$table_Data." (
				`id` INT( 50 ) NOT NULL AUTO_INCREMENT ,
				`layout_id` INT( 50 ) NOT NULL ,
				`position` VARCHAR( 50 ) NOT NULL ,
				`block` VARCHAR( 50 ) NOT NULL ,
				`data` TEXT( 1000 ) NOT NULL ,
				PRIMARY KEY ( `id` ),
				FOREIGN KEY (layout_id) REFERENCES ".$table_name."(tid)
				) ENGINE = MyISAM;";		 
		
		$wpdb->query($create_sql) or die(mysql_error());
		
		$layoutBlocks = array();
		
		if((isset($_POST['submit']) && $_POST['pageLayout'] != '')||isset($_GET['pid'])){
			if(isset($_GET['pid'])){
				$pid = $_GET['pid'];
				$select_sq0 = "SELECT layout from ".$table_name. " where tid ='".$pid."';";		 
				$result0 = $wpdb->get_results($select_sq0);
				
				foreach($result0 as $row0){
					$server_type = $row0->layout;
				}
				$f2 = unserialize($server_type);  
				$f3count = count( $f2 );
				foreach($f2 as $postion=>$blocks){
					$layout[$postion]=$blocks;
					foreach($blocks as $block){
						$layoutBlocks[] = $block;
					}
				}
				//print_r($layoutBlocks);
				$layoutID = $pid;
			}else{
				extract($_POST);
				
				$Layout['tid'] 				= NULL;
				$Layout['page_id'] 				= $pageLayout;
				if(!is_serialized($droppable)){ 
						$layout = maybe_serialize($droppable); 
					}
				$Layout['layout'] 				= $layout;
				
				if($wpdb->insert( $table_name, $Layout)){
					$success = '<span class="sucsmsg">Success!!</span>';
					
					$f2 = unserialize($layout);  
					$f3count = count( $f2 );
					foreach($f2 as $postion=>$blocks){
						foreach($blocks as $block){
							$layoutBlocks[] = $block;
						}
					}
					
				}
				//get latest Id from the table
				$layoutID = getRecentID();
			}
		}
		if(isset($_GET['pid'])){
			$layoutID = $_GET['pid'];
		}else{//echo 'should be in';
			$layoutID = getRecentID();//echo $layoutID;
		}
		$pageID = getPageID($layoutID);
		
			if(isset($_POST['savePage'])){
				//echo '<pre>'; print_r($_REQUEST);echo '</pre>';
				//echo '<pre>'; print_r($_FILES);echo '</pre>';
				extract($_POST);
				extract($_FILES);
				
				foreach($blockPos as $pos){
					$block = $blockID[$pos];
					$dataSerialized = getBlockData($blockID[$pos],$pos);
					$Data = array();
					$Data['id'] = NULL;
					$Data['layout_id'] = $layoutID;
					$Data['position'] = $pos;
					$Data['block'] = $block;
					$Data['data'] = $dataSerialized;
					
					if($wpdb->insert( $table_Data, $Data)){
						$finalsuccess = '<span class="sucsmsg">Success!!</span>';
					}
				}
			}?>
		<div class="content-wrapper clear">
		<?php if($success){ echo $success; }?>
		<?php if($finalsuccess){echo $finalsuccess; }else{ ?>
			<div class="content-area">
			<form method="post" enctype="multipart/form-data" action="?page=saveLayout">
			<input type="hidden" name="layoutID" value="<?php echo $layoutID; ?>"  />
			
			<div style="background:#FBAFAF; width:100%; padding:10px;">
			<h4>Setting content for the Page: <b>"<?php echo get_the_title($pageID); ?>"</b>&nbsp;&nbsp; with Page ID:  <b><?php echo $pageID; ?></b></h4>
			</div>
				<div class="header-block">
					<h4>Header</h4>
				</div><!--header-block-->
				<div class="inner-block">
					<?php 
					/*echo '<pre>';
					print_r($layoutBlocks);
					echo '</pre>';*/
					foreach($layoutBlocks as $pos=>$lb){ 
						getBlockStructure($pos,$lb);
					}
					?>
				</div>
				<div class="footer-block">
					<h4>Footer</h4>
				</div><!--footer-block-->
				<input type="submit" name="savePage" class="button" value="Save  Page">
				</form>
			</div><!--content-area-->
		<?php } ?>
	</div><!--content-wrapper-->
			<?php
