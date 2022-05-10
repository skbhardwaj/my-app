import styled from 'styled-components';
import styles from '../../styles';
import { ISearchBoxProps, ISearchInputProps, ISearchTypeSelectProps, ITypeOption } from './types';

const issueType: ITypeOption[] = [
  { label: 'OPEN', value: 'OPEN' },
  { label: 'CLOSED', value: 'CLOSED' },
];

const SearchBoxContainer = styled.div`
  ${styles.FlexCenter}
  
  width: 100%;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--color-bg);
  flex-direction: column;
`;

const SearchInput = styled.input`
  padding: 0.65rem 1rem;
  border: 1px solid var(--color-bg);
  border-radius: 5px;
  width: 50%;
  min-width: 320px;
`;

const SearchDropdown = styled.select`
  border: 1px solid var(--color-bg);
  border-radius: 5px;
  width: 50%;
  min-width: 320px;
  padding: 0.5rem;
  background-color: var(--white);
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;


const Dropdown = ({ label, value, options, onSelectChange }: ISearchTypeSelectProps) => {
  return (
    <Label>
      {label}
      <SearchDropdown value={value} onChange={onSelectChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </SearchDropdown>
    </Label>
  );
};

const Input = ({ label, value, onInputChange }: ISearchInputProps) => {
  return (
    <Label>
      {label}
      <SearchInput value={value} onChange={onInputChange} type={'search'} placeholder={'Enter keyword'} />
    </Label>
  );
};

const SearchBox = (props: ISearchBoxProps) => {
  const { keyword, handleKeywordChange, type, handleTypeChange } = props;
  return (
    <SearchBoxContainer>
      <Input value={keyword} onInputChange={handleKeywordChange} label={""} />
      <Dropdown
        label={""}
        options={issueType}
        value={type}
        onSelectChange={handleTypeChange}
      />
    </SearchBoxContainer>
  );
};

export default SearchBox;
