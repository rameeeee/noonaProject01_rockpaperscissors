import './App.css';
import Box from './component/Box';
import { useState } from 'react';


// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위, 바위, 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3&4의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-뻘강, 비기면-검정)

const choice = {
  rock: {
    name: "Rock",
    img: "https://cdn-icons-png.flaticon.com/512/1867/1867550.png"
  },
  scissors: {
    name: "Scissors",
    img: "https://img.freepik.com/premium-vector/cute-funny-scissors-character_464314-1809.jpg"
  },
  paper: {
    name: "Paper",
    img: "https://img.freepik.com/premium-vector/bored-expression-cute-paper-characters_152558-92150.jpg"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');

  const play = (userChoice) => {
    console.log('선택됨!', userChoice);
    setUserSelect(choice[userChoice]);
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice)
    
    setResult(judgement(choice[userChoice], computerChoice))
  }
  const randomChoice = () => {
    // 객체에서 랜덤한 아이템을 선택해줘야 함
    // Math.random이라는 함수는 숫자만 리턴 가능
    // 객체 => 배열화 시키고
    // Math.random함수에서 리턴된 숫자를 배열에 인덱스랑 매치를 시켜서 랜덤 아이템을 뽑을 수 있다
    const itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 어레이로 만들어주는 함수
    console.log('itemArray', itemArray);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    console.log('random value', randomItem);
    const final = itemArray[randomItem]
    return choice[final] 
  }
  const judgement = (user, computer) => {
    console.log('user', user, 'computer', computer)
    // user === computer tie
    // user === rock, computer === "scissors" user => win
    // user === rock, computer === "paper" user => lose
    // user === scissors, computer === "paper" user => win
    // user === scissors, computer === "rock" user => lose
    // user === paper, computer === "rock" user => win
    // user === paper, computer === "scissors" user => lose

    if(user.name === computer.name) {
      return "tie"
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose"
    else if (user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose"
    else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose"
  } 

  return (
    <div className="wrap">
      <div className="box_wrap">
        <Box title="You" item={userSelect} result={result}/>
        {/* 과제1 memo 
        * 작성한 코드
        * <Box title="computer" item={computerSelect} result={result === '' ? '' : result === 'tie' ? 'tie' : result === 'win' ? 'lose' : 'win'}/>
        * 위 코드의 문제점
        * title이 computer가 아닌 You인 경우에도 조건문대로 result가 나오게됨
        */}
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className="btn_wrap">
          <button onClick={() => play("scissors")}>가위</button>
          <button onClick={() => play("rock")}>바위</button>
          <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
