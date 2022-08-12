# How does this work? 

The endpoint https://olusola-talentql.herokuapp.com/howold receives a query param dob, which contains a unix timestamp, to look something like this https://olusola-talentql.herokuapp.com/howold?dob=519145626

This request goes into the `apiLimiter` library, a rate limiter which keeps count of user requests per second to ensure that only 3 requests are allowed per client for every second.

Having satisfied the `apiLimiter` rate limter, the request moves into the `validateInput` middleware. This middleware validates against empty string, and against non-integers.

From the middleware, the request moves to the getAgeController. This simply instantiates the AgeServices class and returns the result out as a json.

The AgeService class is found in the services/ageServices.js. This class takes in a dob argument in its constructor. The getAge() method
 1. converts the incoming unix timestamp into Date, using JavaScript's built in Date class. 
 2. gets current date using the same built in Date Class
 3. calculates the difference between current age and dob age and returns this difference.