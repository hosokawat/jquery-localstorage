#jquery-localstrage

A simple, lightweight jQuery plugin for reading, writing and deleting html5 local strage

##Installation

Include script after the jQuery library (unless you are packaging scripts somehow else):
```html
<script src="/path/to/jquery.localstorage.js"></script>
```
##Usage
Save
```javascript
value = $.localStorage('key', 'value');
```
Read:
```javascript
value = $.localStorage('key');
```
Read all (values.constructor is Storage): 
```javascript
values = $.localStorage();
```
Enable localStorage value: 
```javascript
boolean = $.enableLocalStorage();
```
