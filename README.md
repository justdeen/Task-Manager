# 💫 Overview
An input has to be provided to the input field before a task can be added. Existing tasks can be crossed out or removed and users are provided with visual feedbacks to enhance the user experience. 

# 🧑‍💻 How The Code Works
## 📋 Adding Tasks
The input passed to the html input element by the user is parsed to a dedicated js variable. The html button used for adding tasks "+" is assigned with an onclick attribute (function) which is then called in the js code whenever the button is clicked.

Each time the "+" is clicked, the code nested in the onclick function is executed, and this code creates html div and button elements for each task added and stores this task (with its button which will be used for removing the task) in a container.


## 🗑 Crossing Out and Removing Tasks
### 1. Crossing Out Tasks
I used the "::before" CSS pseudo element to create a circle using a border on the left-hand side of each task which will be filled with a green color and cross out the task whenever it is clicked or whenever the task itself is clicked, using a custom CSS class (named "checked") which I assigned to the task itself and the circle (which I created using the "::before" pseudo element).

To implement the cross out feature and fill the circle with a green color when the circle on the left side of the task is clicked or the task itself is clicked, I used JavaScript to toggle the class on and off through the use of an eventlistener in my js code which listens for when the task in the listContainer (storing the added task and its button) is clicked using;

    "e.target.tagName === DIV" 

  Syntax Breakdown;

  "e" - refers to the event of a click in the listContainer 

  "target.tagName === DIV" - targets a particular div element in the listContainer 

 "e.target.tagName === DIV" - refers to the event of a click on a div element in the listContainer 

The code above is nested in the "if" command inside the eventlistener and the the "if" command checks if the div element was clicked (each div element stores a task) and if it this is true then the custom "checked" class which I assigned to the "::before" circle element and the task will be toggled on or off depending on whether the class was previously on or off (the terms "on" or "off" simply refer to "adding" or "removing" the class).


### 2. Removing Tasks;
The eventlistener also listens for when the button for each task is clicked and if this is true (using the "else if" command) then the task will be removed from the container using the following syntax;

    e.target.previousSiblingElement.remove();

Syntax Breakdown;

"previousSiblingElement" - refers to the previously added sibling of the button element which is simply the div element (the task itself). 

"e.target.previousSiblingElement.remove();" - points to the task associated with the particular button element and removes it when the button is clicked. 


## 📦 Storing Changes Made to Each Task
I created 2 separate functions for storing the changes made to tasks and retaining these changes when the page is reloaded. 

### 1. Function for storing changes;

    Function saveItem(){
    localStorage.saveItem("data", listContainer)
    }

Syntax Breakdown; 

"localStorage" refers to an object that allows the user to store data in their local browser

".saveItem("data", listContainer)" refers to a method which retrieves the value from the variable "listContainer" and stores it in a key called "data". 

This function essentially uses a key-value pair to retrieve the data provided by the user (and changes  made to the data) and stores this data locally in the user's browser. 

Whenever this function is called, it simply stores the contents in the container (list-container) that nests the tasks and thier respective buttons, in a key named "data". This function is called whenever a task has been added, crossed out or removed. 


### 2. Function for displaying the changes after the page is reloaded;

    Function getItem(){
    listContainer = localStorage.getItem("data")
    }

This function is called whenever the page is loaded or reloaded and it is the last line of code in the Js file.
It simply reassigns the contianer variable to the contents stored in the key called "data" which simply consists of the changes made to each task (if any) and retains the added tasks. This enables the user to revisit the website and retain changes made to the website. 


# 🌈📱 User Interface 
1. Theme - colourful
2. Buttons - finger-friendly rounded edges 
3. containers - rounded edges
4. Text - white and black texts on contrasting backgrounds 


# 🥂 Stack
1. HTML
2. CSS
3. JavaScript
