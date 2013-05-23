Template.commentSubmit.events({
	'submit form': function(event, template) {
		event.preventDefault();
		var bodyElement = $(event.target).find("[name=body]");

		var comment = {
			body: bodyElement.val(),
			postId: template.data._id
		};

		bodyElement.val('');

		Meteor.call('comment', comment, function(error, commentId) {
			error && throwError(error.reason);
		});
	}
})