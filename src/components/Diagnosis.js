import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAnalysis } from '../store/actions/AddAnalysis';



export class Diagnosis extends Component {
    constructor(props) {
        super(props);
        this.let = [`CAN`, `BAC`, `ACT`, `TRIC`, `BU`, `HSV`, `HFH`, `RGC`, `RCC`, `RBC`, `RAD`, `BGC`, `LFH`, `NILM`, `RR`, `PP`, `PK`, `MIFC`, `ND`, `IF`, `HK`, `EM`, `ECV`, `EM40`, `AV`, `EM16`, `AP`, `MRBC`, `IFC`, `ADENO`, `AGEC N`, `AGEM`, `AGUS N`, `AGEC`, `AGUS H`, `HSIL S`, `H VaIN`, `AIS`, `ASCUS H`, `ASCUS`, `SMC` ,`HSIL`, `SCC`, `CIS`, `LSIL`, `AGUS`, `MNEO`, `L VaIN`, `LSIL H`, ``];
        this.actions = [
            `Fungal organisms morphologically consistent with Candida spp`,
            `Shift in vaginal flora suggestive of bacterial vaginosis`,
            `Bacteria morphologically consistent with Actinomyces spp`,
            `Trichomonas vaginalis`,
            `Cellular Changes consistent with Herpes Simplex Virus`,
            `Estrogen high for history`,
            `Reactive Glandular Cell Changes present`,
            `Reactive Cellular Changes present`,
            `Blood is noted`,
            `Radiation Changes`,
            `Glandular Cells present in post Hysterectomy Vaginal Smear`,
            `Estrogen low for history`,
            `Negative for Intraepithelial Lesion or Malignancy`,
            `Reactive and Reparative Changes`,
            `Cellular Changes consistent with Post Partum`,
            `Parakeratosis`,
            `Marked Inflammatory Cellular Changes present`,
            `Non-Diagnostic, suggest repeat Pap`,
            `Inflammation present`,
            `Hyperkeratosis`,
            `Endometrial Cells present`,
            `Glandular Cells are Present in a Vaginal specimen`,
            `Endometrial Cells present in woman 40 years or older.Clinical correlation is recommended`,
            `Atrophic Vaginitis`,
            `Endometrial Cells seen after day 16 of the menstrual cycle. Clinical correlation is recommended`,
            `Atrophic Pattern`,
            `Marked Blood is noted`,
            `Inflammatory Cellular Changes present`,
            `Positive for Malignant Cells consistent with Adenocarcinoma`,
            `Atypical Endocervical Cells, favour neoplastic`,
            `Atypical Endometrial Cells, NOS`,
            `Atypical Glandular Cells, favour neoplastic	`,
            `Atypical Endocervical Cells, NOS`,
            `Atypical Glandular Cells of Undetermined Significance, cannot exclude a High Grade Lesion`,
            `High Grade Squamous Intraepithelial Lesion, encompassing moderate and severe dysplasia, CIS CIN 2 and CIN 3, with features suspicious for invasion`,
            `High Grade Vaginal Intraepithelial Neoplasia (VaIN)`,
            `Endocervical Adenocarcinoma in Situ`,
            `Atypical Squamous Cells of Undetermined Significance. cannot exclude a High Grade Lesion`,
            `Atypical Squamous Cells of Undetermined Significance`,
            `Suspicious for Malignant Cells (see comment)`,
            `High Grade Squamous Intraepithelial Lesion, encompassing moderate and severe dysplasia, CIS CIN 2 and CIN 3`,
            `Positive for Malignant Cells consistent with Squamous Cell Carcinoma`,
            `Carcinoma in Situ`,
            `Low Grade Squamous Intraepithelial Lesion, encompassing HPV / mild dysplasia / CIN 1`,
            `Atypical Glandular Cells of Undetermined Significance`,
            `Malignant Neoplasm, Other (see comment)`,
            `Low Grade Vaginal Intraepithelial Neoplasia (VaIN)`,
            `Low Grade Squamous Intraepithelial Lesion, encompassing HPV / mild dysplasia / CIN 1, cannot exclude a High Grade Squamous Intraepithelial Lesion (HSIL)`,
        ];
    }

    handleClick = (e) => {
        let list = JSON.parse(this.props.list);
        const i = Number(e.currentTarget.id);
        const specimenAdequacy = {
            id: `Dx`,
            code: this.let[i],
            action: this.actions[i],
        }
        list.push(specimenAdequacy)
        this.props.addAnalysis(JSON.stringify(list));
    }

    render() {
        return (
            <div className="pad11">
                <div className="pre-title">
                    <div className="first-t">Value</div>
                    <div className="second-t">Action</div>
                </div>
                {
                    this.actions.map((act, i) => {
                        return (
                            <div key={i} className="pre-acts" id={i} onClick={this.handleClick}>
                                <div className="first-a">{this.let[i]}</div>
                                <div className="second-a">{act}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    if (!state.patient.preAnalysis) return {list: `[]`}
    else return {list: state.patient.preAnalysis}
    // list: state.patient.preAnalysis
}

const mapDispatchToProps = dispatch => ({
    addAnalysis: (list) => dispatch(addAnalysis(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(Diagnosis)
