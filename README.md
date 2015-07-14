#[SASS](http://sass-lang.com/) + [SMACSS](http://smacss.com/)

This is an implementation of the Simple and Modular Architecture for CSS conventions and a SASS Architecture for my own Curriculum.
 
This is mostly inspired by <http://thesassway.com/beginner/how-to-structure-a-sass-project>

***

##Why SMACSS ?

So tired of having Ctrl+F adventures in my css' hundreds of lines ...

##Why SASS ?

Sass comes with a lot of features allowing SMACSS to be even more powerful 

And also because it's cool

***

#Try it

-   Copy this repo : `git clone https://github.com/Zacaria/SMASASS`
-   Install the dependencies : `npm install`
-   Launch the server : `grunt serve`
-   Edit files : reload and recompilation are automatic

##Demo features

-   Watchers on scss, view folder, and server file
-   Create build dist by running : `grunt build`

***

#Get started

- Grab the \_blank folder
- Copy it into your own project
- Add this line into your html :
    
    `<link type="text/css" rel="stylesheet" href="link/to/css/main.css">`

***

#Architecture explanation

Head to the core of the project : /public/styles/scss
    
        |-- scss
            |-- partials
            |   |-- layout
            |   |   |-- _layout.scss 
            |   |-- modules
            |   |   |-- _modules.scss 
            |   |-- themes
            |   |-- _base.scss
            |   |-- _reset.scss
            |   |-- _state.scss
            |   |-- _typo.scss
            |-- vars
            |   |-- _all.scss
            |   |-- ...
            |-- _shame.scss
            |-- main.scss

         
<a name="partials"/>         
##partials
The partials folder contains code that output css

In this folder, we say 'rule = var'
         
<a name="layout"/>         
##layout

All layouts are centralized by `_layouts.scss`

Layouts are major sections of the page (header, footer, sidebar)

Id's use is tolerable here.

<a name="modules"/>
##modules

All modules are centralized by `_modules.scss` 

Modules are autonomous sections in a page.

Modules have to be modular and reusable : 

    header .block-list { ... }  Bad idea =(
    .block-list-fit { ... }     Good idea =)

Rules for same modules have to share same base name :

    .btn {}
    .btn-search {}
    .btn-small {}
    .btn-large {}

<a name="themes"/>
##themes

Redefines base, layout, module and state rules to switch between themes

This way :

      //Default rules
      body {
          font-family: "Roboto", sans-serif;
      }
    
      header {
          background-color: #33F;
          color: #A66105;
      }
    
      .block-list > li{
          border: 0 dashed #00D;
      }
    
      //Overwritten rules
      .theme-ocean {
        font-family: "Roboto", sans-serif;
    
        .theme-ocean header {
            background-color: #33F;
            color: #A66105;
        }
    
        .theme-ocean .block-list > li{
            border: 0 dashed #00D;
        }
      }

This way, you can import all themes at the same time.

You just have to add the theme root class to apply it dynamically, using javascript for example.

<a name="base"/>
##base

Base file imports vars and defines rules for html tags

<a name="reset"/>
##reset

Reset is a way of cleaning the styling differences between browsers in order to have a consistent baseline

Feel free to choose your own <http://cssreset.com/>

<a name="state"/>
##state

This file defines the states of elements (like inputs, divs)

This is the only place where "!important" is good to use

It defines a final state of an element, therefore, there should not be two states for an element

States can be :
- class names
- pseudo-class
- media queries

Primarily used by JavaScript

Class names have to say what is the intention of the rule :

    .is-loading {}
    .is-collapsed {}

When the state relates to a module

    .is-btn-active {}
    .is-btn-disabled {}

<a name="typo"/>
##typo

This is the only place where we should define typos

Be careful, the given path must be relative to main.scss

<a name="vars"/>
##vars

Vars are centralized by `_all.scss`

This is also the place for mixins

<a name="shame"/>
##shame

In the rush of development project we should allow some shameful non SMASASS code

It has to be documented !!

- What does it refer ?
- Why (so much hate) ?
- How does it work ?
- How would it be cleanable later ?

Of course this needs to be cleaned regularly

<a name="main"/>
##main

The main file imports everything in this order : 

- Third-party styles
- Reset
- Base
- Layouts
- Modules
- States
- Themes
- Shame

This is the only file that compass compiles.

#Suggestions ?