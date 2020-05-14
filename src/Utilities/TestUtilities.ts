import { ReactWrapper, ShallowWrapper } from 'enzyme';

export type IWrapper = ShallowWrapper | ReactWrapper;

export const findByTestId = (wrapper: IWrapper, id: string): IWrapper => {
  return wrapper.find(`[data-test-id="${id}"]`);
}
