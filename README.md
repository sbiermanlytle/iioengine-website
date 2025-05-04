# iio Engine Website
 
 Run the app for local dev
 ```
 yarn run dev
 ```
 
 Build the app for production
 ```
 yarn vite build
 ```
 the final build will go to the `dist` folder
 
 Optimize - Pre-bundle dependencies.
 ```
 yarn vite optimize
 ```
 
 Preview production build
 ```
 yarn vite preview
 ```
 
 To create a new Vite project with Material UI
 ```
 yarn create vite project-name --template react-swc-ts
 
 cd project-name
 yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material
 ```