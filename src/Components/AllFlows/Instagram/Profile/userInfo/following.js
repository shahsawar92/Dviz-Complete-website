import React from 'react'
import { RadialGauge, RadialGaugeSeries } from 'reaviz'
export default function Following() {
    const data =  [
        {
          key: 'Followings',
          data: 299
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
                    maxValue={1000}
                    series={
                      <RadialGaugeSeries arcWidth={5}  />
                    }
                    />
    )
}
