const changeDesc = (receivedSource, ml, turbidity, color, specType, fixative, slideType) => {
    return `Received in a ${receivedSource} are ${ml}mL of ${turbidity} ${color} ${specType} in ${fixative}. [1] ${slideType} slide was prepared and submitted for evaluation.
    `
}

export const patient = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `SHOW_PATIENT_INFO`:
            newState = JSON.parse(JSON.stringify(state));
            newState = action.patient;
            return newState;

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
                case `iudInplace`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.iudInplace = action.obj.status;
                    return newState;
                case `discharge`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.discharge = action.obj.status;
                    return newState;
                case `vaginitis`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.vaginitis = action.obj.status;
                    return newState;
                case `hrt`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.hrt = action.obj.status;
                    return newState;
                default: return state;
            }

        case `SET_DROP_DOWN_OPTION`:
            switch (action.obj.id) {
                case `patientHistory`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.patientHistory = action.obj.option;
                    return newState;
                case `previousPap`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.previousPapDiagnosis = action.obj.option;
                    return newState;
                case `specimenSource`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.specimenSource = action.obj.option;
                    return newState;
                case `specimenReceived`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.specimenReceived = action.obj.option;
                    return newState;



                case `source`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.source = action.obj.option;
                    return newState;
                case `receivedSource`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.receivedSource = action.obj.option;
                    newState.description = changeDesc(
                        newState.receivedSource,
                        newState.ml,
                        newState.turbidity,
                        newState.color,
                        newState.specType,
                        newState.fixative,
                        newState.slideType,
                    )
                    return newState;
                case `turbidity`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.turbidity = action.obj.option;
                    newState.description = changeDesc(
                        newState.receivedSource,
                        newState.ml,
                        newState.turbidity,
                        newState.color,
                        newState.specType,
                        newState.fixative,
                        newState.slideType,
                    )
                    return newState;
                case `color`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.color = action.obj.option;
                    newState.description = changeDesc(
                        newState.receivedSource,
                        newState.ml,
                        newState.turbidity,
                        newState.color,
                        newState.specType,
                        newState.fixative,
                        newState.slideType,
                    )
                    return newState;
                case `specType`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.specType = action.obj.option;
                    newState.description = changeDesc(
                        newState.receivedSource,
                        newState.ml,
                        newState.turbidity,
                        newState.color,
                        newState.specType,
                        newState.fixative,
                        newState.slideType,
                    )
                    return newState;
                case `fixative`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.fixative = action.obj.option;
                    newState.description = changeDesc(
                        newState.receivedSource,
                        newState.ml,
                        newState.turbidity,
                        newState.color,
                        newState.specType,
                        newState.fixative,
                        newState.slideType,
                    )
                    return newState;
                case `slideType`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.slideType = action.obj.option;
                    newState.description = changeDesc(
                        newState.receivedSource,
                        newState.ml,
                        newState.turbidity,
                        newState.color,
                        newState.specType,
                        newState.fixative,
                        newState.slideType,
                    )
                    return newState;
                default: return state;
            }

        case `CHANGE_DATE`:
            switch (action.obj.id) {
                case `lmp`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.lmpDate = action.obj.date;
                    return newState;

                case `previousPapDate`:
                    newState = JSON.parse(JSON.stringify(state));
                    newState.previousPapDate = action.obj.date;
                    return newState;

                default: return state;
            }

        case `SET_OTHER`:
            newState = JSON.parse(JSON.stringify(state));
            newState.other = action.text;
            return newState;


        case `SET_FIRST_INSTRUMENTS`:
            newState = JSON.parse(JSON.stringify(state));
            newState.instrumFirst = action.instrument;
            return newState;

        case `SET_SECOND_INSTRUMENTS`:
            newState = JSON.parse(JSON.stringify(state));
            newState.instrumSecond = action.instrument;
            return newState;

        case `CHANGE_INSTRUM_COMMENT`:
            newState = JSON.parse(JSON.stringify(state));
            newState.testComment = action.text;
            return newState;

        case `SET_MENOPAUSAL`:
            newState = JSON.parse(JSON.stringify(state));
            newState.yearsMenopausal = action.years;
            return newState;

        case `CHANGE_GROSS_COMMENT`:
            newState = JSON.parse(JSON.stringify(state));
            newState.grossOther = action.text;
            return newState;

        default: return state;
    }
}