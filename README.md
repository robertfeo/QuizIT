# Quiz

In the Quiz, the user answeres questions to a previously selected topic

The server remerbers the actual topic, chapter and progress and the user can later return and continue a session. Therefore a login with username and password is required:

The username and password combination is stored at first login an henceforth required to get a token, which is the credential of the user at further communications

Server Communication
Communication with the server uses the request-response principle:

a client sends a request to the server with the address of this page.
This can be a GET or POST request
the server answers with a response which is in JSON format
Developers can test this easily by sending the request in a browsers address line to this URL and examine the returned result.

Furthermore each response contains a status parameter with the value of ok at success or error at failure.

To simulate real life situations, the server answer is delayed...

Logging in
To log in, the client sends a login to the server. If the username is unknown, the server creates a new user with that name. Login returns a token which is to be used at all further communication.

Zu Beginn eines Spiels sendet der Client einen newgame-Request und erhält eine Identifikation (gameid) zurück, mit der er sich bei der weitern Kommunikation auf das Spiel berufen kann.

Parameter
login Parameter:

userid: The user name (at least 6 characters)
password: The users password (at least 6 charactera)
Additional return values:

token: a unique id used for all further communication with the server
