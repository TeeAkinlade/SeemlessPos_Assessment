# E-commerce web application project

This is an E-commerce website created using React, Typescript, Tailwind and a Mock API. The application loads products from a Mock API and displays them. Users can select a product to display information including price, product name, description, rating of the product, and  a back arrow that takes user back to the previous page(Homepage). 

User can add an item to the shopping cart by clicking on "Add to cart", the shopping cart page displays all selected items that are in the shopping cart and the sum of all selected items. User can also navigated to an item details page by clicking on an item image or item name in the shopping cart. A button to remove an item and a button to clear all items in the cart is also included on the Cart page. The Checkout button on the cart page takes users to an invoice page.

# Tech Stack

- React
    - React useContext
    - React router dom `npm i react-router-dom`
    - React icons   `npm i react-icons`
    - React Hot Toast   `npm i react-hot-toast`
- Tailwind
- Typescript
- Json server

## Implementation of tech stack

Typescript was embedded to this project to leverage statics typing, catches type-related errors at compile time, fix errors before the code runs and also to improve the code quality.

React router dom was also implemented in this project to enable navigation across pages while React-icons was used to add icons to create a good user interface. A toast message is display when a user add a product, removed a product, clear cart or order product(s), this was achieved with the use of React hot toast . Mock API serves as fake API where the products displayed are fetched.

React useContext hook was used to share data across multiple components without the need for prop drilling. A useContext provider which wraps the entire App.tsx to enable each component within the App.tsx have access to the data was also created

### Mock API
    I used the following steps to implement a the json-server to the project
    
        1. Install json-server using: npm i json-server

        2. Run server: npx json-server --watch db.json --port 5000

### The mock data is display below:
```
{
    "products": [
            {
                "id": "1",
                "name": "Loro Piana",
                "description": "Loro Piana",
                "full_description": " Men's Polo Shirt Golf Shirt Casual Holiday Classic Short Sleeve Fashion Basic Plain Button Summer Regular Fit Navy Black White Yellow Red Blue Polo Shirt 2024. Shop for cheap Classic Polo online? Buy at lightinthebox.com on sale today!",
                "price": 1299.99,
                "image": "https://i.im.ge/2024/03/05/8ETRUh.8c8e64f0258f1a0d36ca04557dad17e8-removebg-preview.png",
                "additionalDetails":{
                    "reviews": 4
                }
            },
            {
                "id": "2",
                "name": "Die Köhler Combat Pant",
                "description": "Cargo Pant",
               "full_description": "Die Köhler Combat Pant aus 50% Baumwolle und 50% Polyester Ripstop ist eine perfekte Kombination von Funktion, Verarbeitung und Material mit folgenden Details: 2 Einschubtaschen mit klettbarer Taschenklappe, die auch zum schnellen Zugriff in die Tasche eingeschoben werden kann, 2 große Gesäßtaschen, die leicht vergrößert werden und dadurch Magazine aufnehmen können, in den Gesäßtaschen befinden sich 2.",
                "price": 900.45,
                "image": "https://i.im.ge/2024/03/05/8EoGl9.431936df6fc0c68d7eba9b5c949e015a-removebg-preview.png",
                "additionalDetails":{
                    "reviews": 3
                }
            },
            {
                 "id": "3",
                "name": "Men Zip Up Bomber Jacket",
                "description": "Slim fit striped silk and linen-Blended Polo shirt",
                "full_description": "Polyester Imported Zipper closure Hand Wash Only Lightweight and high-quality fabric,thicker than windbreaker material,comfortable and durable. Full zip-front closure.Long sleeve ,rib(collar,cuff and hem),functional pocket and inside pocket.",
                "price": 350.00,
                "image": "https://i.im.ge/2024/03/05/8Eoppz.ae3dfff4ec501e6ca9b778dfdad8fe58-removebg-preview.png",
                "additionalDetails":{
                    "reviews": 3
                }
            }....   
        ]
}
```

## To checkout the website click the link below:

<https://seemless-pos-assessment.vercel.app/>

## Getting Started with Create React App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
