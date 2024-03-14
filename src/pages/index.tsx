import WithLayout from '@/components/WithLayout'
import MainLayout from '@/layouts/MainLayout'
import Landing from '@/views/Landing/Landing'
import React from 'react'

const index = () => {
  return (
    <React.Fragment>
      <WithLayout layout={MainLayout} component={Landing}/>

    </React.Fragment>
  )
}

export default index