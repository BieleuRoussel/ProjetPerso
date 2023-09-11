import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
} from 'chart.js';
import {Radar} from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
);

export const data = {
    labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
    datasets: [
        {
            label: 'first',
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: 'rgba(0, 0, 0, 0)',
            // borderColor: 'rgb(241,235,236)',
            borderColor: 'rgb(0,0,0)',
            borderWidth: 1,
        },
        {
            label: 'first',
            data: [6, 6, 6, 6, 6, 6],
            backgroundColor: 'rgba(0, 0, 0, 0)',
            // borderColor: 'rgb(241,235,236)',
            borderColor: 'rgb(255,211,99)',
            borderWidth: 1,
        },

        {
            label: 'second',
            data: [5, 5, 7, 7, 7, 5],
            backgroundColor: 'rgba(0, 0, 0, 0)',
            // borderColor: 'rgb(241,235,236)',
            borderColor: 'rgb(255,135,99)',
            borderWidth: 1,
        },
    ],
};

export function ChartEtoile() {
    return <div className="container">
        <div className="row align-items-center h-100">
            <div className="col-10"><Radar data={data}/></div>
            <div className="col">
                <div className="fs-3 fw-bolder text-info">45%</div>
                <div className="fs-3 fw-bolder text-danger">30%</div>
            </div>
        </div>
    </div>;
}
