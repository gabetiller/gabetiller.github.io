---
layout: project
title: "Chatty Cathy"
image:
category: code
---

In the fall of 2017 I developed a web application called Chatty Cathy, which is a chat application that sends and receives messages in real time. Like Bloc Jams, Cathy's structure was a good fit for a single page architecture and proved to be a great opportunity to expand my knowledge of databases, JavaScript and AngularJS.

I used firebase as the database, which stored various data such as user generated chat rooms and messages. To access the database, I developed a factory that defined all room related API requests and created a reference to the firebase database. After developing the rooms, I went on to create a message factory that defined all message related API requests. One challenge I faced was that all messages depended on what room the user was currently in. After some research I found that the best solution was to use Firebase's `equalTo()` method which allowed me to query the database and link the message to the room id in which the user was currently in.

Before a user is allowed to enter the website, they are required to create a user name. Cookies proved to be the most appropriate method to store the user's name. Angular modules have a `run()` block which get executed after the injector is created and are used to kickstart the application. This `run()` method was used to insure that the application would not start until the user stored a username in the browser (with cookies).

This project pushed my problem solving skills and greatly expanded my conceptual and technical understanding of AngularJS and Javascript in general. It also was a nice introduction to the use of Firebase and AngelFire.

<a href="https://diplomat-tilling-72250.netlify.com/" style= "color: black">View Site</a>
