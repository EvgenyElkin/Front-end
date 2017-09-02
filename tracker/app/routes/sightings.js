import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let record1 = this.store.createRecord('sighting', {
      location: undefined,
      sightedAt: new Date('2016-02-09')
    });
    //record1.set('location', 'paris');
    //console.log('Record 1 location:' + record1.get('location'));
    let record2 = this.store.createRecord('sighting', {
      location: 'Atlanta',
      sightedAt: new Date('2016-02-09')
    });
    let record3 = this.store.createRecord('sighting', {
      location: 'Atlanta',
      sightedAt: new Date('2016-02-09')
    });
    return [record1, record2, record3];
  }
});
