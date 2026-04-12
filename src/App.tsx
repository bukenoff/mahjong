import { type FC } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './styles/global.scss'
import GameView from './containers/GameView'

const App: FC = () => (
  <Provider store={store}>
    <main id="mahjong">
      <GameView />
    </main>
  </Provider>
)

export default App
