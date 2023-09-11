import React from 'react';
import {useTranslation} from "react-i18next";

function Framework() {
    const {t} = useTranslation();
    return (
        <div className='framework'>
            <h1>{t('framework')}</h1>
        </div>

    );
}
export default Framework;
