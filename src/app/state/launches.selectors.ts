import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Launch } from '../models/launch';

export const selectLaunches = createFeatureSelector<ReadonlyArray<Launch>>('launches');

export const selectLaunch = createFeatureSelector<
    ReadonlyArray<string>
>('launch');

export const selectLaunchById  = (id: string) => createSelector(
    selectLaunches,
    selectLaunch,
    (launches) => {
        return launches.find((launch) => launch.id === id);
    }
);
