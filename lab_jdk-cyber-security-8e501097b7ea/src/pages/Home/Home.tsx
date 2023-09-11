import React from 'react';

import './Home.css';
import {useTranslation} from "react-i18next";
import {ChartEtoile} from "../../components/ChartEtoile";
import {MultipleCircleCharts} from "../../components/MultipleCircleCharts";
import {LineChart} from "../../components/LineChart";
import CircleRadialBarChart from "../../components/CircleRadialBarChart";
import StartApexChart from "../../components/StartApexChart";


function Home() {
    const {t} = useTranslation();


    return (
        <div className="container justify-content-center">
           <div className="row my-3 ">
               <div className="col card ">
                   <div className="card-body">
                       <div className="row">
                           <div className="col">
                               <StartApexChart/>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="col card ">
                   <div className="card-body">
                       <div className="row">
                           <div className="col">
                               <CircleRadialBarChart/>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="col card ">
                   <div className="card-body">
                       <div className="row">
                           <div className="col">
                               <LineChart/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

        </div>
    );
}

export default Home;
