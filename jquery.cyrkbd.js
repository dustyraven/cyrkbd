/*!
 * jQuery CyrKbd Plugin v0.0.1
 * https://github.com/dustyraven/cyrkbd
 *
 * based on Vladimir Komarov's cyrillic plugin (project's dead from 2009)
 * http://www.vlkomarov.info/projects/jquery/cyrillic/
 *
 * (c) Dusty Raven, 2013
 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the DWTFYWT Public License,
 * Version 2, as published by Sam Hocevar.
 * See http://www.wtfpl.net/txt/copying/ for more details.
 */
;(function($) {
  var cyrkbds = {
		'MAP':{'PHO':'BDS','BDS':'OFF','OFF':'PHO'},
		'PHO':{65:40,66:41,67:62,68:44,69:45,70:60,71:43,72:61,73:48,74:49,75:50,76:51,77:52,78:53,79:54,80:55,81:71,82:56,83:57,84:58,85:59,86:46,87:42,88:68,89:66,90:47,91:96,92:102,93:97,96:95,97:72,98:73,99:94,100:76,101:77,102:92,103:75,104:93,105:80,106:81,107:82,108:83,109:84,110:85,111:86,112:87,113:103,114:88,115:89,116:90,117:91,118:78,119:74,120:100,121:98,122:79,123:64,124:70,125:65,126:63},
		'BDS':{113:-956,34:63,39:95,44:88,46:83,47:73,58:52,59:84,60:56,62:51,63:41,65:68,66:60,67:66,68:40,69:45,70:54,71:46,72:43,73:57,74:58,75:53,76:42,77:55,78:61,79:44,80:47,82:48,83:71,84:64,85:50,87:59,88:49,89:65,90:70,91:94,97:100,98:92,99:98,100:72,101:77,102:86,103:78,104:75,105:89,106:90,107:85,108:74,109:87,110:93,111:76,112:79,114:80,115:103,116:96,117:82,119:91,120:81,121:97,122:102,123:62}
	};

	$.fn.cyrkbd = function(ls,kbd) {
		ls = $(ls);
		if(!ls.length) return this;
		if(!kbd)
			for(kbd in cyrkbds)
				if(cyrkbds.hasOwnProperty(kbd) && 'MAP' != kbd)
					break;
		ls.text(kbd);

		ls.on("click", function(e) {
			e.preventDefault();
			kbd = cyrkbds.MAP[$(this).text()];
			ls.text(kbd);
		});

		return this.each(function() {
			var key, _this = $(this);
			_this.on("keypress", function(e) {
				if (cyrkbds[kbd] && (key = cyrkbds[kbd][e.which])) {
					e.preventDefault();
					_this.val(_this.val()+String.fromCharCode(1000+parseInt(key)));
				}
			});
		});
	}
})(jQuery);
