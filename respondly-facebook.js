if (Meteor.isClient) {
  Template.body.rendered = function() {
    console.log('Me');
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
