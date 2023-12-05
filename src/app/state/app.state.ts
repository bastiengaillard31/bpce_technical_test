import { Launch } from "../models/launch";

export interface AppState {
  books: ReadonlyArray<Launch>;
}
