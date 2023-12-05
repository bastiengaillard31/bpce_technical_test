import { createActionGroup, props } from '@ngrx/store';
import { Launch } from "../models/launch";

export const LaunchesApiActions = createActionGroup({
    source: 'Rocket launches API',
    events: {
        'Retrieved Launches List': props<{ launches: ReadonlyArray<Launch> }>(),
    },
});
