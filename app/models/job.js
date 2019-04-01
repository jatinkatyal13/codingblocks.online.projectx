import DS from "ember-data";
import { computed } from "@ember/object";

export default DS.Model.extend({
  description: DS.attr(),
  location: DS.attr(),
  role: DS.attr(),
  title: DS.attr(),
  type: DS.attr(),
  eligibility: DS.attr(),
  ctc: DS.attr(),
  status: DS.attr(),
  experience: DS.attr(),
  eligible: DS.attr('boolean'),
  company: DS.belongsTo('company'),
  courses: DS.hasMany('course'),
  myApplication: DS.belongsTo('application'),
  createdAt: DS.attr(),
  deadline: DS.attr(),
  postedOn: computed('createdAt', function() {
    return moment(this.get('createdAt')).fromNow()
  })
})