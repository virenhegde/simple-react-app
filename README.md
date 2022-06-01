# simple-react-app
my simple react application

Download this project and do "npm install" in cmd, once npm install is completed you can give "npm start" in cmd , it should start the project in port 3000 and you should be able to play around with the code.

CODE FLOW 
------------
1) index.js - this is the main component , and we will load our Main Page into 'root' div which is       present in index.html

2) Login.jsx - This is the page where we will show the login page , you can provide any username and password, and you will be able to login . If you keep either username or password empty, it will throw you an error toastr. Plugin used for toastr is - https://www.npmjs.com/package/toastr

3) Shopping.jsx - Once you click on login with username and password, you will land to shopping.jsx.The username you provided to login will be shown in this page with additional information.You can also switch language and see how the content changes based on the locale you select.

4) Banner.jsx - this is the top black color section which is nothing but a simple nav-bar

5) shoppingDetails.jsx - Once you click on 'Lets Shop' Button , you will land in this page. Here as you click on checkbox, the items will be added to the text area, and as you uncheck it will be removed. 
