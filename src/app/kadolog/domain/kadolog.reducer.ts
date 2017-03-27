import {ReportActions, ReportActionTypes} from "./report.actions";
import {Report, ReportCountRefresh} from "./report.model";

export interface State {
    report: Report;
}

export const initialState: State = {
    report: null
};

export function reducer(state = initialState, action: ReportActions): State {

    switch (action.type) {

        case ReportActionTypes.LOAD_SUCCESS: {
            return {
                report: action.payload
            };
        }

        case ReportActionTypes.LOAD_FAIL: {
            console.error(action.type);
            return state;
        }

        case ReportActionTypes.REFRESH_COUNT_SUCCESS: {
            const newReport = JSON.parse(JSON.stringify(state.report));
            const refreshCounts: ReportCountRefresh[] = action.payload;
            newReport.rows.forEach(row =>
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
                report: newReport
            };
        }

        case ReportActionTypes.REFRESH_COUNT_FAIL: {
            console.error(action.type);
            return state;
        }

        default: {
            return state;
        }
    }
}

export const getReport = (state: State) => state.report;
export const getReportHeaders = (state: State) => state.report.headers;
export const getReportRows = (state: State) => state.report.rows;
