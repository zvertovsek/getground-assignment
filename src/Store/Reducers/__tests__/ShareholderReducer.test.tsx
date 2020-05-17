import { IShareholder } from '~/Entities';
import { ShareholdersReducer, initialState } from '~/Store/Reducers/ShareholdersReducer';
import { ShareholdersActionTypes } from '~/Store/Actions';

describe('Shareholders Reducer', () => {
  it('adds new shareholder', () => {
    const newShareholder: IShareholder = {
      id: 'sdfsasd-asdf-sdfsdf',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      share: 5,
      isCreator: false,
      isDirector: false
    }

    const action: any = {
      type: ShareholdersActionTypes.ADD_SHAREHOLDER,
      payload: newShareholder
    };

    const newState = ShareholdersReducer(initialState, action);
    expect(newState.data).toEqual([newShareholder]);

  });

  it('handles an uknown type, so that the state does not change', () => {
    const action: any = {
      type: "UNKNOWN_ACTION_TYPE"
    };

    const newState = ShareholdersReducer(initialState, action);
    expect(newState).toEqual(initialState);

  });
});