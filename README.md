# no-createreactapp
https://www.youtube.com/watch?v=Zb2mQyQRwqc

npm init -y to get started, created the package.json
npm install react react-dom

add gitignore for node_modules

why react and react dom?
cause people dont only render to the dom, can render to android ios native so they seperated it out

webpack bundles all modules together
babel compile JSX into normal JS so browser can understand it
outputs a single file and we hand that to the browser


npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin
React needs all of these things

--save -dev adds to dev deps in package.json


webpack.config.js
takes all moduels and combines them into one file or modules and refernce that in index.html page
-input output and transformation
spit out a single index_bundle file in dist folder
need an index.html for the entire app. need that main file inside dist and that's what html-webpack-plugin does

babel-loader
use babel loader and babel compiles code anyway we want
want to support older browser 
compile ES6 to ES5
JSX -> jS
babel/present-env (allows us to use class syntax -> constructor funciton odler browsers use)
babel/preset-react -> jsx transformation
have to add to packag.json

dont want to run webpack every time we change
use webpack-dev-server
"start"
hot reloading too