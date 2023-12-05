import { createReducer, on } from '@ngrx/store';
import { LaunchesApiActions } from './launches.actions';
import { Launch } from '../models/launch';

export const initialState: ReadonlyArray<Launch> = [];

export const launchesReducer = createReducer(
  initialState,
  on(LaunchesApiActions.retrievedLaunchesList, (_state, { launches }) => launches)
);