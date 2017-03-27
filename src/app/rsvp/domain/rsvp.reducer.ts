import {RsvpActions, RsvpActionTypes} from "./rsvp.actions";

export class Rsvp {
    $key: string;
    name: string;
    email: string;
    confirmed: boolean;
    message: string;
    date: Date;
}

export interface State {
    rsvps: Rsvp[];
}

export const initialState: State = {
    rsvps: []
};

export function reducer(state = initialState, action: RsvpActions): State {

    switch (action.type) {

        case RsvpActionTypes.LOAD_SUCCESS: {
            return {
                report: action.payload
            };
        }

        case RsvpActionTypes.LOAD_FAIL: {
            console.error(action.type);
            return state;
        }

        case RsvpActionTypes.REFRESH_COUNT_SUCCESS: {
            const newRsvp = JSON.parse(JSON.stringify(state.report));
            const refreshCounts: RsvpCountRefresh[] = action.payload;
            newRsvp.rows.forEach(row =>
                row.cols.forEach(col =>
                    col.counts.forEach(count => {
                        console.log(refreshCounts);
                        count.count = refreshCounts
                            .filter(refreshCount =>
                                refreshCount.path[0] === row.name &&
                                refreshCount.path[1] === col.name &&
                                refreshCount.path[2] === count.name
                            )
                            .map(refreshCount => refreshCount.count);
                    })
                )
            );

            return {
                report: newRsvp
            };
        }

        case RsvpActionTypes.REFRESH_COUNT_FAIL: {
            console.error(action.type);
            return state;
        }

        default: {
            return state;
        }
    }
}

export const getRsvp = (state: State) => state.report;
export const getRsvpHeaders = (state: State) => state.report.headers;
export const getRsvpRows = (state: State) => state.report.rows;
