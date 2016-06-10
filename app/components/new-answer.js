import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		save1() {
			var params = {
				author: this.get('author'),
				answer: this.get('answer'),
			};
			this.sendAction('save1', params);	
		}	
	}
}); 