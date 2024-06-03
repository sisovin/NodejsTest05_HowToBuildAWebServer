# NodejsTest05 : Build a Web Server
This code snippet shows how to create a basic web server in Node.js using the http module. Here are the steps involved:
Overall, this code handles serving files, 404 errors, 301 redirects, and logging events in the Node.js web server implementation.
Please note that you may need to adjust the file paths and file permissions based on your project structure and requirements.

1. Import required modules:
- http: To create the HTTP server.
- path, fs: To work with file paths and read files.
- fsPromises: To work with file system operations using promises.
- logEvents, EventEmitter: Custom event handler for logging events.

2. Define the port on which the server will listen.

3. Check file permissions of an image file and change them if needed.

4. Create a function servefile to read and serve files based on the content type.

5. Create an HTTP server using http.createServer() method, which takes a request handler function as an argument.

6. Inside the request handler function, extract the file extension from the request URL and set the corresponding content type.

7. Determine the file path based on the request URL and serve the requested file if it exists.

8. If the file does not exist, handle 301 redirects or serve a 404 response.

9. Start the server using the server.listen() method.

This code also includes a logging mechanism using the logEvents function, which logs messages to a file in the logs directory.

To run this code:
1. Save the server code in a file named server.js.
2. Save the logging code in a file named logEvents.js.
3. Run the server using node server.js.
4. Make requests to the server and check the logs in the logs directory.

This additional part of the code snippet provides functionality for handling 404 errors and 301 redirects in the web server implementation. Here's an explanation of the code:

1. After checking if the file exists at the specified file path, the server will serve the file using the servefile function if it exists.

2. If the file does not exist, the code inside the else block is executed.

3. It uses the path.parse(filePath).base method to get the base name of the file from the file path.

4. It checks the base name against specific cases for old-page.html and www-page.html.

5. If the base name matches old-page.html, a 301 redirect is issued to the /new-page.html.

6. If the base name matches www-page.html, a 301 redirect is issued to the root path (/).

7. If none of the above cases match, a 404 response is served by calling the servefile function with the path to the 404.html file inside the views directory.

8. The server is started by calling server.listen() with the specified port (PORT).

9. In the logEvents.js file, a function named logEvents is defined which logs the provided message along with a timestamp and a unique identifier (UUID) to a log file specified by logName parameter.

10. It checks if the logs directory exists, and if not, creates it using fsPromises.mkdir.

11. It appends the log entry to the log file specified by logName using fsPromises.appendFile.

12. The function exports logEvents for use in the main server file.



