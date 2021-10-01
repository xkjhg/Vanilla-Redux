import React from "react"
import { connect } from "react-redux"

function Detail({toDo}) {
    return (
        <div>
            <h1>{toDo?.text}</h1>
            <h3>Created at: {toDo?.id} </h3>
        </div>
    )
}

function mapStateToProps(state, ownProps) {
  const { match: { params: { id } } } = ownProps
  return {
    toDo: state.find(toDo => toDo.id === parseInt(id))
  }
}

export default connect(mapStateToProps)(Detail)
