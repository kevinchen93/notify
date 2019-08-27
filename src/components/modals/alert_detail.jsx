import React from 'react'

const AlertDetail = ({ toggleDetail, alert }) => {
  let colorClass
  switch (alert.label) {
    case 'New': colorClass = ' blue'; break;
    case 'Improvements': colorClass = ' green'; break;
    case 'Fix': colorClass = ' pink'; break;
    default: colorClass = ' cyan';
  }
  return (
    <div className="detail-wrapper slide">
      <div className="alert-detail">
        
        <div className="back-button" onClick={() => toggleDetail()}></div>
        <h3>{alert.title}</h3>
        <div className="content">
          <span className={"label" + colorClass}>{alert.label}</span>
          <p className="body">{alert.body}</p>
          <img className="detail-image" src={alert.image} alt="detail" />
        </div>
      </div>
    </div>
  )
}

export default AlertDetail