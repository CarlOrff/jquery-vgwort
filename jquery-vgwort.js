/* In allen Links den noscript-Ausdruck für PDF-Links ersetzen. */
$.fn.setVgwortPdfLink = function() {
	var regex = /^(.*\/[a-z0-9]{30,32})\?l=(.*)/;
	$(this).each(function () {
		var obj = $(this);
		var vgwort_pdf = regex.exec(obj.prop('href'));
		if (vgwort_pdf !== null) {
			// Index 0 ist der Ausdruck, auf den der Regex passt (hier also alles).
			obj.attr('href', vgwort_pdf[2]).click(function() {
				setVgwortImg(vgwort_pdf[1]);
			});
		}
	});
	return this;
}

var setVgwortImg = function(src) {
	document.body.append("<img src='" + src + "' width='1' height='1' alt=''>");
}