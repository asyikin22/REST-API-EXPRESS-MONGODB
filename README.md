# ISSUES

* I can't seem to get my mongo uri string to work in .env file, so i removed it to db.js file and it fixes the problem.
* Inside model.js, time stamps wont work if you dont spell it correctly, it should be 'timestamp' NOT timeStamp. It has be in plural form and CAPITALIZATION matters!
* For the delete method, i replaced goal.remove() function with goal.deleteOne() function as the former was deprecated in Mongoose 6
