import { useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/filterSlice';
import { InputFilter, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contact by name
      <InputFilter
        type="text"
        name="text"
        onChange={evt => dispatch(getVisibleContacts(evt.target.value))}
      />
    </Label>
  );
};
