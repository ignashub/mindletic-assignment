import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const SurveyResults = () => {
    const [data, setData] = useState({
        labels: ['Quality', 'Professionalism', 'Satisfaction'],
        datasets: [
            {
                label: 'Average Rating',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    });

    useEffect(() => {
        const fetchSurveyResults = async () => {
            try {
                const response = await axios.get('/surveys/1/results'); // Replace '1' with the actual survey ID
                const aggregatedData = aggregateSurveyResults(response.data);
                setData({
                    labels: ['Quality', 'Professionalism', 'Satisfaction'],
                    datasets: [
                        {
                            label: 'Average Rating',
                            data: aggregatedData,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching survey results:', error);
            }
        };

        fetchSurveyResults();
    }, []);

    const aggregateSurveyResults = (results) => {
        const total = results.length;
        const sum = results.reduce(
            (acc, result) => {
                acc.quality += result.quality;
                acc.professionalism += result.professionalism;
                acc.satisfaction += result.satisfaction;
                return acc;
            },
            { quality: 0, professionalism: 0, satisfaction: 0 }
        );

        return [
            (sum.quality / total).toFixed(1),
            (sum.professionalism / total).toFixed(1),
            (sum.satisfaction / total).toFixed(1),
        ];
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Survey Results
            </Typography>
            <Bar data={data} />
        </Container>
    );
};

export default SurveyResults;