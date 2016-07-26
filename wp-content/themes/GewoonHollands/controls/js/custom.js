
  var f = jQuery.noConflict();
  f(document).ready(function () {
  var x = null;
//Make element draggable
f(".drag").draggable({//alert('hi');
    helper: 'clone',
    cursor: 'move',
    tolerance: 'fit',
    revert: true,
	drag: function(){
            var offset = f(this).offset();
            var xPos = offset.left;
            var yPos = offset.top;
			//alert(yPos);
            //$('#posX').text('x: ' + xPos);
            //$('#posY').text('y: ' + yPos);
        }
});


f("#droppable").droppable({
    accept: '*',//'.drag',
    activeClass: "drop-area",
    drop: function (e, ui) { 
        if (f(ui.draggable)[0].id != "") {


            x = ui.helper.clone();
            ui.helper.remove();
            x.draggable({
                helper: 'original',
                cursor: 'move',
                //containment: '#droppable',
                tolerance: 'fit',
                drop: function (event, ui) {
                    f(ui.draggable).remove();
                }
            });

            x.resizable({
                maxHeight: f('#droppable').height(),
                maxWidth: f('#droppable').width()
            });
            x.addClass('remove');
            var el = f("<span><a href='Javascript:void(0)' class=\"xicon delete\" title=\"Remove\">X</a></span>");
            //f(el).insertAfter(f(x.find('img')));
			
			var v = f(ui.draggable)[0].id;//alert(v );
			var val = f("<input type='hidden' value='"+v+"' name='droppable[0][]' />");
            f(val).insertAfter(f(x.find('img')));
			
            x.appendTo('#droppable');
            f('.delete').on('click', function () {
                f(this).parent().parent('span').remove();
            });
            f('.delete').parent().parent('span').dblclick(function () {
                f(this).remove();
            });
        }
    },
	/*out: function (event, ui) {
			  //var v = f(ui.draggable)[0].id;alert(v );
			    f(this).find('input').remove();
               }*/  
});
//////////////////
f("#droppable1").droppable({
    accept: '*',//'.drag',
    activeClass: "drop-area",
    drop: function (e, ui) {
        if (f(ui.draggable)[0].id != "") {


            x = ui.helper.clone();
            ui.helper.remove();
            x.draggable({
                helper: 'original',
                cursor: 'move',
                //containment: '#droppable1',
                tolerance: 'fit',
                drop: function (event, ui) {
                    f(ui.draggable).remove();
                }
            });

            x.resizable({
                maxHeight: f('#droppable1').height(),
                maxWidth: f('#droppable1').width()
            });
            x.addClass('remove');
            var el = f("<span><a href='Javascript:void(0)' class=\"xicon delete\" title=\"Remove\">X</a></span>");
            //f(el).insertAfter(f(x.find('img')));
			
			var v = f(ui.draggable)[0].id;//alert(v );
			var val = f("<input type='hidden' value='"+v+"' name='droppable[1][]' />");
            f(val).insertAfter(f(x.find('img')));
			
            x.appendTo('#droppable1');
           f('.delete').on('click', function () {
                f(this).parent().parent('span').remove();
            });
            f('.delete').parent().parent('span').dblclick(function () {
                f(this).remove();
            });
        }
    },
	/*out: function (event, ui) {
			  var v = f(ui.draggable)[0].id;alert(v );
			    f(this).find('input').remove();
               }*/  
});
////////////////
f("#droppable2").droppable({
    accept: '*',//'.drag',
    activeClass: "drop-area",
    drop: function (e, ui) {
        if (f(ui.draggable)[0].id != "") {


            x = ui.helper.clone();
            ui.helper.remove();
            x.draggable({
                helper: 'original',
                cursor: 'move',
                //containment: '#droppable2',
                tolerance: 'fit',
                drop: function (event, ui) {
                    f(ui.draggable).remove();
                }
            });

            x.resizable({
                maxHeight: f('#droppable2').height(),
                maxWidth: f('#droppable2').width()
            });
            x.addClass('remove');
            var el = f("<span><a href='Javascript:void(0)' class=\"xicon delete\" title=\"Remove\">X</a></span>");
            //f(el).insertAfter(f(x.find('img')));
			
			var v = f(ui.draggable)[0].id;//alert(v );
			var val = f("<input type='hidden' value='"+v+"' name='droppable[2][]' />");
            f(val).insertAfter(f(x.find('img')));
			
            x.appendTo('#droppable2');
            f('.delete').on('click', function () {
                f(this).parent().parent('span').remove();
            });
            f('.delete').parent().parent('span').dblclick(function () {
                f(this).remove();
            });
        }
    },
	/*out: function (event, ui) {
			  var v = f(ui.draggable)[0].id;alert(v );
			    f(this).find('input').remove();
               }  */
});
////////////////
f("#droppable3").droppable({
    accept: '*',//'.drag',
    activeClass: "drop-area",
    drop: function (e, ui) {
        if (f(ui.draggable)[0].id != "") {


            x = ui.helper.clone();
            ui.helper.remove();
            x.draggable({
                helper: 'original',
                cursor: 'move',
                //containment: '#droppable2',
                tolerance: 'fit',
                drop: function (event, ui) {
                    f(ui.draggable).remove();
                }
            });

            x.resizable({
                maxHeight: f('#droppable3').height(),
                maxWidth: f('#droppable3').width()
            });
            x.addClass('remove');
            var el = f("<span><a href='Javascript:void(0)' class=\"xicon delete\" title=\"Remove\">X</a></span>");
            //f(el).insertAfter(f(x.find('img')));
			
			var v = f(ui.draggable)[0].id;//alert(v );
			var val = f("<input type='hidden' value='"+v+"' name='droppable[3][]' />");
            f(val).insertAfter(f(x.find('img')));
			
            x.appendTo('#droppable3');
            f('.delete').on('click', function () {
                f(this).parent().parent('span').remove();
            });
            f('.delete').parent().parent('span').dblclick(function () {
                f(this).remove();
            });
        }
    },
	/*out: function (event, ui) {
			  var v = f(ui.draggable)[0].id;alert(v );
			    f(this).find('input').remove();
               }  */
});
////////////////
f("#droppable4").droppable({
    accept: '*',//'.drag',
    activeClass: "drop-area",
    drop: function (e, ui) {
        if (f(ui.draggable)[0].id != "") {


            x = ui.helper.clone();
            ui.helper.remove();
            x.draggable({
                helper: 'original',
                cursor: 'move',
                //containment: '#droppable4',
                tolerance: 'fit',
                drop: function (event, ui) {
                    f(ui.draggable).remove();
                }
            });

            x.resizable({
                maxHeight: f('#droppable4').height(),
                maxWidth: f('#droppable4').width()
            });
            x.addClass('remove');
            var el = f("<span><a href='Javascript:void(0)' class=\"xicon delete\" title=\"Remove\">X</a></span>");
            //f(el).insertAfter(f(x.find('img')));
			
			var v = f(ui.draggable)[0].id;//alert(v );
			var val = f("<input type='hidden' value='"+v+"' name='droppable[4][]' />");
            f(val).insertAfter(f(x.find('img')));
			
            x.appendTo('#droppable4');
            f('.delete').on('click', function () {
                f(this).parent().parent('span').remove();
            });
            f('.delete').parent().parent('span').dblclick(function () {
                f(this).remove();
            });
        }
    },
	/*out: function (event, ui) {
			  var v = f(ui.draggable)[0].id;alert(v );
			    f(this).find('input').remove();
               }  */
});
////////////////
f("#droppable5").droppable({
    accept: '*',//'.drag',
    activeClass: "drop-area",
    drop: function (e, ui) {
        if (f(ui.draggable)[0].id != "") {


            x = ui.helper.clone();
            ui.helper.remove();
            x.draggable({
                helper: 'original',
                cursor: 'move',
                //containment: '#droppable5',
                tolerance: 'fit',
                drop: function (event, ui) {
                    f(ui.draggable).remove();
                }
            });

            x.resizable({
                maxHeight: f('#droppable5').height(),
                maxWidth: f('#droppable5').width()
            });
            x.addClass('remove');
            var el = f("<span><a href='Javascript:void(0)' class=\"xicon delete\" title=\"Remove\">X</a></span>");
            //f(el).insertAfter(f(x.find('img')));
			
			var v = f(ui.draggable)[0].id;//alert(v );
			var val = f("<input type='hidden' value='"+v+"' name='droppable[5][]' />");
            f(val).insertAfter(f(x.find('img')));
			
            x.appendTo('#droppable5');
            f('.delete').on('click', function () {
                f(this).parent().parent('span').remove();
            });
            f('.delete').parent().parent('span').dblclick(function () {
                f(this).remove();
            });
        }
    },
	/*out: function (event, ui) {
			  var v = f(ui.draggable)[0].id;alert(v );
			    f(this).find('input').remove();
               }  */
});
////////////////
f("#droppable6").droppable({
    accept: '*',//'.drag',
    activeClass: "drop-area",
    drop: function (e, ui) {
        if (f(ui.draggable)[0].id != "") {


            x = ui.helper.clone();
            ui.helper.remove();
            x.draggable({
                helper: 'original',
                cursor: 'move',
                //containment: '#droppable6',
                tolerance: 'fit',
                drop: function (event, ui) {
                    f(ui.draggable).remove();
                }
            });

            x.resizable({
                maxHeight: f('#droppable6').height(),
                maxWidth: f('#droppable6').width()
            });
            x.addClass('remove');
            var el = f("<span><a href='Javascript:void(0)' class=\"xicon delete\" title=\"Remove\">X</a></span>");
            //f(el).insertAfter(f(x.find('img')));
			
			var v = f(ui.draggable)[0].id;//alert(v );
			var val = f("<input type='hidden' value='"+v+"' name='droppable[6][]' />");
            f(val).insertAfter(f(x.find('img')));
			
            x.appendTo('#droppable6');
            f('.delete').on('click', function () {
                f(this).parent().parent('span').remove();
            });
            f('.delete').parent().parent('span').dblclick(function () {
                f(this).remove();
            });
        }
    },
	/*out: function (event, ui) {
			  var v = f(ui.draggable)[0].id;alert(v );
			    f(this).find('input').remove();
               }  */
});
////////////////
f("#droppable7").droppable({
    accept: '*',//'.drag',
    activeClass: "drop-area",
    drop: function (e, ui) {
        if (f(ui.draggable)[0].id != "") {


            x = ui.helper.clone();
            ui.helper.remove();
            x.draggable({
                helper: 'original',
                cursor: 'move',
                //containment: '#droppable6',
                tolerance: 'fit',
                drop: function (event, ui) {
                    f(ui.draggable).remove();
                }
            });

            x.resizable({
                maxHeight: f('#droppable7').height(),
                maxWidth: f('#droppable7').width()
            });
            x.addClass('remove');
            var el = f("<span><a href='Javascript:void(0)' class=\"xicon delete\" title=\"Remove\">X</a></span>");
            //f(el).insertAfter(f(x.find('img')));
			
			var v = f(ui.draggable)[0].id;//alert(v );
			var val = f("<input type='hidden' value='"+v+"' name='droppable[7][]' />");
            f(val).insertAfter(f(x.find('img')));
			
            x.appendTo('#droppable7');
            f('.delete').on('click', function () {
                f(this).parent().parent('span').remove();
            });
            f('.delete').parent().parent('span').dblclick(function () {
                f(this).remove();
            });
        }
    },
	/*out: function (event, ui) {
			  var v = f(ui.draggable)[0].id;alert(v );
			    f(this).find('input').remove();
               }  */
});
////////////////
f("#droppable8").droppable({
    accept: '*',//'.drag',
    activeClass: "drop-area",
    drop: function (e, ui) {
        if (f(ui.draggable)[0].id != "") {


            x = ui.helper.clone();
            ui.helper.remove();
            x.draggable({
                helper: 'original',
                cursor: 'move',
                //containment: '#droppable6',
                tolerance: 'fit',
                drop: function (event, ui) {
                    f(ui.draggable).remove();
                }
            });

            x.resizable({
                maxHeight: f('#droppable8').height(),
                maxWidth: f('#droppable8').width()
            });
            x.addClass('remove');
            var el = f("<span><a href='Javascript:void(0)' class=\"xicon delete\" title=\"Remove\">X</a></span>");
            //f(el).insertAfter(f(x.find('img')));
			
			var v = f(ui.draggable)[0].id;//alert(v );
			var val = f("<input type='hidden' value='"+v+"' name='droppable[8][]' />");
            f(val).insertAfter(f(x.find('img')));
			
            x.appendTo('#droppable8');
            f('.delete').on('click', function () {
                f(this).parent().parent('span').remove();
            });
            f('.delete').parent().parent('span').dblclick(function () {
                f(this).remove();
            });
        }
    },
	/*out: function (event, ui) {
			  var v = f(ui.draggable)[0].id;alert(v );
			    f(this).find('input').remove();
               }  */
});
////////////////
f("#droppable9").droppable({
    accept: '*',//'.drag',
    activeClass: "drop-area",
    drop: function (e, ui) {
        if (f(ui.draggable)[0].id != "") {


            x = ui.helper.clone();
            ui.helper.remove();
            x.draggable({
                helper: 'original',
                cursor: 'move',
                //containment: '#droppable6',
                tolerance: 'fit',
                drop: function (event, ui) {
                    f(ui.draggable).remove();
                }
            });

            x.resizable({
                maxHeight: f('#droppable9').height(),
                maxWidth: f('#droppable9').width()
            });
            x.addClass('remove');
            var el = f("<span><a href='Javascript:void(0)' class=\"xicon delete\" title=\"Remove\">X</a></span>");
            //f(el).insertAfter(f(x.find('img')));
			
			var v = f(ui.draggable)[0].id;//alert(v );
			var val = f("<input type='hidden' value='"+v+"' name='droppable[9][]' />");
            f(val).insertAfter(f(x.find('img')));
			
            x.appendTo('#droppable9');
            f('.delete').on('click', function () {
                f(this).parent().parent('span').remove();
            });
            f('.delete').parent().parent('span').dblclick(function () {
                f(this).remove();
            });
        }
    },
	/*out: function (event, ui) {
			  var v = f(ui.draggable)[0].id;alert(v );
			    f(this).find('input').remove();
               }  */
});
///
f("#remove-drag").droppable({
    drop: function (event, ui) {
        f(ui.draggable).remove();
    },
    hoverClass: "remove-drag-hover",
    accept: '.remove'
});

});
///////
function loadExistingLayout(){
	var pageID = document.getElementById('page').value;
	//var pageName ="<?php echo get_the_title('".<script type="text/javascript">pageID</script>."')?>";
	//alert(pageName);
}
