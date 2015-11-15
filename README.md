# Tabloyd [![Build Status](https://travis-ci.org/crewstyle/tabloyd.svg?branch=master)](https://travis-ci.org/crewstyle/tabloyd)

_a responsive table very light jQuery plugin_  
[![npm version](https://badge.fury.io/js/yohoho.tabloyd.svg)](https://badge.fury.io/js/yohoho.tabloyd)
[![GitHub version](https://badge.fury.io/gh/crewstyle%2Ftabloyd.svg)](https://badge.fury.io/gh/crewstyle%2Ftabloyd)  


## Package manager

````javascript
//bower
bower install --save yohoho.tabloyd
````

````javascript
//npm
npm install yohoho.tabloyd
````


## Install

````html
<!-- In your <body> HTML tag -->

<table class="to-responsify">
    <tr>
        <th>Head #1</th>
        <th>Head #2</th>
    </tr>
    <tr>
        <td>Content #1</td>
        <td>Content #2</td>
    </tr>
</table>
````

````javascript
//in your main JS file
$('table.to-responsify').tabloyd({
    rowWidth: '35%'
});
````


## Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
rowWidth | string | '35%' | Fixed row size, in pixels, em or percent


## Dependencies

jQuery 2.1.4


## Authors and Copyright

Made with ♥ by **[Achraf Chouk](http://github.com/crewstyle "Achraf Chouk")**

+ http://fr.linkedin.com/in/achrafchouk/
+ http://twitter.com/crewstyle
+ http://github.com/crewstyle

Please, read [LICENSE](https://github.com/crewstyle/tabloyd/blob/master/LICENSE "LICENSE") for more details.
