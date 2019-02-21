import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actionTypes';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement} />
                <CounterControl label="Add 5" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstract} />
                <hr />
                <button onClick={this.props.onStoreResult}>Save Results</button>
                <ul className="results">
                    {this.props.storedResults.map(result=>(
                        <li onClick={()=>this.props.onDeleteResult(result.id)} key={result.id}>{result.value} (click to delete)</li>
                    ))}                    
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: ()=> dispatch({type: actionTypes.INCREMENT}),
        onDecrement: ()=> dispatch({type: actionTypes.DECREMENT}),
        onAdd: ()=> dispatch({type: actionTypes.ADD, value: 5}),
        onSubstract: ()=> dispatch({type: actionTypes.SUBSTRACT, value: 5}),
        onStoreResult: ()=>dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteResult: (id)=>dispatch({type: actionTypes.DELETE_RESULT, resultId: id}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);