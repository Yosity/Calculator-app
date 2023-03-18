import React, { useState} from 'react'
import "./App.css"


let App = () =>{

    // Toggle logic
    // let circle = document.getElementById("circle");
    // let [state,setState] = useState("dark");

    // let moveCircle = () =>{
    //     console.log("entered");
    //     switch(state){
    //         case "dark":
    //             circle.style.transform = "translate(20px)";
    //             setState("light");
    //             return;
    //         case "light":
    //             circle.style.transform = "translate(39px)";
    //             setState("purple");
    //             return;
    //         case "purple":
    //             circle.style.transform = "translate(0px)";
    //             setState("dark");
    //             return;
    //         default:
    //             return;
    //     }
    // }



    // Calculator logic
    let [currentNum, setCurrentNum] = useState("");
    let [prevNum, setPrevNum] = useState("");
    let [operator, setOperator] = useState("");

    let operators = ["/","*","+","-"];
    let updateScreen = (value) =>{
        if ((operators.includes(value) && currentNum === "" ) ||
            (operators.includes(value) && operators.includes(currentNum[currentNum.length-1]))
            || (value === "0" && currentNum[0]=== '0' && !currentNum.includes(".")) )
        return;
        if(value == "." && currentNum.includes("."))
        return;
        if(operators.includes(value))
            {
                setCurrentNum("");
                setOperator(value)
                if(operators.includes(operator))
                {
                    let temp = prevNum+operator+currentNum;
                    if(temp.includes(".") && (operator === "/" || operator === "*"))
                    setPrevNum(Number(eval(temp)).toFixed(2));
                    else
                    setPrevNum(Number(eval(temp)));
                    
                }else
                    setPrevNum(currentNum);
                
                return;
            }
            if(currentNum.length === 1 && currentNum === "0" && value!== ".")
                setCurrentNum(value)
            else   
                setCurrentNum(currentNum + value)
    }
    let deleteNum = () =>{
        setCurrentNum(currentNum.slice(0,-1));
    }
    let resetScreen = () =>{
        setCurrentNum("");
        setOperator("");
        setPrevNum("");
    }
    let showResult = () =>{
        let temp = prevNum+operator+currentNum;
        if( temp.includes(".") && (operator === "/" || operator === "*"))
            setCurrentNum(Number(eval(temp)).toFixed(2));
            else
            setCurrentNum(Number(eval(temp)));
        setPrevNum("");
        setOperator("");
    }

    return (
        <div>
           <header>
            <p>calculator</p>
            <div id='theme'>
                 {/* <span>THEME</span>
                <div className="toggle">
                    <div id='toggle-id'>
                        <div id='dark'>1</div>
                        <div id='light'>2</div>
                        <div id="purple">3</div>
                    </div>
                    <div id='slider' role= "button" onClick={() => {moveCircle()}}>
                        <div id='circle'></div>
                    </div>
                </div>  */}
                
            </div>
           </header>
           <main>
            <div className="screen">
            <div id='prev-exp'>
                {prevNum}
                <div id='operator'>{operator}</div>
            </div>
           <div id = "current-exp">{currentNum}</div>
           </div>
            <div className="numbers-container">
                <button onClick={ ()=>{ updateScreen("7")}} >7</button>
                <button onClick={ ()=>{ updateScreen("8")}}>8</button>
                <button onClick={ ()=>{ updateScreen("9")}}>9</button>
                <button id='del' onClick={ ()=>{ deleteNum()}}>DEL</button>
                <button onClick={ ()=>{ updateScreen("4")}}>4</button>
                <button onClick={ ()=>{ updateScreen("5")}}>5</button>
                <button onClick={ ()=>{ updateScreen("6")}}>6</button>
                <button onClick={ ()=>{ updateScreen("+")}}>+</button>
                <button onClick={ ()=>{ updateScreen("1")}}>1</button>
                <button onClick={ ()=>{ updateScreen("2")}}>2</button>
                <button onClick={ ()=>{ updateScreen("3")}}>3</button>
                <button onClick={ ()=>{ updateScreen("-")}}>-</button>
                <button onClick={ ()=>{ updateScreen(".")}}>.</button>
                <button onClick={ ()=>{ updateScreen("0")}}>0</button>
                <button onClick={ ()=>{ updateScreen("/")}}>/</button>
                <button onClick={ ()=>{ updateScreen("*")}}>x</button>
                <button id='reset' onClick={ ()=>{ resetScreen()}}>RESET</button>
                <button id='equal' onClick={ ()=>{ showResult()}}>=</button>
            </div>
           </main>
        </div>
    )
}

export default App