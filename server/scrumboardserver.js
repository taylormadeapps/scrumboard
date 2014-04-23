
// Lists -- {name: String}
Stages = new Meteor.Collection("stages");

// Publish complete set of lists to all clients.
Meteor.publish('stages', function () {
    return Stages.find();
});

