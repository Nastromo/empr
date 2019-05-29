import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PDFViewer, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import wol from '../img/wol.png';
import cell from '../img/cell.jpg';




export class PdfUvfish extends Component {

    render() {

        const styles = StyleSheet.create({
            page: {
                flexDirection: 'column',
            },
            row: {
                flexDirection: 'row',
            },
            section: {
                margin: 10,
                padding: 10,
                flexGrow: 1
            },
            image: {
                height: 80,
                width: 100,
                margin: 10,
            },
            address: {
                fontSize: 10
            },
            docTitle: {
                fontSize: 12,
                fontFamily: 'Helvetica-Bold'
            },
            docSubTitle: {
                fontSize: 12,
            },
            param: {
                fontSize: 8,
                color: "#008800",
                marginRight: 15
            },
            value: {
                fontSize: 10,
                fontFamily: 'Helvetica-Bold'
            },
            divider: {
                width: '100%',
                backgroundColor: '#87CEEB',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Helvetica-Bold',
                fontSize: 12,
                height: 15,
            },
            urine: {
                color: "#006699",
                fontSize: 11,
                fontFamily: 'Helvetica-Bold',
                marginLeft: 15,
                marginTop: 5,
            },
            refs: {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 11,
                fontFamily: 'Helvetica-Bold',
                height: 15,
                margin: 4,
                backgroundColor: "#F0FFFF"
            },
            photo: {
                height: 200,
                width: 200,
                margin: 10,
            },
            results: {
                width: 250,
                fontSize: 11,
                margin: 4
            },
            simple: {
                fontSize: 9,
                marginLeft: 15,
                marginRight: 15,
            }
        });

        return (
            <div className="www-w">
                <PDFViewer>
                    <Document>
                        <Page size="A4" style={styles.page}>
                            <View style={styles.row}>
                                <Image
                                    style={styles.image}
                                    src={wol}
                                />
                                <View style={styles.section}>
                                    <Text style={styles.address}>229 49th Street</Text>
                                    <Text style={styles.address}>Brooklyn, NY 11220-1708</Text>
                                    <Text style={styles.address}>Tel. (718) 788-3840</Text>
                                    <Text style={styles.address}>Fax. (718) 788-3871</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.docTitle}>Dr. Fermina Mazzella</Text>
                                    <Text style={styles.docSubTitle}>Laboratory Director</Text>
                                    <Text style={styles.docSubTitle}>CLIA No: 33D1057336</Text>
                                </View>
                            </View>

                            <View style={styles.row}>

                                <View style={styles.section}>
                                    <View style={styles.row}>
                                        <Text style={styles.param}>Requested By:</Text>
                                        <View>
                                            <Text style={styles.value}>WONG, PETER RPAC</Text>
                                            <Text style={styles.value}>GEORGE HALL MD P.C.</Text>
                                            <Text style={styles.value}>2251 86TH ST</Text>
                                            <Text style={styles.value}>BROOKLYN, NY 11214</Text>
                                            <Text style={styles.value}>718-886-0028</Text>
                                        </View>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.param}>Collection Date/Time:</Text>
                                        <Text style={styles.value}>05/13/2019 10:55AM</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.param}>Received Date/Time:</Text>
                                        <Text style={styles.value}>05/15/2019 04:21PM</Text>
                                    </View>
                                </View>
                                <View style={styles.section}>
                                    <View style={styles.row}>
                                        <Text style={styles.param}>Accession#:</Text>
                                        <Text style={styles.value}>PREVIEW</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.param}>Case#:</Text>
                                        <Text style={styles.value}>PREVIEW</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.param}>Patient Name:</Text>
                                        <Text style={styles.value}>RONG, ZHONGCUI</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.param}>Date of Birth:</Text>
                                        <Text style={styles.value}>07/26/1956 (62 years)</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.param}>Gender:</Text>
                                        <Text style={styles.value}>F</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.param}>Phone:</Text>
                                        <Text style={styles.value}>347-881-7626</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.param}>Final Report Date:</Text>
                                        <Text style={styles.value}>(FINAL)</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.param}>Report Print Date:</Text>
                                        <Text style={styles.value}>05/26/2019</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.divider}>
                                <Text style={styles.address}>229 49th Street</Text>
                            </View>


                            <Text style={styles.urine}>Urine: NORMAL</Text>

                            <View style={styles.row}>
                                <Image
                                    style={styles.photo}
                                    src={cell}
                                />
                                <View style={styles.section}>
                                    <Text style={styles.results}>Total number of cells counted:</Text>
                                    <Text style={styles.results}>Number of cells showing gains for 2 or more
chromosomes (3,7 or 17) in the same cell:</Text>
                                    <Text style={styles.results}>Number of cells showing zero 9p21 signals:</Text>
                                    <Text style={styles.refs}>Reference Range</Text>
                                    <Text style={styles.results}>{"ABNORMAL >= 4 cells showing gains for 2 or more chromosomes (3,7 or 17) in the same cell OR >= 12 cells showing zero 9p21 signals"}</Text>
                                    <Text style={styles.results}>{"NORMAL < 4 cells showing gains for 2 or more chromosomes (3,7 or 17) in the same cell OR < 12 cells showing zero 9p21 signals"}</Text>
                                </View>
                            </View>

                            <Text style={styles.urine}>Interpretation:</Text>

                            <Text style={styles.urine}>Methodology:</Text>
                            <Text style={styles.simple}>In situ hybridization is a technique that allows the visualization of specific nucleic acid sequences within a cellular preparation. Specifically, DNA fluorescence in situ hybridization (FISH) involves the precise annealing of a single stranded fluorescently labeled DNA probe to complementary target sequences. The hybridization of the probe with the cellular DNA site is visible by diretion detection using fluorescence microscopy. The UroVysion probes are fluorescently labeled nucleic acid probes for use in situ hybridization assays on urine specimens fixed on slides. The UroVysion kit consists of a 4-color, 4-probe mixture of DNA probe sequences homologous to specific regions on chromosomes 3,7,9 and 17. The UroVysion probe mixture consists of Chromosome Enumeration Probe (CEP) 3 SpecturmRed, CEP 7 SpectrumGreen, CEP 17 SpectrumAqua and Locus Specific Identifier (LSI) 9p21 SpectrumGold. The probes are pre-mixed and pre- denatured in hybridization buffer for ease of use. Unlabeled blocking DNA is also included with the probes to suppress sequences contained within the target loci that are common to other chromosomes. When hybridized and visualized, these probes provide information on chromosome copy number for chromosome ploidy enumeration. This UroVysion Kit is designed for the detection and quantification of chromosomes 3,7, and 17, and 9p21 locus in human urine specimens by FISH.</Text>

                            <Text style={styles.urine}>Intended Use:</Text>
                            <Text style={styles.simple}>The UroVysion Bladder Cancer Kit (UroVysion Kit) is designed to detect aneuploidy for chromosomes 3,7,17 and loss of the 9p21 locus via fluorescence in situ hybridization (FISH) in urine specimens from persons with hematuria suspected of having bladder cancer. Results from the UroVysion Kit are inteded for use, in conjunction with and not in lieu of current standard diagnostic procedures, as an aid for initial diagnosis of bladder carcinoma in patients wtih hematuria and subsequent monitoring for tumor recurrence in patients previously diagnosed with bladder cancer.</Text>

                            <View style={styles.row}>
                                <View style={styles.section}>
                                    <Text style={styles.results}>Screened by:</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.results}>Muhammad Butt, CT (ASCP)</Text>
                                </View>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.section}>
                                    <Text style={styles.results}>Reviewed and Electronically Signed by:</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text style={styles.results}>some text here</Text>
                                </View>
                            </View>

                        </Page>
                    </Document>


                </PDFViewer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PdfUvfish)
