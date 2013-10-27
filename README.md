## Requiem - MVC skeleton for Express
  

* Intended for _beginners_ who are learning Express and want a simple MVC architecture.
* As stated, it's very simple. No database is forced on you &mdash; you pick your own.
* I did have to use a templating engine though, (swig) so you could see how the models render.


### Directory Tree

├── app  
│   ├── controllers  
│   │   ├── foo.js  
│   │   └── index.js  
│   ├── models  
│   │   └── index.js  
│   ├── routes.js  
│   └── views  
│        └── index.html  
├── app.js  
├── package.json  
└── public  
    ├── css  
    ├── images  
    └── js  
    
### Install
$ git clone git@github.com:katsh/requiem.git  
$ cd requiem  
$ npm install   
$ node app.js  

Go to your localhost on port 3000 to see.  

This really won't be updated. Unless Express changes drastically in an update.  


![screenshot](http://i.imgur.com/0bsdWPX.png)
![screenshot](http://i.imgur.com/i8tWaxy.png)
