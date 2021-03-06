import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('demo', {
    path: '/'
  })
  this.route('demo-lists')
  this.route('infinite-scroll')
})

export default Router
