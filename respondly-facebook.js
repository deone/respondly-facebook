if (Meteor.isClient) {

  Tracker.autorun(function(c) {
    if (Meteor.user()) {
      Me = FacebookCollections.getCollection("/me/accounts");
      Posts = FacebookCollections.getCollection("/363420650498505/feed");
    }
  });
  
  Accounts.ui.config({
    requestPermissions: {
      facebook: ['manage_pages', 'publish_actions'],
    }
  });

  Template.screen.helpers({
    posts: function() {
      if (Meteor.user() && Posts)
        return Posts.find().fetch();
    },
    account: function() {
      if (Meteor.user() && Me)
        return Me.find().fetch();
    }
  });

}
