import React from 'react'
import { inject, observer } from 'mobx-react'

import Table from '../../components/Table'
import CarMakeForm from './CarMakeForm'

class CarMakeListPage extends React.Component {
  render() {
    const { carMakes, deleteCarMake } = this.props.CarMakePageStore
    return (
      <div className="container">
        <h1>Car List App</h1>
        <div className="row">
          <div className="five columns">
            <div>
              <CarMakeForm />
            </div>
          </div>
          <div className="seven columns">
            <h2>View car makes</h2>
            <Table
              name="cars make"
              headings={['ID', 'Name']}
              data={carMakes.map((carMake) => [carMake.id, carMake.name])}
              onDelete={(id) => deleteCarMake(id)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default inject('CarMakePageStore')(observer(CarMakeListPage))
