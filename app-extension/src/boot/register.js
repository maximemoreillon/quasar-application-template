import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-quasar-application-template'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
