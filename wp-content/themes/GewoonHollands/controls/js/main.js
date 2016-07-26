	
	// uniform js
	
	!function(e,t,n){"use strict";function s(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function a(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function r(e,t,n){a(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function i(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function l(e,t,n){n?e.addClass(t):e.removeClass(t)}function u(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),l(e,n.checkedClass,a)}function o(e,t,n){l(e,n.disabledClass,t.is(":disabled"))}function c(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function d(e,n,a){var r,i,l;return a||(a={}),a=t.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),r=t("<div />"),i=t("<span />"),n.autoHide&&e.is(":hidden")&&"none"===e.css("display")&&r.hide(),a.divClass&&r.addClass(a.divClass),n.wrapperClass&&r.addClass(n.wrapperClass),a.spanClass&&i.addClass(a.spanClass),l=s(e,"id"),n.useID&&l&&s(r,"id",n.idPrefix+"-"+l),a.spanHtml&&i.html(a.spanHtml),r=c(e,r,a.divWrap),i=c(e,i,a.spanWrap),o(r,e,n),{div:r,span:i}}function f(e,n){var s;return n.wrapperClass?(s=t("<span />").addClass(n.wrapperClass),s=c(e,s,"wrap")):null}function p(){var n,s,a,r;return r="rgb(120,2,153)",s=t('<div style="width:0;height:0;color:'+r+'">'),t("body").append(s),a=s.get(0),n=e.getComputedStyle?e.getComputedStyle(a,"").color:(a.currentStyle||a.style||{}).color,s.remove(),n.replace(/ /g,"")!==r}function m(e){return e?t("<span />").text(e).html():""}function v(){return navigator.cpuClass&&!navigator.product}function h(){return void 0!==e.XMLHttpRequest?!0:!1}function C(e){var t;return e[0].multiple?!0:(t=s(e,"size"),!t||1>=t?!1:!0)}function b(){return!1}function y(e,t){var n="none";a(e,t,{"selectstart dragstart mousedown":b}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function w(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function g(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function k(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),g(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function H(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var x=!0,A=!1,W=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(t,n){var l,u,c,f,p;return u=n.submitDefaultHtml,t.is(":reset")&&(u=n.resetDefaultHtml),f=t.is("a, button")?function(){return t.html()||u}:function(){return m(s(t,"value"))||u},c=d(t,n,{divClass:n.buttonClass,spanHtml:f()}),l=c.div,r(t,l,n),p=!1,a(l,n,{"click touchend":function(){var n,a,r,i;p||t.is(":disabled")||(p=!0,t[0].dispatchEvent?(n=document.createEvent("MouseEvents"),n.initEvent("click",!0,!0),a=t[0].dispatchEvent(n),t.is("a")&&a&&(r=s(t,"target"),i=s(t,"href"),r&&"_self"!==r?e.open(i,r):document.location.href=i)):t.click(),p=!1)}}),y(l,n),{remove:function(){return l.after(t),l.remove(),t.unbind(n.eventNamespace),t},update:function(){i(l,n),o(l,t,n),t.detach(),c.span.html(f()).append(t)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,s,l;return n=d(e,t,{divClass:t.checkboxClass}),s=n.div,l=n.span,r(e,s,t),a(e,t,{"click touchend":function(){u(l,e,t)}}),u(l,e,t),{remove:H(e,t),update:function(){i(s,t),l.removeClass(t.checkedClass),u(l,e,t),o(s,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(e,n){function l(){w(e,p,n)}var u,f,p,m;return u=d(e,n,{divClass:n.fileClass,spanClass:n.fileButtonClass,spanHtml:n.fileButtonHtml,spanWrap:"after"}),f=u.div,m=u.span,p=t("<span />").html(n.fileDefaultHtml),p.addClass(n.filenameClass),p=c(e,p,"after"),s(e,"size")||s(e,"size",f.width()/10),r(e,f,n),l(),v()?a(e,n,{click:function(){e.trigger("change"),setTimeout(l,0)}}):a(e,n,{change:l}),y(p,n),y(m,n),{remove:function(){return p.remove(),m.remove(),e.unwrap().unbind(n.eventNamespace)},update:function(){i(f,n),w(e,p,n),o(f,e,n)}}}},{match:function(e){if(e.is("input")){var t=(" "+s(e,"type")+" ").toLowerCase(),n=" color date datetime datetime-local email month number password search tel text time url week ";return n.indexOf(t)>=0}return!1},apply:function(e,t){var n,a;return n=s(e,"type"),e.addClass(t.inputClass),a=f(e,t),r(e,e,t),t.inputAddTypeAsClass&&e.addClass(n),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(n),a&&e.unwrap()},update:b}}},{match:function(e){return e.is(":radio")},apply:function(e,n){var l,c,f;return l=d(e,n,{divClass:n.radioClass}),c=l.div,f=l.span,r(e,c,n),a(e,n,{"click touchend":function(){t.uniform.update(t(':radio[name="'+s(e,"name")+'"]'))}}),u(f,e,n),{remove:H(e,n),update:function(){i(c,n),u(f,e,n),o(c,e,n)}}}},{match:function(e){return e.is("select")&&!C(e)?!0:!1},apply:function(e,n){var s,l,u,c;return n.selectAutoWidth&&k(e,function(){c=e.width()}),s=d(e,n,{divClass:n.selectClass,spanHtml:(e.find(":selected:first")||e.find("option:first")).html(),spanWrap:"before"}),l=s.div,u=s.span,n.selectAutoWidth?k(e,function(){g(t([u[0],l[0]]),{display:"block"},function(){var e;e=u.outerWidth()-u.width(),l.width(c+e),u.width(c)})}):l.addClass("fixedWidth"),r(e,l,n),a(e,n,{change:function(){u.html(e.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var t=e.find(":selected").html();u.html()!==t&&e.trigger("change")},keyup:function(){u.html(e.find(":selected").html())}}),y(u,n),{remove:function(){return u.remove(),e.unwrap().unbind(n.eventNamespace),e},update:function(){n.selectAutoWidth?(t.uniform.restore(e),e.uniform(n)):(i(l,n),u.html(e.find(":selected").html()),o(l,e,n))}}}},{match:function(e){return e.is("select")&&C(e)?!0:!1},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=f(e,t),r(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:b}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=f(e,t),r(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:b}}}];v()&&!h()&&(x=!1),t.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},t.fn.uniform=function(n){var s=this;return n=t.extend({},t.uniform.defaults,n),A||(A=!0,p()&&(x=!1)),x?(n.resetSelector&&t(n.resetSelector).mouseup(function(){e.setTimeout(function(){t.uniform.update(s)},10)}),this.each(function(){var e,s,a,r=t(this);if(r.data("uniformed"))return t.uniform.update(r),void 0;for(e=0;e<W.length;e+=1)if(s=W[e],s.match(r,n))return a=s.apply(r,n),r.data("uniformed",a),t.uniform.elements.push(r.get(0)),void 0})):this},t.uniform.restore=t.fn.uniform.restore=function(e){e===n&&(e=t.uniform.elements),t(e).each(function(){var e,n,s=t(this);n=s.data("uniformed"),n&&(n.remove(),e=t.inArray(this,t.uniform.elements),e>=0&&t.uniform.elements.splice(e,1),s.removeData("uniformed"))})},t.uniform.update=t.fn.uniform.update=function(e){e===n&&(e=t.uniform.elements),t(e).each(function(){var e,n=t(this);e=n.data("uniformed"),e&&e.update(n,e.options)})}}(this,jQuery);
	
	

// fs selector
	
	!function(e,t){"use strict";function s(t){t=e.extend({},S,t||{}),null===w&&(w=e("body"));for(var s=e(this),r=0,a=s.length;a>r;r++)l(s.eq(r),t);return s}function l(t,s){if(!t.hasClass("selecter-element")){s=e.extend({},s,t.data("selecter-options")),s.multiple=t.prop("multiple"),s.disabled=t.is(":disabled"),s.external&&(s.links=!0);var l=t.find("[selected]").not(":disabled"),o=t.find("option").index(l);s.multiple||""===s.label?s.label="":(t.prepend('<option value="" class="selecter-placeholder" selected>'+s.label+"</option>"),o>-1&&o++);var i=t.find("option, optgroup"),c=i.filter("option");l.length||(l=c.eq(0));var d=o>-1?o:0,h=""!==s.label?s.label:l.text(),b="div";s.tabIndex=t[0].tabIndex,t[0].tabIndex=-1;var g="",x="";x+="<"+b+' class="selecter '+s.customClass,E?x+=" mobile":s.cover&&(x+=" cover"),x+=s.multiple?" multiple":" closed",s.disabled&&(x+=" disabled"),x+='" tabindex="'+s.tabIndex+'">',x+="</"+b+">",s.multiple||(g+='<span class="selecter-selected">',g+=e("<span></span>").text(C(h,s.trim)).html(),g+="</span>"),g+='<div class="selecter-options">',g+="</div>",t.addClass("selecter-element").wrap(x).after(g);var y=t.parent(".selecter"),q=e.extend({$select:t,$allOptions:i,$options:c,$selecter:y,$selected:y.find(".selecter-selected"),$itemsWrapper:y.find(".selecter-options"),index:-1,guid:k++},s);r(q),q.multiple||m(d,q),void 0!==e.fn.scroller&&q.$itemsWrapper.scroller(),q.$selecter.on("touchstart.selecter",".selecter-selected",q,a).on("click.selecter",".selecter-selected",q,n).on("click.selecter",".selecter-item",q,u).on("close.selecter",q,p).data("selecter",q),q.$select.on("change.selecter",q,f),E||(q.$selecter.on("focusin.selecter",q,v).on("blur.selecter",q,$),q.$select.on("focusin.selecter",q,function(e){e.data.$selecter.trigger("focus")}))}}function r(t){for(var s="",l=t.links?"a":"span",r=0,a=0,o=t.$allOptions.length;o>a;a++){var i=t.$allOptions.eq(a);if("OPTGROUP"===i[0].tagName)s+='<span class="selecter-group',i.is(":disabled")&&(s+=" disabled"),s+='">'+i.attr("label")+"</span>";else{var n=i.val();i.attr("value")||i.attr("value",n),s+="<"+l+' class="selecter-item',i.hasClass("selecter-placeholder")&&(s+=" placeholder"),i.is(":selected")&&(s+=" selected"),i.is(":disabled")&&(s+=" disabled"),s+='" ',s+=t.links?'href="'+n+'"':'data-value="'+n+'"',s+=">"+e("<span></span>").text(C(i.text(),t.trim)).html()+"</"+l+">",r++}}t.$itemsWrapper.html(s),t.$items=t.$selecter.find(".selecter-item")}function a(e){e.stopPropagation();var t=e.data;t.touchStartEvent=e.originalEvent,t.touchStartX=t.touchStartEvent.touches[0].clientX,t.touchStartY=t.touchStartEvent.touches[0].clientY,t.$selecter.on("touchmove.selecter",".selecter-selected",t,o).on("touchend.selecter",".selecter-selected",t,i)}function o(e){var t=e.data,s=e.originalEvent;(Math.abs(s.touches[0].clientX-t.touchStartX)>10||Math.abs(s.touches[0].clientY-t.touchStartY)>10)&&t.$selecter.off("touchmove.selecter touchend.selecter")}function i(e){var t=e.data;t.touchStartEvent.preventDefault(),t.$selecter.off("touchmove.selecter touchend.selecter"),n(e)}function n(s){s.preventDefault(),s.stopPropagation();var l=s.data;if(!l.$select.is(":disabled"))if(e(".selecter").not(l.$selecter).trigger("close.selecter",[l]),l.mobile||!E||W)l.$selecter.hasClass("closed")?c(s):l.$selecter.hasClass("open")&&p(s);else{var r=l.$select[0];if(t.document.createEvent){var a=t.document.createEvent("MouseEvents");a.initMouseEvent("mousedown",!1,!0,t,0,0,0,0,0,!1,!1,!1,!1,0,null),r.dispatchEvent(a)}else r.fireEvent&&r.fireEvent("onmousedown")}}function c(e){e.preventDefault(),e.stopPropagation();var t=e.data;if(!t.$selecter.hasClass("open")){var s=t.$selecter.offset(),l=w.outerHeight(),r=t.$itemsWrapper.outerHeight(!0);t.index>=0?t.$items.eq(t.index).position():{left:0,top:0};s.top+r>l&&t.$selecter.addClass("bottom"),t.$itemsWrapper.show(),t.$selecter.removeClass("closed").addClass("open"),w.on("click.selecter-"+t.guid,":not(.selecter-options)",t,d),b(t)}}function d(t){t.preventDefault(),t.stopPropagation(),0===e(t.currentTarget).parents(".selecter").length&&p(t)}function p(e){e.preventDefault(),e.stopPropagation();var t=e.data;t.$selecter.hasClass("open")&&(t.$itemsWrapper.hide(),t.$selecter.removeClass("open bottom").addClass("closed"),w.off(".selecter-"+t.guid))}function u(t){t.preventDefault(),t.stopPropagation();var s=e(this),l=t.data;if(!l.$select.is(":disabled")){if(l.$itemsWrapper.is(":visible")){var r=l.$items.index(s);r!==l.index&&(m(r,l),g(l))}l.multiple||p(t)}}function f(t,s){var l=e(this),r=t.data;if(!s&&!r.multiple){var a=r.$options.index(r.$options.filter("[value='"+y(l.val())+"']"));m(a,r),g(r)}}function v(t){t.preventDefault(),t.stopPropagation();var s=t.data;s.$select.is(":disabled")||s.multiple||(s.$selecter.addClass("focus").on("keydown.selecter-"+s.guid,s,h),e(".selecter").not(s.$selecter).trigger("close.selecter",[s]))}function $(t,s,l){t.preventDefault(),t.stopPropagation();var r=t.data;r.$selecter.removeClass("focus").off("keydown.selecter-"+r.guid),e(".selecter").not(r.$selecter).trigger("close.selecter",[r])}function h(t){var s=t.data;if(13===t.keyCode)s.$selecter.hasClass("open")&&(p(t),m(s.index,s)),g(s);else if(!(9===t.keyCode||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault(),t.stopPropagation();var l=s.$items.length-1,r=s.index<0?0:s.index;if(e.inArray(t.keyCode,P?[38,40,37,39]:[38,40])>-1)r+=38===t.keyCode||P&&37===t.keyCode?-1:1,0>r&&(r=0),r>l&&(r=l);else{var a,o,i=String.fromCharCode(t.keyCode).toUpperCase();for(o=s.index+1;l>=o;o++)if(a=s.$options.eq(o).text().charAt(0).toUpperCase(),a===i){r=o;break}if(0>r||r===s.index)for(o=0;l>=o;o++)if(a=s.$options.eq(o).text().charAt(0).toUpperCase(),a===i){r=o;break}}r>=0&&(m(r,s),b(s))}}function m(e,t){var s=t.$items.eq(e),l=s.hasClass("selected"),r=s.hasClass("disabled");if(!r)if(t.multiple)l?(t.$options.eq(e).prop("selected",null),s.removeClass("selected")):(t.$options.eq(e).prop("selected",!0),s.addClass("selected"));else if(e>-1&&e<t.$items.length){var a=s.html();s.data("value");t.$selected.html(a).removeClass("placeholder"),t.$items.filter(".selected").removeClass("selected"),t.$select[0].selectedIndex=e,s.addClass("selected"),t.index=e}else""!==t.label&&t.$selected.html(t.label)}function b(t){var s=t.$items.eq(t.index),l=t.index>=0&&!s.hasClass("placeholder")?s.position():{left:0,top:0};void 0!==e.fn.scroller?t.$itemsWrapper.scroller("scroll",t.$itemsWrapper.find(".scroller-content").scrollTop()+l.top,0).scroller("reset"):t.$itemsWrapper.scrollTop(t.$itemsWrapper.scrollTop()+l.top)}function g(e){e.links?x(e):(e.callback.call(e.$selecter,e.$select.val(),e.index),e.$select.trigger("change",[!0]))}function x(e){var s=e.$select.val();e.external?t.open(s):t.location.href=s}function C(e,t){return 0===t?e:e.length>t?e.substring(0,t)+"...":e}function y(e){return"string"==typeof e?e.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"):e}var k=0,q=t.navigator.userAgent||t.navigator.vendor||t.opera,P=/Firefox/i.test(q),E=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(q),W=P&&E,w=null,S={callback:e.noop,cover:!1,customClass:"",label:"",external:!1,links:!1,mobile:!1,trim:0},D={defaults:function(t){return S=e.extend(S,t||{}),"object"==typeof this?e(this):!0},disable:function(t){return e(this).each(function(s,l){var r=e(l).parent(".selecter").data("selecter");if(r)if("undefined"!=typeof t){var a=r.$items.index(r.$items.filter("[data-value="+t+"]"));r.$items.eq(a).addClass("disabled"),r.$options.eq(a).prop("disabled",!0)}else r.$selecter.hasClass("open")&&r.$selecter.find(".selecter-selected").trigger("click.selecter"),r.$selecter.addClass("disabled"),r.$select.prop("disabled",!0)})},destroy:function(){return e(this).each(function(t,s){var l=e(s).parent(".selecter").data("selecter");l&&(l.$selecter.hasClass("open")&&l.$selecter.find(".selecter-selected").trigger("click.selecter"),void 0!==e.fn.scroller&&l.$selecter.find(".selecter-options").scroller("destroy"),l.$select[0].tabIndex=l.tabIndex,l.$select.find(".selecter-placeholder").remove(),l.$selected.remove(),l.$itemsWrapper.remove(),l.$selecter.off(".selecter"),l.$select.off(".selecter").removeClass("selecter-element").show().unwrap())})},enable:function(t){return e(this).each(function(s,l){var r=e(l).parent(".selecter").data("selecter");if(r)if("undefined"!=typeof t){var a=r.$items.index(r.$items.filter("[data-value="+t+"]"));r.$items.eq(a).removeClass("disabled"),r.$options.eq(a).prop("disabled",!1)}else r.$selecter.removeClass("disabled"),r.$select.prop("disabled",!1)})},refresh:function(){return D.update.apply(e(this))},update:function(){return e(this).each(function(t,s){var l=e(s).parent(".selecter").data("selecter");if(l){var a=l.index;l.$allOptions=l.$select.find("option, optgroup"),l.$options=l.$allOptions.filter("option"),l.index=-1,a=l.$options.index(l.$options.filter(":selected")),r(l),l.multiple||m(a,l)}})}};e.fn.selecter=function(e){return D[e]?D[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?this:s.apply(this,arguments)},e.selecter=function(e){"defaults"===e&&D.defaults.apply(this,Array.prototype.slice.call(arguments,1))}}(jQuery,window);
$(function(){
	
	  var targets = $( '[rel~=tooltip]' ),
		  target  = false,
		  tooltip = false,
		  title   = false;
   
	  targets.bind( 'mouseenter', function()
	  {
		  target  = $( this );
		  tip     = target.attr( 'title' );
		  tooltip = $( '<div id="tooltip"></div>' );
   
		  if( !tip || tip == '' )
			  return false;
   
		  target.removeAttr( 'title' );
		  tooltip.css( 'opacity', 0 )
				 .html( tip )
				 .appendTo( 'body' );
   
		  var init_tooltip = function()
		  {
			  if( $( window ).width() < tooltip.outerWidth() * 1.5 )
				  tooltip.css( 'max-width', $( window ).width() / 2 );
			  else
				  tooltip.css( 'max-width', 270 );
   
			  var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
				  pos_top  = target.offset().top - tooltip.outerHeight() - 20;
   
			  if( pos_left < 0 )
			  {
				  pos_left = target.offset().left + target.outerWidth() / 2 - 20;
				  tooltip.addClass( 'left' );
			  }
			  else
				  tooltip.removeClass( 'left' );
   
			  if( pos_left + tooltip.outerWidth() > $( window ).width() )
			  {
				  pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
				  tooltip.addClass( 'right' );
			  }
			  else
				  tooltip.removeClass( 'right' );
   
			  if( pos_top < 0 )
			  {
				  var pos_top  = target.offset().top + target.outerHeight();
				  tooltip.addClass( 'top' );
			  }
			  else
				  tooltip.removeClass( 'top' );
   
			  tooltip.css( { left: pos_left, top: pos_top } )
					 .animate( { top: '+=10', opacity: 1 }, 150 );
		  };
   
		  init_tooltip();
		  $( window ).resize( init_tooltip );
   
		  var remove_tooltip = function()
		  {
			  tooltip.animate( { top: '-=10', opacity: 0 }, 150, function()
			  {
				  $( this ).remove();
			  });
   
			  target.attr( 'title', tip );
		  };
   
		  target.bind( 'mouseleave', remove_tooltip );
		  tooltip.bind( 'click', remove_tooltip );
	  });
	
	
	//tool tip
	/*$('.tultip').smallipop();*/
	
	$(".cm-select").selecter();
	
	//file upload	
	$('.filer_input').filer({
		showThumbs: true,
		limit:1,
		extensions: ['jpg', 'jpeg', 'png', 'gif'],
		captions: {
			button: "Browse",
			feedback: "Choose files To Upload",
			feedback2: "files were chosen",
			drop: "Drop file here to Upload",
			removeConfirmation: "Are you sure you want to remove this file?",
			errors: {
				filesLimit: "Only {{fi-limit}} files are allowed to be uploaded.",
				filesType: "Only Images are allowed to be uploaded.",
				filesSize: "{{fi-name}} is too large! Please upload file up to {{fi-maxSize}} MB.",
				filesSizeAll: "Files you've choosed are too large! Please upload files up to {{fi-maxSize}} MB."
			}
		},
    uploadFile: {
        url: "./upload.php",
        data: null,
        type: 'POST',
        enctype: 'multipart/form-data',
        beforeSend: function(){},
        success: function(data, el){
            var parent = el.find(".jFiler-jProgressBar").parent();
            el.find(".jFiler-jProgressBar").fadeOut("slow", function(){
                $("<div class=\"jFiler-item-others text-success\"><i class=\"icon-jfi-check-circle\"></i> Success</div>").hide().appendTo(parent).fadeIn("slow");    
            });
        },
        error: function(el){
            var parent = el.find(".jFiler-jProgressBar").parent();
            el.find(".jFiler-jProgressBar").fadeOut("slow", function(){
                $("<div class=\"jFiler-item-others text-error\"><i class=\"icon-jfi-minus-circle\"></i> Error</div>").hide().appendTo(parent).fadeIn("slow");    
            });
        },
        statusCode: null,
        onProgress: null,
        onComplete: null
    }
    });
	
	// check box
	$(".cm-check").uniform();
});


