# Eagle Sight
 
This project consists on a web app which follow the course of a car, in real time, for a period of time.
 
 
This project is divided into two more parts that can be consulted here:
- Server (https://github.com/trackit-consulting/eagleserver)
- Express (https://github.com/trackit-consulting/eagleexpress)
 
### Prerequisites
 
What you need to create an application similar to this:
 
- Visual Studio Code or other similar IDE;
- Ext sdk to generate you app;
 
## Basic Application Structure
 
Applications that target a single toolkit will have the following structure.
 
    app/                # Contains JavaScript code
        model/          # Data model classes
        view/           # Views as well as ViewModels and ViewControllers
        store/          # Data stores
        controller/     # Global / application-level controllers
 
    overrides/          # JavaScript code that is automatically required
 
    sass/
        etc/            # Misc Sass code (all.scss is imported by default)
        var/            # Sass variable and mixin declarations
        src/            # Sass rules
 
    resources/          # Assets such as images, fonts, etc.
 
See the [Sass readme](sass/Readme.md) for details on the "sass" folder.
 
##Development
 
To generate you web app:
```
sencha -sdk "folder that contains ext sdk" generate app -classic <project name> "folder that will the project be in"
```
 
To make your web app follows MVC model you need to make:
```
sencha generate view <folder name>.<file name>
```
 
To watch your web app running:
```
sencha app watch
```
 
After finishing the development off your web app, you need to build your project:
```
sencha app build testing
```
 
When development is finished:
```
sencha app build
```
 
###Authors
 
* **Ruben Diogo** - [rubend151] (https://github.com/rubend151)
 
* **Diogo Banha** - [DiogoBanha97] (https://github.com/DiogoBanha97)