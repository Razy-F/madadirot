"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ContentWrapper } from "."
import {  chartoptions } from '@/lib/database/data';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  return (
    <h1>Chart</h1>
   /*  <ContentWrapper>
        <Line options={chartoptions} data={chartSettings} />
    </ContentWrapper> */
  )
}
