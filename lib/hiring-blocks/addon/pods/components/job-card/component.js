import Component from '@ember/component';
import { action }  from '@ember-decorators/object';
import { computed } from '@ember-decorators/object';
import { inject as service } from '@ember-decorators/service';

export default class JobCardComponent extends Component {
  @service parentRouter

  @computed('deadline')
  get deadlineStr() {
    const date = moment(this.get('deadline'))
    if (date.unix() > 1e10) return 'No Deadline'
    return date.format('Do MMM YY')
  }

  @action
  goToJob () {
    this.parentRouter.transitionTo('hiring-blocks.listing.job', this.job.id)
  }
}
