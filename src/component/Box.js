import React from 'react'

const Box = (props) => {
    let result;
    if(
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
    ) {
        result = props.result === "win" ? "lose" : "win";
    } else {
        result = props.result;
    }
    return (
        /** 과제2 memo 
         * 작성한 코드
         * <div className={`box ${result === "win" ? "win" : result === "lose" ? 'lose' : ''}`}>
         * 위 코드의 문제점
         * result만 사용해도 되는 내용이었으나 불필요한 조건문 작성
         */
        <div className={`box ${result}`}>
            <h1>{props.title}</h1>
            {props.item &&
                <img src={props.item && props.item.img} className="item-img" alt="가위바위보 이미지"/>
            }
            <h2>{result}</h2>
        </div>
    )
}

export default Box
