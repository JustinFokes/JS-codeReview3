import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('question', params.question_id);
	},
	actions: {
		addAnswer3(params) {
			var newAnswer = this.store.createRecord('question', params);
			var question = params.question;
			question.get('answers').addObject(newAnswer);
			newAnswer.save().then(function() {
				return question.save();
			});
			this.transitionTo('index');
		}
	}
});