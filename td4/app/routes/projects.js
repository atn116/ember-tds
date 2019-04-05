import Route from '@ember/routing/route';

export default Route.extend({
  model(){
  return this.store.findAll('project');
},
actions:{
  deleteProj(proj){
    proj.deleteRecord();
    proj.save();
  },
  askDeleteConfirm(proj){
    this.set('del', proj);
  }
}
});
