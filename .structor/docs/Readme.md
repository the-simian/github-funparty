### Description
This project is a boilerplate for Web application which uses Material UI components for building UI.
In this project you will find many variants of components from Matarial UI, also many of them are adopted to use in compositions with each other.  
To read more details about Material UI library you can here: <a href="http://material-ui.com" target="blank">http://material-ui.com</a>

Flexbox Gird was taken as grid system. Read more about Flexbox Grid: <a href="http://flexboxgrid.com" target="blank">http://flexboxgrid.com</a>

This project includes a starter file structure for Redux, prepared Webpack configuration for building, and simple ExpressJS server.
<br/>
<br/>
### Technologies and libraries
The following libs and technlogies were used:
* ```react``` (0.14)
* ```react-router```
* ```redux``` (```redux-thunk```, ```react-redux```)
* ```material-ui```
* ```Flexbox Grid``` (CSS)
* ```express```
* ```webpack```
 
```react-router``` is used as routing mechanizm between pages in Structor. 
Equal router is used in final application after exporting pages. 
This will be discussed below in chapter "Export pages".

```redux``` is a great implementation of Flux architechture and helps dramatically to build advanced Web apps.

```express``` used as back-end HTTP server for Web application.
<br/>
<br/>
### Structure of the source code
Below is a treeview of the structure where only that files shown which are described further.
In the description of each file or directory you may find information about how it is used by the builder and how you can change it for your purpose.
```
.structor/
 |--defaults/
 |   |--...
 |--desk/
 |   |--assets/
 |   |--index.html
 |   |--model.json
 |
 |--docs/
 |   |--...
 |--generators/
 |   |--react-es6
 |   |   |--scripts/
 |   |   |--generator.json
 |   |--...
 |
 |--src/
 |   |--default.js
 |   |--index.js
 |   |--...
 |
 |--templates/
 |   |--routes.js.tpl
 |   |--{pagename}.js.tpl
 |
 |--config.json
 |--proxy.json
build-conf/
 |--webpack.config.js
 |--webpack-dev.config.js
public/
 |--images/
 |   |--...
 |--resources/
 |   |--...
 |--index.html
src/
 |--...
 |--store/
 |   |--storeManager.js
 |   |--...
 |--main.js
server.js
```
#### Metainfo files
* ```.structor/``` - folder of project's metainfo for Structor.
* ```.structor/defaults/``` - a folder where data models variants of component are stored
* ```.structor/desk/index.html``` - html file of page in the Structor workspace. 
Here you can add external resources which can not be included through the webpack require() mechanizm. 
For example, jQuery library of modernizr. 
Though, don't edit any existing links and refs - they are essential for edited page's workspace look and feel.
* ```.structor/desk/model.json``` - JSON data model of entire project.
* ```.structor/docs/``` - folder where Structor stores documentation for each component. There are markdown files named each after the component name.
* ```.structor/generators/``` - folder containing scripts and settings files for source code generators. Please refer to Structor docs chapter about source code generation.
* ```.structor/generators/react-es6/``` - all generators distributed through separated folders, this is one of the generators folder. 
If you want to create the source code generator for React component of your own, you can clone this folder and modify scripts and configuration of generator. 
But ofcourse, you have to know what data is passed to generator during React component generation, that information you may find in Structor documentation.
* ```.structor/generators/react-es6/scripts/``` - this is folder where generator javascripts files are. You can modify any file according to the rules of generation. 
In this project all generators are using lodash templates. 
* ```.structor/generators/react-es6/generator.json``` - do not modify the name of this file inside of generator's folder. 
This is a configuration of generator, where paths of scripts, output files, and rules of naming are described.
* ```.structor/src/``` - files for Structor workspace. 
* ```.structor/src/index.js``` - index file of React components which are used in current project. 
Here you can add the references of third-party components which you want to see in Structor's workspace. 
Also you can add here dependent resources like css, images, etc.
* ```.structor/src/default.js``` - main entry file for Structor's webpack, includes React Router config and connection with Redux storage in current project. 
Find line: ```const store = storeManager();``` If your Redux storage is created in another way or locates in other place you have to edit this here.
* ```.structor/templates/``` - folder with page and router templates which are using for exporting workspace pages into real application.
* ```.structor/templates/routes.js.tpl``` - lodash template for React Router which will contain all routes of developed pages in Structor. 
Currently Structor works with not nested routes.
* ```.structor/templates/{pagename}.js.tpl``` - lodash template for page's React component which will contain all components in particular page.
* ```.structor/config.json``` - configuration file. Currently has only relative path of the output folder for exported pages' source code.
* ```.structor/proxy.json``` - proxy configuration. Proxy configuration is used for setting up proxy in current ptoject while you are working with pages in Structor workspace. 
So, components can make requests to backend server omiting CORS restriction.
<br/>
#### Build scripts
* ```build-conf/webpack.config.js``` - this is webpack's config file for production. 
The output of this config will be the minimized files in ```public/``` folder.
* ```build-conf/webpack-dev.config.js``` - this is webpack's config file for development stage of the project.
<br/>
#### Output Web app files
* ```public/``` - folder where static compiled files are.
* ```public/index.html``` - index file of our Web app. If you have included manually resources into meta file ```.structor/desk/index.html``` don't forget to include them here as well.
* ```public/resources/``` - due to rewriting rules in express.js we need to separate resources from index file.
<br/>
#### Source code 
* ```src/``` - folder in which the source code of application is. 
Folders are created using examples from Redux documentation.
* ```src/store/storeManager.js``` - file which is used as connection point of Redux store for Structor and for real app.
* ```src/main.js``` - entry point of Web app. 
If you add manually React components into metainfo index.js you have to add them here as well.

```server.js``` - express backend server for current Web app.
<br/>
<br/>
### Starting Structor 
If you download package from StructorMarket manually please execute the following commands in the project's directory:
* Run command: ```npm install```

Now you can start Structor from command line. To recognise the path of current project's folder Structor has 
to be started in the root directory of current project or started with command argument ```-d``` pointing to project's folder. 
* in project root dir: ```structor```
* in any other dir: ```structor -d <path to project directory>```

Once you have started Structor you will see the project's workspace. Now you can try to combine components with each other, 
or generate new React components from the combination, or add new pages, or whatever you want.

This project has only three sample pages: ```/set1```, ```/set2```, and ```/progress```
<br/>
<br/>
### Exporting pages with routes
In any moment of work with Structor you can export existing pages into real pages with routes.
This can be done by selecting option "Export project" from main menu in Structor's workspace.  

After that you will get a list of generated files of pages' components. And one more additional file for router configuration.
In current project these files will be generated into ```src/routes/``` folder. But, you can change this path in ```.structor/config.json``` file. 

Also you may edit templates for output React components in ```.structor/templates/``` or add your own new with ".tpl" extension.
<br/>
<br/>
### Building Web app
* open main menu in Structor's workspace and select option ```Export project```
* Run command: ```npm run build```
* Run command: ```node ./server.js```
* Go to ```http://localhost:3000```
<br/>
<br/>






