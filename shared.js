/**
 * Created by tom on 23/04/2014.
 */

// Lists -- {name: String}
Stages = new Meteor.Collection("stages");


if (Meteor.isClient) {
    // Client code
}

if (Meteor.isServer) {
// Publish complete set of lists to all clients.
   /* Meteor.publish('stages', function () {
        return Stages.find();
    });*/
}


