# **Interactive Map**

The application is divided into the frontend and the backend.

## **Frontend**:

Technology used: **React JS**

First, I have created the checkboxes on the left side and draw the map in the right side of the page.
I have made the map interactive. The map can respond to input from the checkboxes and mouse hovers.     

• Map used: **React Leaflet** with **MapTier** (online tool that provides map templates). <br />

• Map description: Used : **React Leaflet – MapContainer** as a container, **React Leaflet – TileLayer** to attach **MapTier** maps, **React Leaflet – Polygon** to draw the shapes of the states and counties. <br />

• To draw the polygon shapes on the map, I have downloaded and save a JSON file that has shape coordinates of all states. The JSON (states.json) I used has coordinates of the states only, so for this project I am only focusing on the states. This is because, the data provided on the dataset was very messed up and had other different geographical names other than states and counties, which made it hard to track. I had to make some changes because the dataset values were not well structured. I have decided to make the application to filter and work on states only as it was the most stable data. Besides, it was hard to find the polygon coordinated of all the dataset geography and reflect it on the map. <br />  

## **Backend**:

Technology used: **Node JS**

I have used Node JS to create a server and my own API.

**My API**:

• First, takes input of the Age and Race/Ethnicity and returns a JSON of [geography, estimation] from the dataset. <br />

• Then, it compares it with the local JSON (states.json) I have that has the coordinates of the states. Then, it returns the values from local JSON (states.json) filtering out the state not found and adding an item on called “avg_estimate” that holds the estimation values. “avg_estimate” will then help me to draw the heat colors of the states on the map. <br />

I have deployed and hosted my backed on Heroku for easier access and fetching.
It can be found on this link: https://natnael-nodejs-server.herokuapp.com/confidence?group_category= [PLACE YOUR SEARCH INPUT HERE]

## **The General Logic**
The React JS frontend takes input from the checkbox => adds the input to my API and fetches the data => used the fetched data to draw the map. It uses “geography” to filter which states to highlight, “geography.coordinate” to draw the polygon shapes of the states, and the “avg_estimate” number is converted to a color to show the intensity of the heat color map.

## **Frontend Screenshots**

![111111111111](https://user-images.githubusercontent.com/106341725/210375631-ef2931fc-bda8-4f28-b5dd-ed5450de51e5.jpg)

![2](https://user-images.githubusercontent.com/106341725/210370578-45f187d1-0d98-402e-a5cb-82cc4d978967.jpg)

![3](https://user-images.githubusercontent.com/106341725/210370616-b6f39013-fc37-4b2c-ade5-de96291ff8dd.jpg)

![4](https://user-images.githubusercontent.com/106341725/210370658-c77f104f-bed1-4f9a-9a85-0045f312b746.jpg)


## **Backend Screenshots**

![5](https://user-images.githubusercontent.com/106341725/210357992-9cc5a94e-1b26-4c02-a831-fb3f49dd4b7f.jpg)

![6](https://user-images.githubusercontent.com/106341725/210358018-af0f0cb6-5610-464c-9b9a-5bbb3795855d.jpg)

![7](https://user-images.githubusercontent.com/106341725/210358237-ffb9133f-14a2-435c-aafa-ca5a87ef9ec4.jpg)


## **Running the app**

**git clone https://github.com/Nati-Zerai/WebCaseStudy.git**
**npm install**
**npm start**

*If you want to check the **Backend-server** of the application*

**git clone https://github.com/Nati-Zerai/WebCaseStudy-Backend-Node.git**
**npm install**
**node server.js**

*However, no need to run the server because it is hosted on Heroku: https://natnael-nodejs-server.herokuapp.com/confidence?group_category= [PLACE YOUR SEARCH INPUT HERE]*




