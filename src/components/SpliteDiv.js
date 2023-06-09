import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { expandDivOne } from '../redux/leftSlice';
import { expandDivTwo } from '../redux/rightSlice';

const SpliteDiv = () => {
    const widthState = useSelector(state => state.left.value);
    const right = useSelector(state => state.right.value);

    

    const dispatch =useDispatch();

    const expandDivOneHandler = (el) => {
        dispatch(expandDivOne(el))
    }

    const expandDivTwoHandler = (vl) => {
        dispatch(expandDivTwo(vl))
        console.log(dispatch(expandDivTwo(vl)))
    }

    return (
    <div className='container'>
        <div className='divOne' style={{width : widthState , border :"2px solid #000"}}>Div One</div>
        <div className='divTwo' style={{width : right , border :"2px solid #000"}}>Div Two</div>
        <div>
            <button className='btn' onClick={()=>expandDivOneHandler("100%")}>Expand Div 1</button>
            <button className='btn' onClick={()=>expandDivTwoHandler("100%")}>Expand Div 2</button>

    </div>


    </div>
)
}

export default SpliteDiv;
