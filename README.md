=========================================
#RoleCall App
=========================================

###### "Tough times don't last. Tough people do.” - Bruce Arians

###Runs on heroku, at this url. All of the time.

###https://rollcall-backend.herokuapp.com


##Endpoints:
    /getAllFriends
        - queries for all the users in the database
    /saveUser
        - saves a user into the database

    /mockFriends
        - returns a mock friends array
    /cool
        - returns a cool persons face

##Examples:
    save a user in the database
        curl -X POST -H "Content-Type: application/json" --data '{"name":"jesse wiz", "email":"jessekoconnor@gmail.com", "password":"myPassword"}' https://rollcall-backend.herokuapp.com/saveUser

    return all the users in the database
        curl https://rollcall-backend.herokuapp.com/getAllFriends

    return a smiley face
        curl https://rollcall-backend.herokuapp.com/cool


##To run locally:

You need to install mysql just like in our production environment (http://postgresapp.com/)
    - all you need to do is download and run it. Make sure to make the $PATH change step in installation.
      $PATH is the path gives your command line quick access to commands. (ex: it allows us to tpe "curl" versus "/usr/bin/curl")


	1. heroku local start


