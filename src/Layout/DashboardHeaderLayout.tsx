import React from 'react'

export default function DashboardHeaderLayout({children}:{children?:JSX.Element}) {
  return (
    <div style={{display:"flex"}}>
        <div>Purchase</div>    
        <div>sales</div>    
        <div>stocks</div>    
        {children}
    </div>
  )
}
