# jquery-vgwort.js v. 0.9

## Author and license
(c) 2012- Ingram Braun

Licensed [Gnu Public License](http://www.gnu.org/copyleft/gpl.html)

[Project page (in German)](http://ingram-braun.net/public/programming/web/jquery-vg-wort/)
	
## Purpose
A jQuery plugin that converts VG Wort URLs for PDF files from pure HTML to JavaScript
by analyzing and manipulating the href attribute. See [VG Wort manual (in German)](https://tom.vgwort.de/Documents/pdfs/manuals/einbauhilfe_pers_zm_urheb.pdf)

Features:

* old hashes with 30 characters only
* capitalized URLs
* proprietary publisher subdomains

## Usage
	$('a').setVgwortPdfLink();