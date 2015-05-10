jquery-declarative is a simple way to add jQuery controls to your HTML without using any JavaScript. It uses data-control attribute for the definition of the element behavior, which is a standard solution in HTML5 to define custom attributes, and makes your page w3c valid. jquery-declarative is working with every jQuery plugin without using any additional javascript.

In jQuery, you can use something like this to assign a control to an HTML element:

```javascript
$(document).ready(function() {
 $('#portfoio').innerfade({
 speed: 1000,
 timeout: 5000,
 ...
 });
}); 
```

with jquery-declarative, you can do this on the following way:

```html
<ul id="portfolio" data-control="innerfade[{speed: 1000, timeout: 5000, type: 'sequence', containerheight: '220px'}]">
```
