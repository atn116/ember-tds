import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {copy:{}};
  },
  actions: {
    addContact(contact){
      contact=this.store.createRecord('contact',contact.copy);
      contact.save().then(
        ()=>{this.transitionTo('contacts');}
      );
    }
  }
});
