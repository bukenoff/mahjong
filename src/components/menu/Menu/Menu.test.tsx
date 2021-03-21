import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Menu } from './Menu';
import { actions } from '../../../redux';

describe('Menu component', () => {
  it('renders without crash', () => {
    const { getByTestId } = render(
      <Menu generateNewBoard={actions.generateNewBoard} />,
    );

    const root_component = getByTestId('menu-root');
    expect(root_component).toBeInTheDocument();
  });

  it('renders menu if you click button', () => {
    const { getByTestId } = render(
      <Menu generateNewBoard={actions.generateNewBoard} />,
    );

    const button = getByTestId('menu-button');

    fireEvent.click(button);

    const menu_component = getByTestId('menu-list');
    expect(menu_component).toBeInTheDocument();
  });
});
