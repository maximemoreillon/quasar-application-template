import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'ApplicationTemplate',

  setup () {
    return () => h(QBadge, {
      class: 'ApplicationTemplate',
      label: 'ApplicationTemplate'
    })
  }
}
