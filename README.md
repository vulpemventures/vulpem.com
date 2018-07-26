# Vulpem Ventures Website

LOGO

# Deployment 

TBD



# Development 

## Requirements

* Node > 8 / NPM > 5
* Editor Style: `Spaces 2`

### Clone

`git clone https://github.com/vulpemventures/vulpemcom`


### Install 

Install dependencies being in the cloned folder `vulpemcom`
```
npm i
```

### Run a local server 

```
npm start 
```

 # Build


### SCSS -> CSS

**The folder structure and the file names are mandatory. Do not rename or move any folder**


Import each new file created in the **src/scss/style.scss** file
```
@import "./lib/variables/spacing.scss";
```

Run the build script in the root folder
```
npm run build
```

The compiled css are in the `./src/css` folder

If you want to automatically watch changes in your scss file and automatically re-build on save
```
npm run watch
```


