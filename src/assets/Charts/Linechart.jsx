import React from 'react'
import {Line} from 'react-chartjs-2';
import {Chart as ChartJs} from 'chart.js/auto'
export default function Linechart({chartdata}) {
  return (
    <Line data={chartdata} />
  )
}
