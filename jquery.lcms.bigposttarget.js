/*
 * LightCMS Big Post Target v0.1
 * https://github.com/mrcave/lightcms-big-post-target 
 *
 * Copyright 2013, LightIgnite (http://lightignite.com)
 *
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function( $ ) {
  $.fn.bigPostTarget = function() {

    this.find('.blogList > ul > li').each(function(){
	    var url = $(this).find('h2.postTitle a').attr('href');
	    $(this).hover(	
			function () {
				$(this).addClass('hover');		
			},
			
			function () {		
				$(this).removeClass('hover');		
			}	
		);
		$(this).find('.postBody').click(function(){
			window.location.href = url;
		});
    });
    
  };
})( jQuery );