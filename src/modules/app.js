import { createModule } from 'redux-modules'
import { Cmd, loop, liftState } from 'redux-loop'

const app = createModule({
  name: 'app',
  initialState: {},
  composes: [liftState],
  transformations: {
    init: state => loop(state, Cmd.none),
  },
})

export default app
