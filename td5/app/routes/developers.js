import Route from '@ember/routing/route';


export default Route.extend({
  model(){
    return this.store.findAll('developer');
  },
  actions:{
    deleteDev(dev){
      dev.deleteRecord();
      dev.save();
    },
    askDeleteConfirm(dev){
      this.set('del', dev);
    }
  }
});
