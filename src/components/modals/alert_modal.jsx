import React, { Component } from 'react'

import AlertDetail from './alert_detail'

import '../../stylesheets/alerts.scss'

class AlertModal extends Component {
  state = {
    detailView: false,
    selectedAlert: null,
  }

  componentDidMount() {
    this.props.requestAlerts()
  }

  renderAlerts() {
    if (this.state.detailView && this.state.selectedAlert) {
      return (<AlertDetail alert={this.state.selectedAlert} toggleDetail={this.toggleDetail} />)
    } else {
      let colorClass
      let alerts = Array.from(this.props.alerts).map( (alert, i) => {
        switch (alert.label) {
          case 'New': colorClass = ' blue'; break;
          case 'Improvements': colorClass = ' green'; break;
          case 'Fix': colorClass = ' pink'; break;
          default: colorClass = ' cyan';
        }
        return (
          <div key={i} className="alert-item" onClick={() => this.handleClickDetail(alert, i)}>
            <span className={"label" + colorClass}>{alert.label}</span>
            <span className="title">{alert.title}.</span>
            <span className="body">{alert.body}</span>
          </div>
        )
      })

      return (
        <div className="alert-items-container">
          <h3>Latest changes</h3>
          {alerts}
        </div>
      )
    }
  }

  handleClickDetail = (alert) => {
    console.log('ALERT', alert)
    this.setState({
      detailView: true,
      selectedAlert: alert,
    })
  }

  toggleDetail = () => {
    this.setState(prevState => ({
      detailView: !prevState.detailView
    }));
  }

  render() {
    if (!this.props.alerts) return <div>No alerts, sorry!</div>
    return (
      <div className="alerts-container">
        {this.renderAlerts()}
      </div>
    )
  }
}

export default AlertModal