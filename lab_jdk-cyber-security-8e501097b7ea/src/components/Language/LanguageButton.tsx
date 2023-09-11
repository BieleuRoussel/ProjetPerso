import React from 'react';
import {useTranslation} from 'react-i18next';

function LanguageButton(props: any) {
    const {t} = useTranslation();

    return (
        <button onClick={() => props.onChange(props.lang)} className="btn btn-light">
            {t(props.text)}
        </button>
    );
}


export default LanguageButton;
