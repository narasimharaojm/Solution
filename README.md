Frontend:

1. Navigate to the folder
2. npm start

Backend

1. Navigate to the folder
2. npm start


Here I have implemented two collections visitors and votes in MongoDB(created account in mlabs).

Main Functionality:

1. Whenever user visits page, an unique id would be generated and stored at client local storage if doesnt exists.
2. Whenever user clicks on like button of an employee, a record will be inserted in visitor collection with visitor unique ID and employee name, and count of likes will be incremented.
3. If user clicks like button again, then record inserted previously will be deleted from visitors collection and likes count will be decremented.
4. If new employee records appears in JSON API, and the same record will be inserted in votes collection with initial votes count from the API.