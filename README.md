/////////////  ACCOUNTABLE CHALLENGE  ///////////// 

To start the project :

1- Clone the repository  
2- in the root folder run 'yarn install'  
3- to start the app on ios simulator or device, navigate to the ios folder and run 'pod install'  
4- Go back to the root folder and run 'npx react-native start' to start the metro server  
5- Still in the root project, run 'npx react-native run-ios' or 'npx react-native run-android' (you need to have xcode or android studio installed)  

To run unit test with jest : yarn test  
  
To run linting with eslint : yarn lint  
  
You're now seeing the app running  
  

///// What I used to build it /////

React functional components + react hooks  
Typescript  
React navigation for routing  
Axios for http request  
Redux for state management, especially redux toolkik to avoid lots of boiler plate code  

///// Possible Improvements /////

I tried not to work more than 3 hours, so they are some things that could be improved, but i was running out of time.  
Here is a list of what comes to my mind:

-Hardcoded colors and all other stylings. Could have use variables for padding, colors, fontsizes...  
-Hardcoded text.  We could add translations files.  
-Player details could be separated into smaller, reusable components. Could have map on all player properties with Object.keys  
-Do some unit test setup to avoid duplicated code for mocking etc....  

///// about the app /////

As a NBA fan, i built a list of NBA players, using the balldontlie.io API  
You can see a list of nba players with a button to shuffle the list, you can also pull to refresh the list.  
On the details page you can remove a player from the list, and you get redirect to the list.  
You can notice how much i respected the "We don’t care about UI design in this challenge." part :-P