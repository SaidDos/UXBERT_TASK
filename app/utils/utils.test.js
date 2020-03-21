import {getUniqueArrayIDs} from './functions/getUniqueArrayIDs';
import {findObjectInArray} from './functions/findObjectInArray';

// testing functions
describe('utils', () => {
  const duplicateArray = [{id: 1, name: 'said'}, {id: 1, name: 'dos'}];
  const array = [
    {id: 1, name: 'said'},
    {id: 2, name: 'dos'},
    {id: 3, name: 'Ahmed'},
  ];

  // testing getUniqueArray()
  it('should return [1]  when array is [{id: 1, name: "said"}, {id: 1, name: "dos"}]', () => {
    expect(getUniqueArrayIDs(duplicateArray)).toStrictEqual([1]);
  });

  // testing findObhectInArray()
  it('should return {id: 1, name: "said"}  when array is [{id: 1, name: "said"}, {id: 2, name: "dos"}] and id = 1', () => {
    expect(findObjectInArray(array, 1)).toStrictEqual({
      id: 1,
      name: 'said',
    });
  });
});
