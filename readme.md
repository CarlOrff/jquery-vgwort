# jquery-vgwort.js v. 0.9

## Purpose
A jQuery plugin that converts VG Wort URLs for PDF files from pure HTML to JavaScript
by analyzing and manipulating the href attribute. See [VG Wort manual (in German)](https://tom.vgwort.de/Documents/pdfs/manuals/einbauhilfe_pers_zm_urheb.pdf)

Features:

* old hashes with 30 instead of 32 characters
* capitalized URLs
* proprietary publisher subdomains
* no specific file extension needed

## Usage
	<script src="//code.jquery.com/jquery-2.1.1.min.js" type="text/javascript"></script>
	<script src="jquery-vgwort.min.js" type="text/javascript"></script>
	<script type="text/javascript">$( document ).ready( function(){ $('a').setVgwortPdfLink() } )</script>
	
## Author and license
(c) 2012- Ingram Braun

Licensed [Gnu Public License](http://www.gnu.org/copyleft/gpl.html)

[Project page (in German)](http://ingram-braun.net/public/programming/web/jquery-vg-wort/)