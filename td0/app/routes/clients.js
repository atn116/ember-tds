import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [
      {nom:'popo',age:17,
       details:'Des détails sur popo...'},
      {nom:'papa',age:16,
      details:'Des détails sur papa...'},
      {nom:'pipi',age:15,
      details:'Des détails sur pipi...'}
    ]

  }
});
