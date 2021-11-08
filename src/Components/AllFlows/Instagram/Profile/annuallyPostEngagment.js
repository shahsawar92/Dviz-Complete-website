import React from 'react'
import { RadialGauge, RadialGaugeSeries } from 'reaviz'
export default function AnnuallyPostEngagment() {
    const data =  [
        {
          key: 'Annualy Post Engagments',
          data: 34333
        }
      ]
          
    
        return (
   
                    <RadialGauge
                    data={data}
                    startAngle={0}
                    endAngle={Math.PI*2}
                    height={200}
                    width={200}
                    minValue={1}
                    maxValue={100009}
                    series={
                      <RadialGaugeSeries arcWidth={5}  />
                    }
                    />
    )
}
