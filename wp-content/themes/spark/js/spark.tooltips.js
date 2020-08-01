(function($){var methods={init:function(user_options){var options=$.extend({'position':'top'},user_options);return this.each(function(){if($(this).data('tooltip')){var text=$(this).data('tooltip');}else if($(this).attr('title')){var text=$(this).attr('title');$(this).removeAttr('title');}
var tooltipClass=(options.position=='bottom')?'position-bottom':'position-top';var tooltip=$('<div class="spark-tooltip-box '+tooltipClass+'">'+text+'</div>');$(this).before(tooltip);}).on({mouseenter:function(){var tooltip=$(this).prev('.spark-tooltip-box');tooltip.stop().css({'display':'block','opacity':0});var position=$(this).position();var positionTop=(options.position=='top')?position.top-tooltip.outerHeight():position.top+$(this).outerHeight();var positionLeft=position.left+($(this).outerWidth()-tooltip.outerWidth())/2;var marginTop=(options.position=='top')?'-10px':'10px';tooltip.stop().css({'left':positionLeft,'top':positionTop}).animate({opacity:1,'margin-top':marginTop},{duration:200,easing:"linear"});},mouseleave:function(event){if(!$(event.relatedTarget).hasClass('spark-tooltip-box')||$(event.relatedTarget).parents('.spark-tooltip-box').length<1){methods.closeAll.call(this,options);}}});$('.spark-tooltip-box').on('mouseleave',function(){if(!$(event.relatedTarget).hasClass('spark-tooltip')||$(event.relatedTarget).parents('.spark-tooltip-box').length<1){methods.closeAll.call(this,options);}});},closeAll:function(options){$('.spark-tooltip-box').filter(':visible').stop().animate({opacity:0,'margin-top':'0px'},100,"linear",function(){$(this).css('display','none');});}};$.fn.sparkTooltips=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}else{$.error('Method '+method+' does not exist on sparkTooltips');}};})(jQuery);