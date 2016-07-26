<?php
global $wpdb,$post;
$table_name = $wpdb->prefix . "layouts";
$table_Data = $wpdb->prefix . "layoutData";
extract($_GET);

$sql = "SELECT l.page_id, l.layout, ld.block, ld.data FROM ".$table_name." l left join ".$table_Data." ld on (l.tid=ld.layout_id) where ld.block != ''";
$result = $wpdb->get_results($sql);
	
?>
<style>
.tbllist{width:75%; margin:0 auto; text-align:center;}
.tbllist tr td{border-bottom:1px solid; padding:25px; font-size:14px;}
.content-area .listing{margin:0 auto; margin-top:20px;}
</style>
<div class="content-wrapper clear">
	<div class="content-area">
	<?php if($pid){ //edit mode?>
		<?php underConstruction(); ?>
		<?php /*?><div class="select-page">
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
		</div><!--footer-block--><?php */?>
	<?php }else{ //llisting mose ?>
		<?php 
		if($result){
		echo '<div class="listing">';
		echo '<table bgcolor="#fff" cellpadding="10" class="tbllist">';
		echo '<tr>';
		echo '<td><h2>SL No</h2></td>';
		echo '<td><h2>Page</h2></td>';
		echo '<td><h2>Number of blocks included</h2></td>';
		echo '<td>&nbsp;</td>';
		echo '</tr>';
		$sl = 1;
		foreach($result as $row){
			$layout 	= $row->layout;
			$block 	= $row->block;
			$blockCount = unserialize($block);  
			$blockCount = count( $blockCount );
			$data 		= $row->data;
			echo '<tr>';
			echo '<td>'.$sl.'</td>';
			echo '<td>'.get_the_title($row->page_id).'</td>';
			echo '<td>'.$blockCount.'</td>';
			echo '<td>Edit || Delete</td>';
			echo '</tr>';
			$sl++;
		}
		echo '</table>';
		echo '</div>';
		}
		?>
	<?php } ?>
	</div><!--content-area-->
</div>