import React from 'react'
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJs} from 'chart.js/auto'
export default function Barchart({chartdata}) {
  return (
    <Bar data={chartdata} />
  )
}
