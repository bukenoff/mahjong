import React from 'react';
import { render } from '@testing-library/react';
import { TimerControls } from './TimerControls';
import { actions } from '../../redux';

describe('TimerControls component', () => {
  it('renders without crash', () => {
    const { getByTestId } = render(
      <TimerControls
        is_stopped={true}
        stopTimer={actions.stopTimer}
        resumeTimer={actions.resumeTimer}
      />,
    );
    const controlsButton = getByTestId('timer-controls');
    expect(controlsButton).toBeInTheDocument();
  });

  it('renders pause icon', () => {
    const { getByTestId } = render(
      <TimerControls
        is_stopped={false}
        stopTimer={actions.stopTimer}
        resumeTimer={actions.resumeTimer}
      />,
    );
    const controlsButton = getByTestId('fi-pause-icon');
    expect(controlsButton).toBeInTheDocument();
  });

  it('renders play icon', () => {
    const { getByTestId } = render(
      <TimerControls
        is_stopped={true}
        stopTimer={actions.stopTimer}
        resumeTimer={actions.resumeTimer}
      />,
    );
    const controlsButton = getByTestId('fi-play-icon');
    expect(controlsButton).toBeInTheDocument();
  });
});
