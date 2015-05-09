jquery-declarative is a simple way to add jQuery controls to your HTML without using any JavaScript. It uses data-control attribute for the definition of the element behavior, which is a standard solution in HTML5 to define custom attributes, and makes your page w3c valid. jquery-declarative is working with every jQuery plugin without using any additional javascript.

In jQuery, you can use something like this to assign a control to an HTML element:

```
$(document).ready(function() {
 $('#portfoio').innerfade({
 speed: 1000,
 timeout: 5000,
 ...
 });
}); 
```

with jquery-declarative, you can do this on the following way:

```
<ul id="portfolio" data-control="innerfade[{speed: 1000, timeout: 5000, type: 'sequence', containerheight: '220px'}]">
```

If you like the code, look at my other projects on http://code.google.com/u/TheBojda/.

If you have any question, please feel free to contact me at thebojda AT gmail DOT com.