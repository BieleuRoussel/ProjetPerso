import {useTranslation} from "react-i18next";
import React from "react";

function Profil() {
    const {t} = useTranslation();
    const profileData = [
        {title: 'name', type: 'text', class: "col form-control"},
        {title: 'website', type: 'text', class: "col form-control"},
        {title: 'industry', type: 'text', class: "col form-control"},
        {title: 'numEmployees', type: 'number', class: "col form-control"},
        {title: 'annualIncomes', type: 'number', class: "col form-control"},
        {title: 'annualITBudget', type: 'number', class: "col form-control"},
        {title: 'annualInfoSecuBud', type: 'number', class: "col form-control"}
    ];
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        const isNumeric = /^(?!0\d)\d*$/;
        if (!isNumeric.test(keyValue)) {
            event.preventDefault();
        }
    };
    return (
        <div className="card">
            <div className="card-header">
                <h2>{t('myorganisation')} | Organisation Name</h2>
            </div>
            <div className="card-body">
                <h3>{t('organizationProfile')}</h3>
                {profileData.map((item, index) => {
                    return (
                        <div className="row border border-dark w-50 fs-6 input-group">
                            <div className="col input-group-text">{t(item.title)}</div>
                            <input min="0" type={item.type}
                                   className={item.class}
                                   id={item.title}
                                   onKeyPress={item.type === 'number' ? handleKeyPress : undefined}

                            />
                        </div>
                    );
                })}


            </div>
        </div>
    );
}

export default Profil;