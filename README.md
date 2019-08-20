# jquery-localstorage

A simple, lightweight jQuery plugin for reading, writing and deleting html5 local storage

## Installation
### CDN
just put this tag:
```html
<script src="https://cdn.jsdelivr.net/gh/hosokawat/jquery-localstorage/jquery.localstorage.js"></script>
```
### Download

Include script after the jQuery library (unless you are packaging scripts somehow else):
```html
<script src="/path/to/jquery.localstorage.js"></script>
```
## Usage
Save:
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
Initialization result: 
```javascript
result = $.support.localStorage;
```
## IO methods
Save:
```javascript
io = $.localStorage.io('key');
value = io.write("value");
```
Read:
```javascript
io = $.localStorage.io('key');
value = io.read();
```
Remove:
```javascript
io = $.localStorage.io('key');
io.remove();
```
Key:
```javascript
io = $.localStorage.io('key');
io.key;
```

## Jasmine Test
[TestPage](http://hosokawat.github.io/jquery-localstorage/test/jasmine.html)
