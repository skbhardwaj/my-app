import { ApolloError } from "@apollo/client";
import { Issue } from "../../graphql/__generated__/generated-types";


export interface IHomePageProps { }
export interface IHomePageState {
  keyword: string,
  type: string,
  query: string,
  issues: Issue[],
  error: ApolloError | undefined,
  loading: boolean,
}
