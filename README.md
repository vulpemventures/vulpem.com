# Vulpem Ventures Website

<p align="center">
  <img src="https://pbs.twimg.com/profile_images/1016986627808333824/nuk1E1au_400x400.jpg" alt="Vulpem Ventures"/>
</p>


# Deployment 

The script will bundle (`gulp bundle`) and commit the subtree located in `/dist`. 

There allows to not track the dist folder in the git repo.

`npm run deploy`

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
gulp serve
```

### Bundle for production
**If in config.json PROD = true, then this command will create dist folder and bundle minified css and js files**
```
gulp bundle
```

### Build SCSS into CSS

**The folder structure and the file names are mandatory. Do not rename or move any folder**


Import each new file created in the **src/scss/style.scss** file
```
@import "./lib/variables/spacing.scss";
```

Run the build script in the root folder
```
gulp scss-to-css
```

The compiled css are in the `./src/css` folder

If you want to automatically watch changes in your scss,js,html files and 
automatically re-build it and reload local server
```
gulp default
```


