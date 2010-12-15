	/*
	jquery-declarative library - using jquery plugins without JavaScript.
	
	This library works with HTML5. Find data-control tags, and apply them as plugins.
	
	<div id="content" data-control="innerfade[{speed: 1000, timeout: 6000}]"> ... </div>
	
	is equal to
	
	$('#content').innerfade({speed: 1000, timeout: 6000});
	
	<div id="content"> ... </div>
	*/
	
	$(document).ready(function() {
		$('[data-control]').each(function() {
			var t = $(this);
			var control = t.attr('data-control');
			var pos = control.indexOf('[');
			if(pos == -1) {
				var plugin = control;
				t[plugin]();
			} else {
				var plugin = control.substring(0, pos);
				var params = control.substring(pos + 1, control.length - 1);
				params = eval('(' + params + ')');
				t[plugin](params);
			}
		});
	});