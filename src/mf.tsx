import { createRoot, type Root } from 'react-dom/client'

import App from './App'

type MountResult = {
  root: Root
}

const MF = {
  mount(container: HTMLElement): MountResult {
    const root = createRoot(container)
    root.render(<App />)
    return { root }
  },
  unmount({ root }: MountResult) {
    root.unmount()
  },
}

export default MF
