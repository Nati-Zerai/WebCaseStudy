# **Interactive Map**

The application is divided into the frontend and the backend.

## **Frontend**:

Technology used: **React JS**

First, I have created the checkboxes on the left side and draw the map in the right side of the page.
I have made the map interactive. The map can respond to input from the checkboxes and mouse hovers.     

• Map used: **React Leaflet** with **MapTier** (online tool that provides map templates). <br />

• Map description: Used : **React Leaflet – MapContainer** as a container, **React Leaflet – TileLayer** to attach **MapTier** maps, **React Leaflet – Polygon** to draw the shapes of the states and counties. <br />

• To draw the polygon shapes of the states and counties, I have downloaded and save a JSON file that has shape coordinates of all states. The JSON (states.json) I used only has coordinates of the states, so for this project I am only focusing on the states. Besides, the data provided on the dataset was very messed up and had other different geographical names other that states and counties. For this project and based on JSON coordinates file I had, I have decided to filter out the dataset and work only with the states. <br />  

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
![1](https://user-images.githubusercontent.com/106341725/210357903-3eb52325-4085-4f1e-a22a-a113434d5298.jpg)

![2](https://user-images.githubusercontent.com/106341725/210357930-f34d2782-c14b-4d04-87c5-8a29203ba415.jpg)

![3](https://user-images.githubusercontent.com/106341725/210357954-8208e3a7-245f-4f94-99d1-d71407b0efd7.jpg)

![4](https://user-images.githubusercontent.com/106341725/210357963-6615a6c1-c7de-4f32-8aa6-3b5f4f1b73c6.jpg)


## **Backend Screenshots**

![5](https://user-images.githubusercontent.com/106341725/210357992-9cc5a94e-1b26-4c02-a831-fb3f49dd4b7f.jpg)

![6](https://user-images.githubusercontent.com/106341725/210358018-af0f0cb6-5610-464c-9b9a-5bbb3795855d.jpg)

![7](https://user-images.githubusercontent.com/106341725/210358237-ffb9133f-14a2-435c-aafa-ca5a87ef9ec4.jpg)



