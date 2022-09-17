import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { actions } from '../../redux';
import { HistoryControls } from './HistoryControls';

describe('HistoryControls component', () => {
  it('renders without crash', () => {
    const takeStepBackMock = (jest.fn() as unknown) as typeof actions.takeStepBack;
    const takeStepForwardMock = (jest.fn() as unknown) as typeof actions.takeStepForward;

    const { getByTestId } = render(
      <HistoryControls
        takeStepBack={takeStepBackMock}
        takeStepForward={takeStepForwardMock}
        is_step_forward_possible={false}
        is_step_back_possible={false}
      />,
    );

    const root_component = getByTestId('history_controls_root');
    expect(root_component).toBeInTheDocument();
  });

  it('should disable step back and step forward buttons', () => {
    const takeStepBackMock = (jest.fn() as unknown) as typeof actions.takeStepBack;
    const takeStepForwardMock = (jest.fn() as unknown) as typeof actions.takeStepForward;

    const { getByTestId } = render(
      <HistoryControls
        takeStepBack={takeStepBackMock}
        takeStepForward={takeStepForwardMock}
        is_step_forward_possible={false}
        is_step_back_possible={false}
      />,
    );

    const step_back_button = getByTestId('step_back_button');
    const step_forward_button = getByTestId('step_forward_button');

    expect(step_back_button).toBeDisabled();
    expect(step_forward_button).toBeDisabled();
  });

  it('should enable step back and step forward buttons', () => {
    const takeStepBackMock = (jest.fn() as unknown) as typeof actions.takeStepBack;
    const takeStepForwardMock = (jest.fn() as unknown) as typeof actions.takeStepForward;

    const { getByTestId } = render(
      <HistoryControls
        takeStepBack={takeStepBackMock}
        takeStepForward={takeStepForwardMock}
        is_step_forward_possible={true}
        is_step_back_possible={true}
      />,
    );

    const step_back_button = getByTestId('step_back_button');
    const step_forward_button = getByTestId('step_forward_button');

    expect(step_back_button).not.toBeDisabled();
    expect(step_forward_button).not.toBeDisabled();
  });

  it('should call takeStepBack when step back button is clicked', () => {
    const takeStepBackMock = (jest.fn() as unknown) as typeof actions.takeStepBack;
    const takeStepForwardMock = (jest.fn() as unknown) as typeof actions.takeStepForward;

    const { getByTestId } = render(
      <HistoryControls
        takeStepBack={takeStepBackMock}
        takeStepForward={takeStepForwardMock}
        is_step_forward_possible={true}
        is_step_back_possible={true}
      />,
    );

    const step_back_button = getByTestId('step_back_button');

    fireEvent.click(step_back_button);

    expect(takeStepBackMock).toBeCalled();
  });

  it('should call takeStepForward when step forward button is clicked', () => {
    const takeStepBackMock = (jest.fn() as unknown) as typeof actions.takeStepBack;
    const takeStepForwardMock = (jest.fn() as unknown) as typeof actions.takeStepForward;

    const { getByTestId } = render(
      <HistoryControls
        takeStepBack={takeStepBackMock}
        takeStepForward={takeStepForwardMock}
        is_step_forward_possible={true}
        is_step_back_possible={true}
      />,
    );

    const step_forward_button = getByTestId('step_forward_button');

    fireEvent.click(step_forward_button);

    expect(takeStepForwardMock).toBeCalled();
  });
});
