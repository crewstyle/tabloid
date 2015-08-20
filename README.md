# Tabloïd [![Build Status](https://travis-ci.org/crewstyle/tabloid.svg?branch=master)](https://travis-ci.org/crewstyle/tabloid)

_a responsive table jQuery plugin_


## Summary

+ [1) What is this all about?](#1-what-is-this-all-about)
+ [2) Install](#2-install)
+ [3) How to use it](#3-how-to-use-it)
+ [4) That's all folkes!](#4-thats-all-folkes)
+ [5) Authors and Copyright](#5-authors-and-copyright)


## 1) What is this all about?

[Tabloïd](https://github.com/crewstyle/tabloid) is a very light jQuery plugin to make tables responsive.  


## 2) Install

If you use [Bower.io](http://bower.io), you can download *Tabloïd* and use it with:

````
bower install --save tabloid
````


## 3) How to use it

It's pretty simple to use the *Tabloïd* jQuery package. It's a two-steps install.  
In your HTML:

````html
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

In your Javascript:
````javascript
$(document).ready({
    $('table.to-responsify').tabloid({
        rowWidth: '35%'
    });
});
````


## 4) That's all folkes!

Now let's have fun :)


## 5) Authors and Copyright

**Achraf Chouk**

+ http://fr.linkedin.com/in/achrafchouk/
+ http://twitter.com/crewstyle
+ http://github.com/crewstyle

Please, read [LICENSE](https://github.com/crewstyle/tabloid/blob/master/LICENSE "LICENSE") for more details.

Copyright 20xx [Achraf Chouk](http://github.com/crewstyle "Achraf Chouk").  
Brewed by Achraf Chouk, served by [Take a tea](http://www.takeatea.com "Take a tea") ;)
