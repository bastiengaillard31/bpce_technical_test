import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Launch } from '../models/launch';

export const selectLaunches = createFeatureSelector<ReadonlyArray<Launch>>('launches');
export const selectLaunchById  = (id: string) => createSelector(
    selectLaunches,
    (launches) => {
        return launches.find((launch) => launch.id === id);
    }
);
