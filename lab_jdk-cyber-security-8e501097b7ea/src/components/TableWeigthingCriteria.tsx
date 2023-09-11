import {useTranslation} from "react-i18next";
import React from "react";

function TableWeigthingCriteria() {
    const {t} = useTranslation();
    const rows = Array.from({length: 10}).map((_, index) => {
        return (
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    });

    return (
        <div className="">
            <div className="col">
                <span className="col">{t('probabilityCriteria')}</span>
                <div className="row">
                    <span className="col">{t('levelOfProbability')}</span>
                    <span className="col">{t('selectLevelBetween')}</span>
                </div>
            </div>
            <table className="table table-light table-bordered">
                <thead className="border table-active">
                <tr>
                    <th>{t("criteria")}</th>
                    <th>{t("definition")}</th>
                    <th>{t("weight")}</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {rows}

                </tbody>

            </table>
        </div>

    );
}

export default TableWeigthingCriteria;