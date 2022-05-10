import { IssueState } from "../../graphql/__generated__/generated-types"

export interface ISearchBoxProps {
  keyword: string,
  handleKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  type: string,
  handleTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}

export interface ITypeOption {
  label: IssueState,
  value: IssueState
}

export interface ISearchTypeSelectProps {
  label: string,
  value: string,
  options: ITypeOption[],
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export interface ISearchInputProps {
  label: string,
  value: string,
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
