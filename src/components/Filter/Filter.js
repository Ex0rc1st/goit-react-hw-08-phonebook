import { Input, InputText, ContactsTitleWrapper } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <ContactsTitleWrapper>
      <InputText>Find contact by name</InputText>
      <Input onChange={e => dispatch(changeFilter(e.target.value))} />
    </ContactsTitleWrapper>
  );
};

export default Filter;
