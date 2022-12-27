import React from 'react';
import ApexCharts from "react-apexcharts"

const options = {

  chart: {
    id: 'fb',
    /* group: 'social', */
    type: 'candlestick',
    

    zoom: {
      enabled: true,
      type: 'x',
      autoScaleYaxis: true,
      zoomedArea: {
        fill: {
          color: '#90CAF9',
          opacity: 0.4
        },
        stroke: {
          color: '#0D47A1',
          opacity: 0.4,
          width: 1
        }
      },

    },
    background: 'none',
    foreColor: 'black',

  },

  title: {
    text: 'Candlestick',
    align: 'center',
    /* fontFamily: 'Open Sans', */
  },
  /*plotOption está sendo responsavel pela coloração dos candles*/
  plotOptions: {
    candlestick: {
      colors: {
        upward: "#1B6C39",
        downward: "#c60000"
      }
    },
    
  },


  xaxis: {
    type: 'datetime',

  },
  /* xaxis serve para configurar as propriedades do eixo x do gráfico;
  type: 'datetime' significa que é por tempo */
  yaxis: {
    title: {
      text: 'Preço (R$/MWh)'
    },
    tooltip: {
      enabled: true,
    },

  },
  /*tooltip são as caixas que ficam flutuando quando passamos o mouse em cima*/

}



const CandleTest = () => {

  const series = [{
    data: [
      {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33]
      },
      {
          x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11]
      },
      {
          x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65]
      }
    ]
  
  }]

  return (

      <ApexCharts
        options={options}
        series={series}
        type="candlestick"
        width="100%"
        height="100%"
      />

  )
}

export default CandleTest