import React from 'react';
import {useTranslation} from "react-i18next";


const RiskMatrix = () => {
    const {t} = useTranslation();
    const data = [
        {
            category: 'Category 1',
            values: [5, 10, 15, 20, 25],
        },
        {
            category: 'Category 2',
            values: [4, 8, 12, 16, 20],
        },
        {
            category: 'Category 3',
            values: [3, 6, 9, 12, 15],
        },
        {
            category: 'Category 4',
            values: [2, 3, 6, 8, 10],
        },
        {
            category: 'Category 5',
            values: [1, 2, 3, 4, 5],
        },
    ];

    const getColor = (value: number) => {
        if (value <= 4) {
            return '#46b21c';
        } else if (value <= 10) {
            return '#efd15c';
        } else {
            return '#FF0000';
        }
    };
    return (
        <div >
            <div className="col">
                <span className="col">{t('probabilityCriteria')}</span>
                <div className="row">
                    <span className="col">{t('levelOfProbability')}</span>
                    <span className="col">{t('selectLevelBetween')}</span>
                </div>
            </div>
            <table className="table">
                <tbody className="border border-dark">
                {data.map((d) => (
                    <tr className=" border border-dark" key={d.category}>
                        {d.values.map((value, i) => (
                            <td className="border border-dark text-center fs-6 style-tab" key={`${d.category}-${i}`}
                                style={{
                                    backgroundColor: getColor(value)
                                }}>
                                {value}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
};

export default RiskMatrix;
