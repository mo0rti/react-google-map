# React Google map example
A React application to work with the Google Map and Google GeoCode with Node-Js as back-end

## Explanation
This is a React application to show a list of map markers on a Google map. In this application users can find a Geo location by searching an address using [Google Geocode api](https://developers.google.com/maps/documentation/geocoding/start).
On the server side, there is an In Memory database to save the map markers. You can use your own database infrastructure just by rewriting the repository layer.

### Installation & Run

on the root of the application run the following commands
- Run **`yarn`** to install the `concurrently` package.
- Run **`npm run setup`** to install the packages for the both server side and client side applications.
- Run **`npm start`** to start the both application.


### Urls
Make sure these port are free to use on your system.
- client: `http://localhost:8000`
- server: `http://localhost:3030`

### Tests
 There are test cases for Redux actions and Redux reducers in **`./client/src/__tests__`**.
 - To run the tests simply execute  **`npm run test`**.
 

### Server
##### Explanation
Server side stack is Node js - Express js. There is an in memory database in the following path **`./server/src/repositories/map-marker.js`**.


##### Configuration
You can find the server configuration file in the following path: **`./server/.env`**.

###### Options for .env
```
# Port
PORT=3030

# Debug 
LOG_LEVEL='debug'
```
| key | Description & Values |
| --- | --- |
| PORT | Define a port to run the server side application  |
| LOG_LEVEL | The log level to see the logs in the console. The default is debug |

##### End points
| method | url | Description |
| --- | --- | --- |
|GET| `/api/mapmarker/` | To get the list of map markers |
|GET| `/api/mapmarker/:id` | To get the a particular map maker by its id |
|POST| `/api/mapmarker` | To add a map marker  |
|PUT| `/api/mapmarker/:id` | To update a particular map marker |
|DELETE| `/api/mapmarker/:id` | To delete a map marker |


### React
##### Explanation
In this application, there are following folders structure base on best practices:
1. `__tests__`: Contains the test for Redux action, Redux reducers and React components.
2. `actions`: Contains both Redux actions and plain Fetch API call actions
3. `assets`: Contains all the global assets including images, fonts and css files.
4. `components`: Contains reusable components including MegwingMap and MedwingButton
	1. `Medwing-Back-Button`: A reusable back button to navigate to previous path.
	2. `Medwing-Button`: A reusable button to use across the application as button element.
	3. `Medwing-Error-Handler`: A component to catch all the exceptions which may happen inside the react components.
	4. `Medwing-Loading-Indicator`: A component to show a loading indicator when a view doing a long time process.
	5. `Medwing-Map`: A component to show a map based on Google Map api. To use other 3rd party map api just rewrite this component.
	6. `Medwing-Map-Searchable`: A searchable map based on `Medwing-Map` which enables the users to find their address and see its Geo location.
5. `constants`: Contains constants of the application including Redux action-types, settings and api urls.
5. `helpers`: Contains helpers methods to use globally across the project including Http-Client and Service-Error-Handler.
 	1. `Http-Client`: A wrapper for fetch api and all the api call inside the application
 	2. `Service-Error-Handler`: A application wide error logger service
6. `reducers`: Contains Redux reducers.
7. `routes`: Contains all the application routes.
8. `store`: Contains the Redux store configurations for both production and development.
9. `types`: Contains all prop types to type checking for components.
10. `views`: Contains all the view in the application (UI part).
	1. `marker`: To add or update a map marker by searching it via `Medwing-Map-Searchable`.
	2. `markers-list`: To view a list of map markers on the map

##### Configuration
The configuration file for this application can be found in in the following path: **`./client/app.json`**.

###### Options for app.json
```
{
    "url": "http://localhost:3030",
    "map_api_key": "your google map",
    "default_map_center_point": {
        "lng": 13.4050,
        "lat": 52.5200
    }
}
```
| key | Description & Values |
| --- | --- |
| url | The server side url of this application - Node js |
| map_api_key | To run this application go to [Google developers console](https://console.developers.google.com/?pli=1) and find your api key to use |
| default_map_center_point | Default center view when there is nothing selected on the map |

### Screen shots
##### markers list screen
<img src="https://github.com/MortiTotti/exercise-google-maps/blob/master/screenshots/markers-list.png" width="800" aspectRatio="1/2">

##### marker screen
<img src="https://github.com/MortiTotti/exercise-google-maps/blob/master/screenshots/marker.png" width="800" aspectRatio="1/2">
