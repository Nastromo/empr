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
                case `source`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.source = action.obj.status;
                    return newState;
                case `receivedSource`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.receivedSource = action.obj.status;
                    return newState;
                case `turbidity`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.turbidity = action.obj.status;
                    return newState;
                case `color`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.color = action.obj.status;
                    return newState;
                case `specType`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.specType = action.obj.status;
                    return newState;
                case `fixative`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.fixative = action.obj.status;
                    return newState;
                case `slideType`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.slideType = action.obj.status;
                    return newState;
                case `slideSource`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.slideSource = action.obj.status;
                    return newState;
                case `slideStain`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.slideStain = action.obj.status;
                    return newState;
                case `slideProcessed`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.slideProcessed = action.obj.status;
                    return newState;
                default: return state;
            }

        default: return state;
    }
}