Frontend:

Navigate to the folder
npm start
Backend

Navigate to the folder
npm start
Here I have implemented two collections visitors and votes in MongoDB(created account in mlabs).

Main Functionality:

Whenever user visits page, an unique id would be generated and stored at client local storage if doesnt exists.
Whenever user clicks on like button of an employee, a record will be inserted in visitor collection with visitor unique ID and employee name, and count of likes will be incremented.
If user clicks like button again, then record inserted previously will be deleted from visitors collection and likes count will be decremented.
If new employee records appears in JSON API, and the same record will be inserted in votes collection with initial votes count from the API.