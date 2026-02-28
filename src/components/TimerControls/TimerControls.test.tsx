import { render } from '@testing-library/react'

import { TimerControls } from './TimerControls'
import { actions } from '../../redux'

describe('TimerControls component', () => {
  it('renders without crash', () => {
    const { getByTestId } = render(
      <TimerControls
        is_stopped={true}
        stopTimer={actions.stopTimer}
        resumeTimer={actions.resumeTimer}
      />
    )
    const controlsButton = getByTestId('timer-controls')
    expect(controlsButton).toBeInTheDocument()
  })

  it('renders pause icon', () => {
    const { getByTestId } = render(
      <TimerControls
        is_stopped={false}
        stopTimer={actions.stopTimer}
        resumeTimer={actions.resumeTimer}
      />
    )
    const controlsButton = getByTestId('fi-pause-icon')
    expect(controlsButton).toBeInTheDocument()
  })

  it('renders play icon', () => {
    const { getByTestId } = render(
      <TimerControls
        is_stopped={true}
        stopTimer={actions.stopTimer}
        resumeTimer={actions.resumeTimer}
      />
    )
    const controlsButton = getByTestId('fi-play-icon')
    expect(controlsButton).toBeInTheDocument()
  })

  it('should call resumeTimer after being clicked', () => {
    const mockResumeTimer = jest.fn() as unknown as typeof actions.resumeTimer

    const { getByTestId } = render(
      <TimerControls
        is_stopped={true}
        stopTimer={actions.stopTimer}
        resumeTimer={mockResumeTimer}
      />
    )
    const controlsButton = getByTestId('timer-controls')
    controlsButton.click()
    expect(mockResumeTimer).toHaveBeenCalled()
  })

  it('should call stopTimer after being clicked', () => {
    const mockStopTimer = jest.fn() as unknown as typeof actions.stopTimer

    const { getByTestId } = render(
      <TimerControls
        is_stopped={false}
        stopTimer={mockStopTimer}
        resumeTimer={actions.resumeTimer}
      />
    )
    const controlsButton = getByTestId('timer-controls')
    controlsButton.click()
    expect(mockStopTimer).toHaveBeenCalled()
  })
})
