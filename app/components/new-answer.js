import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		addAnswer() {
			var params = {
				author: this.get('author'),
				answer: this.get('answer'),
			};
			this.sendAction('addAnswer2', params);	
		}	
	}
}); 