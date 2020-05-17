import { IShareholder } from '~/Entities';
import { ShareholdersActionTypes, ShareholdersActions } from '../ShareholdersActions';

describe('Shareholders Actions', () => {

  it('has a correct type and payload', () => {
    const newShareholder: IShareholder = {
      id: 'sdfsasd-asdf-sdfsdf',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      share: 5,
      isCreator: false,
      isDirector: false
    };

    const action = ShareholdersActions.addShareholder(newShareholder);

    expect(action.type).toEqual(ShareholdersActionTypes.ADD_SHAREHOLDER);
    expect(action.payload).toEqual(newShareholder);

  });
  
});
