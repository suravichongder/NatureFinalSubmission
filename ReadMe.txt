Nature Website


Project Overview
This project is an e-commerce platform dedicated to selling plants, vegetables, manure, and various gardening 
products. The goal is to provide customers with a convenient and reliable way to purchase high-quality 
nature-related products online.

Table of Contents
->Introduction
->Installation
->Usage
->Contributing
->License
->Contact


Introduction
Welcome to our nature e-commerce website! Here, you can find a wide range of products to enhance your gardening 
experience, from fresh vegetables and beautiful plants to nutrient-rich manure and essential gardening tools. 
Our mission is to promote sustainable gardening practices and make it easy for everyone to grow their own green 
spaces.


Installation
To set up the project, follow these steps:

Clone the repository: git clone https://github.com/yourusername/NatureServer.git

Backend Setup (NatureServer)
	1. Clone the repository:
		git clone https://github.com/yourusername/NatureServer.git

	2. Navigate to the backend directory:
		cd NatureServer (Make ensure Node.js is installed in your system)

	3. Install the required dependencies:
		npm install express mongoose cors jsonwebtoken bcrypt bcryptjs

	4.Run the backend server:
		node index.js (version-v18.12.0)

Frontend Setup (NatureClient)
	1. Clone the repository:
		git clone https://github.com/yourusername/NatureClient.git

	2. Navigate to the frontend directory:
		cd NatureClient

	3. Install the required dependencies:
		npm init -y
		npm install bootstrap@4.0.0 
		npm install -g create-react-app
		npm install react-router-dom
	4. Run the frontend application:
		npm start


Usage
Here is how to use the website:

1. Registration and Login:
	-When you first run the code, you'll see a registration and login page.
	-If you are a new user, register and then log in.
	-If you are already a member, simply log in.
	-The header will initially show a "Login" button. After logging in, it will change to a "Logout" button.

2. Home Page:
	-After logging in, you will be redirected to the home page.
	-The home page features a navigation bar with a "Products categories" as sidebar  and a page with slogan

3. Product Navigation:
	-Click on the "Products" link in the navigation bar or use the sidebar to browse different product categories.
	-You can also use a dropdown menu in the navigation bar to select categories.

4. Product Listing:
	-Clicking on any category will display a list of products in that category.
	-Each product listing includes a image, name and price.

5. Product Details:
	-Click on any product to view detailed information, including name of the product, image, 
	 description, positioning, price.
	-There are two buttons: "Buy Product" and "Back to Product Lists."

6. Cart Page:
	-Clicking "Buy Product" navigates to the cart page.
	-The cart page shows the product name, quantity, price, and a delete button.
	-A sidebar displays the quantity of product, name of product, total price, and a "Place Order" button.

7. Order Placement:
	-After placing an order, the ordered items are displayed.

8. Header Logos:
	-The header includes a cart logo and a login/logout button.
	-Clicking the cart logo shows recently ordered items.
	-Clicking the login/logout button toggles between the registration/login page and logging out.

Contributing
We welcome contributions from everyone! To contribute:

Fork the repository.
1.Create a new branch: git checkout -b feature-branch
2.Make your changes and commit them: git commit -m 'Add new feature'
3.Push to the branch: git push origin feature-branch
4.Submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
For any questions or suggestions, please contact us at:

Email: natureecommerce@example.com
Twitter: @natureecommerce
GitHub: Nature E-commerce
