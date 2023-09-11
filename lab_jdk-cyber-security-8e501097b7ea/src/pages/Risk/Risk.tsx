import React, {useState} from 'react';
import {useTranslation} from "react-i18next";

function Risk() {
    const {t} = useTranslation();
    const [numColumns, setNumColumns] = useState(1);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(event.target.value);
        if (value > 5) {
            value = 5;
        }
        if (value < 0) {
            value = 1;
        }
        setNumColumns(value);
    };

    const renderTable = () => {
        const rows = [];
        const lines = [];
        for (let i = 0; i < numColumns; i++) {
            rows.push(
                <td key={i} className="border border-dark">
                    <div>Participant {i + 1} </div>
                </td>
            );
            lines.push(
                <td key={i} className="border border-dark">
                    <div>data</div>
                </td>
            );
        }
        return (
            <>
                <tr>{rows}</tr>
                <tr>{lines}</tr>

            </>
        );
    };

    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    <h1>{t("myorganisation")}</h1>
                </div>
                <div className="card-body">
                    <h2>RISK IDENTIFICATION</h2>
                    <div className="row">
                        <div className="col">
                            <div className="row m-auto">
                                <label htmlFor="riskFamily" className="form-label col-2">Risk family</label>
                                <input type="text" className="form-control col" name="riskFamily" id="riskFamily"/>
                            </div>
                            <div className="row m-auto">
                                <label htmlFor="causes" className="form-label col-2">Causes</label>
                                <textarea style={{height: '100px'}} className="form-text col" name="causes"
                                          id="causes"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row m-auto">
                                <label htmlFor="riskExplaineation" className="form-label col-2">Risk Explanation</label>
                                <input type="text" className="form-control col" name="riskExplaineation"
                                       id="riskExplaineation"/>
                            </div>
                            <div className="row m-auto">
                                <label htmlFor="consequence" className="form-label col-2">Consequence</label>
                                <textarea style={{height: '100px'}} className="form-text col" name="consequence"
                                          id="consequence"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h2>ESTIMATION OF PROBABILITY & IMPACT</h2>
                    <div className="row">
                        <div className="row col">
                            <div className="row">
                                <h6 className="col">Enter the number of participant:</h6>
                                <input className="col" type="number" max={5} min={1} step={1}
                                       onChange={handleInputChange}/>
                            </div>
                            <h6 className="col">Probaboloty <span>(Select a score)</span></h6>
                            <table className="border border-dark">
                                <tbody>{renderTable()}</tbody>
                            </table>

                        </div>
                        <div className="col">


                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Risk;
