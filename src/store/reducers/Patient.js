export const patient = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `CHECK_BOX`:
            switch (action.obj.id) {
                case `routineScreen`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.routineScreen = action.obj.status;
                    return newState;
                case `abnormalBleeding`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.abnormalBleeding = action.obj.status;
                    return newState;
                case `previousDysplasia`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.previousDysplasia = action.obj.status;
                    return newState;
                case `radiationTherapy`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.radiationTherapy = action.obj.status;
                    return newState;
                case `highRisk`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.highRisk = action.obj.status;
                    return newState;
                case `hysterectomy`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.hysterectomy = action.obj.status;
                    return newState;
                case `IUD`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.IUD = action.obj.status;
                    return newState;
                case `discharge`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.discharge = action.obj.status;
                    return newState;
                case `vaginitis`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.vaginitis = action.obj.status;
                    return newState;
                case `HRT`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.HRT = action.obj.status;
                    return newState;
                default: return state;
            }

        default: return state;
    }
}