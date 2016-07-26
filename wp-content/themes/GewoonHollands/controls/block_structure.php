<?php
function getBlockStructure($pos,$block){
	switch($block){
		case "b1": getBlock1($pos);
							break;

		case "b2": getBlock2($pos);
							break;

		case "b3": getBlock3($pos);
							break;

		case "b4": getBlock4($pos);
							break;

		case "b5": getBlock5($pos);
							break;

		case "b6": getBlock6($pos);
							break;

		case "b7": getBlock7($pos);
							break;

		case "b8": getBlock8($pos);
							break;

		case "b9": getBlock9($pos);
							break;

		case "b10": getBlock10($pos);
							break;

		case "b11": getBlock11($pos);
							break;
							
	}
}
function getBlock1($pos){
?>
<input type="hidden" name="blockPos[]" value="<?php echo $pos; ?>"  />
<input type="hidden" name="blockID[<?php echo $pos; ?>]" value="1"  />
<div class="cm-block">
<div class="head">
		<h3><b>Position: <?php echo $pos+1; ?></b> &nbsp;&nbsp;Main banner Block with custom content</h3>
	</div>
	<div class="form-block">
		<div class="row">
			<div class="col-sm-6">
				<div class="input-group">
					<label>Upload Background Image</label>	
					<div class="file-upload">
							<input type="file" name="files[<?php echo $pos; ?>]" class="filer_input" multiple="" >
					</div>
					<?php /*?><input type="submit" name="m" class="button upload" value="Upload"><?php */?>
					
				</div><!--input-group-->	
			</div>
			<div class="col-sm-6">
				<div class="input-group">
					<label>Banner Content</label>	
					<textarea name="bannerContent[<?php echo $pos; ?>]" class="form-control input-box text-area"></textarea> 
				</div><!--input-group-->
			</div>
		</div>	
	</div><!--form-block-->
</div>
<?php
}
function getBlock2($pos){
?>
<input type="hidden" name="blockPos[]" value="<?php echo $pos; ?>"  />
<input type="hidden" name="blockID[<?php echo $pos; ?>]" value="2"  />
<div class="cm-block">
<div class="head">
		<h3><b>Position: <?php echo $pos+1; ?></b> &nbsp;&nbsp;Product Category Block</h3>
	</div>
	<div class="form-block">
		<div class="row">
			<div class="col-sm-12">
				<div class="input-group">
					<label>API link</label>	
					<input name="productCategoryAPI[<?php echo $pos; ?>]" class="form-control input-box" value="" />
				</div><!--input-group-->
			</div>
		</div>	
	</div><!--form-block-->
</div>
<?php
}
function getBlock3($pos){
?>
<input type="hidden" name="blockPos[]" value="<?php echo $pos; ?>"  />
<input type="hidden" name="blockID[<?php echo $pos; ?>]" value="3"  />
<div class="cm-block">
<div class="head">
		<h3><b>Position: <?php echo $pos+1; ?></b> &nbsp;&nbsp;Unique Selling points</h3>
	</div>
	<div class="form-block">
		<div class="row">
			<div class="col-sm-6">
				<div class="input-group">
					<label>Upload Background Image</label>	
					<div class="file-upload">
							<input type="file" name="files[<?php echo $pos; ?>]" class="filer_input" multiple="" >
					</div>
					<?php /*?><input type="submit" name="m" class="button upload" value="Upload"><?php */?>
					
				</div><!--input-group-->	
			</div>
			<div class="col-sm-6">
				<div class="input-group">
					<label>Block Content</label>	
					<?php the_editor('', $id = 'test_head['.$pos.']', $prev_id = 'title', $media_buttons = true, $tab_index = 2); ?>
				</div><!--input-group-->
			</div>
		</div>	
	</div><!--form-block-->
</div>
<?php
}
function getBlock4($pos){

}
function getBlock5($pos){

}
function getBlock6($pos){

}
function getBlock7($pos){

}
function getBlock8($pos){

}
function getBlock9($pos){

}
function getBlock10($pos){

}
function getBlock11($pos){

}
