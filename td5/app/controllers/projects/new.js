import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		save(model){
			let project = model.copy;
			let p = this.store.createRecord('project', project);

			p.save().then(()=>{
				this.transitionToRoute('projects');
			});
		}
	}
});
