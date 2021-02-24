# Reservations manager

After cloning repository type in node `npm install` this will include requiered packages.

To run a project type `npm start`

Server is reachable at `localhost:3000`

Aplication has 3 different views:

- Starting
- Reservations
- Users

---

## Starting

Basic `Welcome` page.

## Reservations

`Reservations` view lets you to add reservation for a specified peroid of time and select user who books the resource (all requiered).
After submiting `Save` button u are able to see on the right that book has been stored in app memory state tree.

## Users

Page `Users` lets you manage available users who can book the resource with basic CRUD operations.
To add user all fields are requiered - the last one: `room number` is (as the name says) room number of person who locks the shared resource.
