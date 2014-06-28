/*	jquery-vgwort.js v. 0.9
*	(c) 2012- Ingram Braun	Licensed GPL
*	http://ingram-braun.net/public/programming/web/jquery-vg-wort/
*	
*	A jQuery plugin that converts VG Wort URLs for PDF files from pure HTML to JavaScript
*	by analyzing and manipulating the href attribute.	
*	https://tom.vgwort.de/Documents/pdfs/manuals/einbauhilfe_pers_zm_urheb.pdf (in German)
*	Usage: $('a').setVgwortPdfLink()

*/

$.fn.setVgwortPdfLink = function() {
	
	/* The function appends the tracking image to the body element. */
	var getTrackingImage = function(src) {
		$(document.body).append("<img src='" + src + "' width='1' height='1' alt=''>");
	}
	
	/* The regular expression that matches URLs containing VG Wort tracking images. */
	var regexp = /^(.*\.met\.vgwort\.de\/na\/[a-z0-9]{30,32})\?l=(.*)/i;
	
	/* Scan all elements if they have a href attribute that contains an URL with VG Wort tracking image. */
	$(this).each(function () {
		var obj = $(this);
		var vgwort_pdf = regexp.exec(obj.prop('href'));
		if (vgwort_pdf !== null) { 
			/* If so, remove VG Wort URL and attach event handler that fetches the tracking image when URL is being clicked. */
			obj.attr('href', vgwort_pdf[2]).click(function() {
				getTrackingImage(vgwort_pdf[1]);
			});
		}
	});
	
	/* Return jQuery objects. */
	return this;
}