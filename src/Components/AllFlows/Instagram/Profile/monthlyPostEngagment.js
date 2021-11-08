import React from 'react'
import { RadialGauge, RadialGaugeSeries } from 'reaviz'

export default function MonthlyPostEngagment() {
    const data =  [
        {
          key: 'Monthly Post Engagments',
          data: 3504
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
                    maxValue={10000}
                    series={
                      <RadialGaugeSeries arcWidth={5}  />
                    }
                    />
    )
}
