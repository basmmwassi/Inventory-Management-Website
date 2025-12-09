# Inventory Management Website

This project is a simple React application built as part of the assignment.  
It demonstrates three core React concepts:  
state management, controlled forms, and API data fetching.


## What the Site Is About

The website displays a small inventory of products, allows users to add new products through a form, and shows real products fetched from a public API.  
Each page demonstrates different required features of React.


## Pages Included (3 Required Pages)

### Home / Content Page  `HomePage.jsx`
This page displays a list of products using:
- `useState`
- Rendering a list with `.map()`
- A child component (`ProductItem`) that receives props
- Basic inline styling

This demonstrates how to display data in React.


### Form Page  `FormPage.jsx`
This page contains a form to add a new product.  
It includes:
- 3 controlled inputs (`name`, `price`, `quantity`)
- Simple validation  
- Error messages shown to the user  
- `console.log()` of the submitted data  

This demonstrates handling user input and form validation.


### API Page  `ApiPage.jsx`
This page fetches real products from **FakeStoreAPI**.  
It features:
- Fetching data with `fetch()`
- A loading state
- An error state  
- Displaying API data using `.map()`
- Showing product title, image, and price  

This demonstrates fetching and rendering external data.


## How to Run the Project

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will open in your browser on the local development URL.


## Assignment Requirements Covered

### Home Page
- useState  
- list rendering with map  
- props  
- styling  

### Form Page
- 3 controlled inputs  
- validation + error message  
- console.log on submit  

### API Page
- fetch API  
- loading & error states  
- list rendered with map  
- proper keys  
- meaningful content shown  


## Technologies Used
- React  
- Vite  
- JavaScript  
- CSS  

