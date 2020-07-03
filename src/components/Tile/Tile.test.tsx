import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { Tile } from './Tile';
import { TilesSymbols } from '~/types';

const mockStore = configureStore({});

test('renders learn react link', () => {
  const store = mockStore({
    myState: 'sample text',
  });

  const { getByTestId } = render(
    <Provider store={store}>
      <Tile
        tile={{
          id: 'string',
          coordinates: {
            layer: 1,
            row: 1,
            col: 1,
          },
          is_blocked: false,
          is_selected: false,
          icon: TilesSymbols.AtSign,
          unblocks: [{
            layer: 1,
            row: 1,
            col: 2,
          }],
          special_styles: null,
        }}
      />
    </Provider>
  );
  const tileElement = getByTestId('tile');
  expect(tileElement).toBeInTheDocument();
});
