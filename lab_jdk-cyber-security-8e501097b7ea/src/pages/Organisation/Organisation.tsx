import React from 'react';
import {useTranslation} from "react-i18next";
import Profil from "./Profil";
import TableProba from "../../components/TableProba";
import RiskMatrix from "../../components/RiskMatrix";
import TableWeigthingCriteria from "../../components/TableWeigthingCriteria";


function Organisation() {
    const {t} = useTranslation();
    return (
        <div className='container'>
            <div className="card">
                <div className="card-body">
                    <Profil/>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h2>{t('organisationRiskProfile')}</h2>
                </div>
                <div className="card-body">
                    <div className="row">

                        <div className="col">
                            <TableProba/>
                        </div>
                        <div className="col">
                            <TableProba/>
                        </div>
                        <div className="col">
                            <RiskMatrix/>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col">
                            <TableProba/>
                        </div>
                        <div className="col">
                            <TableProba/>
                        </div>
                        <div className="col">
                            <TableWeigthingCriteria/>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default Organisation;
