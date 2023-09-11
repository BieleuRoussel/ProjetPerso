import React from 'react';
import {useTranslation} from "react-i18next";

function Esa() {
    const {t} = useTranslation();
    return (
        <div className='esa'>
            <h1>{t('esa')}</h1>
        </div>

    );
}
export default Esa;
