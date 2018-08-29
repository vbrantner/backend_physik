# Einstiegsprojekt - Feedback System (Backend)
Hierbei handelt es sich um eine einfache API zur kommuikation 
zwischen Browser und einem Server. Zur Speicherung der Feedbacks wird Mongodb verwendet.

"/api/feedback" zeigt per GET-Request alle verfügbaren Feedbacks als JSON Objekt.

"/api/feedback" fügt über ein entsprechenden POST-Request ein neues Feedback in die Datenbank ein.

## Benutzte Frameworks/Software
- [node.js](https://nodejs.org/en/)
- [mongodb](https://www.mongodb.com/)
- [postman](https://www.getpostman.com/) (optional zum Testen der API)

## Installation/Initialisierung
- git clone dieses repository
- npm init
- Zum starten der API ```node index.js``` eingeben. Standard Port ist 3000 sowie mongodbURL 'mongodb://localhost/feedback'
Port und mondbURL können auch mit übergeben werden. Port über ```--port XXXX``` und ```--mongodbURL '...'```.
Beispiel command ```node index.js --port 4000 --mongodbURL 'mongodb://localhost/feedback'```.
