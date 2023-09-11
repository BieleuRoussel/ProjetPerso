import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip);

export const data = {
    labels: [''],
    datasets: [
        {
            label: '# of Votes',
            data: [12],
            backgroundColor: [
                'rgba(0, 0, 0, 0)'
            ],
            borderColor: [
                'rgba(255, 99, 0, 1)'
            ],
            borderWidth: 1,
        },
    ],
};

export function MultipleCircleCharts() {
    return <Pie data={data} />;
}
