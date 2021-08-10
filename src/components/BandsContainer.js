import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {

  render() {
    console.log(this.props.bands)
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map(band => <Band delete={this.props.deleteBand} key={band.id} band={band} />)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name: name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id: id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
