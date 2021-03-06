FlowRouter.route('/', {
  subscriptions: function() {
    // var selector = {category: {$ne: "private"}};
    // this.register('posts', Meteor.subscribe('posts', selector));
  },
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <Home />
    });
  }
});

FlowRouter.route('/signup', {
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <SignUp />
    });
  }
});

// FlowRouter.route('/post/:_id', {
//   name: 'post',
//   subscriptions: function(params) {
//     this.register('singlePost', Meteor.subscribe('singlePost', params._id));
//   },
//   action: function(params) {
//     ReactLayout.render(BlogLayout, {
//       content: <PostPage _id={params._id} />
//     });
//   }
// });