import { processing_actions, processing_reducer } from '../processing.slice';

describe('Processing slice', () => {
  it('reducer should be defined', () => {
    expect(processing_reducer).toBeDefined();
  });

  it('should update state to provided value', () => {
    expect(
      processing_reducer(
        false,
        processing_actions.processingToggled({ value: true }),
      ),
    ).toEqual(true);
  });
});
