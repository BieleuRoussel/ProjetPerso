import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import "./Login.css";
import LanguageButton from "../../components/Language/LanguageButton";


function Login() {
    const {t, i18n} = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    async function handleLanguageChange(newLanguage:any) {
        i18n.changeLanguage(newLanguage).then(r => {
            setCurrentLanguage(newLanguage);
            console.log("Language changed successfully");
            console.log("Current language:", currentLanguage);
        }).catch((error) => {
            console.error("Error while changing language:", error);
        });

    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-8 col-md-6 col-lg-4">
                    <div className="card p-5 m-5 bg-gradient logmain">

                        <div className="card-header">
                            <h1 className="text-center">{t('login')}</h1>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="col-1 border-end"></div>
                                    </div>
                                    <div className="col-auto">
                                        <LanguageButton lang="en" text={t('anglais')} onChange={handleLanguageChange}/>
                                        <div className="separator"></div>
                                        <LanguageButton lang="fr" text={t('francais')} onChange={handleLanguageChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">{t('username')}</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faUser}/></span>
                                        <input type="email" id="email" className="form-control"
                                               aria-describedby="emailHelp"/>
                                    </div>
                                    <div id="emailHelp" className="form-text">
                                        {t('example')}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">{t('password')}</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faLock}/></span>
                                        <input type="password" id="password" className="form-control"
                                               aria-describedby="emailHelp"/>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-outline-secondary w-100">
                                    {t('login')}
                                </button>
                            </form>
                        </div>

                        <div className="card-footer text-center">
                            <Link to="/" className="text-decoration-none">
                                <span>{t("forget")}</span><br/>
                            </Link>
                            <Link to="/" className="text-decoration-none ">
                                <span>{t("newaccount")}</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );

}

export default Login;
