# Boostrap crash course
- Just a crash course around boostrap since that's what they are using in my enterprise and i need this as well for richard's project

# How to install
```
npm install boostrap
```
- Then add "node_modules/bootstrap/dist/css/bootstrap.min.css" into the angular.json file in the "styles" array
and "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" in scripts
- TIP: There is a profile for testing and other for build..make sure it is included on build.
# Container
- Creates a max width at any size you provide (fixed width and centered content)
# Container fluid
- Full-width content
# Row
- Creates a row inside a container
- Flex / fluid standard 
# Col
- creates a col inside the container
- Flex / fluid standard
# Row and Col
- We can say col-6 (column gets 60% of the width)
- We can say row-6 (column gets 60% of the height)
- Default will always be the bigger screen size like XL
- Those without a number will just try to fill the space they can fill
- Auto size will just put its size according to the content
- We can specify a gap between them using g-SOMETHING
# We can combine this which is cool

# Links were not working
- We need to import routerlink in the component

# Stacks
- Stack stuff in any direction (almost like row and col)

# INFO
- Since we only care about layout with boostrap we will shit on the tutorial because we can even request those to chatgpt
- Boostrap has stuff like: Form,input,labels,form validation,alerts,cards,modals,collapses,colors,etc..
- What does this mean? We only care about 30 minutes of video more or less from here: https://www.youtube.com/watch?v=Jyvffr3aCp0&t=104s

# Grid
- Grid is basically the same as the row and col ;) 
