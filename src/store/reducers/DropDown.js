export const dropDown = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `SHOW_DROP_DOWN`:
            switch (action.obj.id) {
                case `patientHistory`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.patientHistory = action.obj.status;
                    return newState;
                case `previousPap`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.previousPap = action.obj.status;
                    return newState;
                case `specimenSource`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.specimenSource = action.obj.status;
                    return newState;
                case `specimenReceived`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.specimenReceived = action.obj.status;
                    return newState;
                default: return state;;
            }

        default: return state;
    }
}