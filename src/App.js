import { useEffect, useState } from "react";
import './App.css';

const App = () =>{

  const [tower, setTower] = useState(" ")
  const [floor, setFloor] = useState(" ")
  const [room, setRoom] = useState(" ")
  const [startTime, setStartTime] = useState(" ")
  const [endTime, setEndTime] = useState(" ")
  const [startDay, setStartDay] = useState(" ")
  const [endDay, setEndDay] = useState(" ")
  const [comment, setComment] = useState("")
  const [valid, setValid] = useState(false)
  const [startTimeError, setStartTimeError] = useState("")
  const [endTimeError, setEndTimeError] = useState("")
  const [towerError, setTowerError] = useState("")
  const [floorError, setFloorError] = useState("")
  const [roomError, setRoomError] = useState("")
  const [startDayError, setStartDayError] = useState("")
  const [endDayError, setEndDayError] = useState("")

  const floors = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
  const rooms = [1,2,3,4,5,6,7,8,9,10]

  useEffect(() => {

    if (startDay === disabledDates() && startTime < disabledTime()){
      setValid(false)
      setStartTimeError("*Стартовое время меньше реального")
    }
    else if (startTime === ""){
      setValid(false)
      setStartTimeError("*Поле пустое")
    }
    else if (startDay === endDay && startTime > endTime){
      setValid(false)
      setStartTimeError("*Стартовое время больше времени окончания брони")
    }
    else{
      setValid(true)
      setStartTimeError("")
    }

    if (endTime === ""){
      setValid(false)
      setEndTimeError("*Поле пустое")
    }
    else if (endDay === disabledDates() && endTime < disabledTime()){
      setValid(false)
      setEndTimeError("*Конечное время меньше реального")
    }
    else if (startDay === endDay && endTime < startTime){
      setValid(false)
      setEndTimeError("*Конечное время меньше стартового времени")
    }
    else{
      setValid(true)
      setEndTimeError("")
    }

    if (tower === ""){
      setValid(false)
      setTowerError("*Поле пустое")
    }
    else{
      setValid(true)
      setTowerError("")
    }

    if (floor === ""){
      setValid(false)
      setFloorError("*Поле пустое")
    }
    else{
      setValid(true)
      setFloorError("")
    }

    if (room === ""){
      setValid(false)
      setRoomError("*Поле пустое")
    }
    else{
      setValid(true)
      setRoomError("")
    }

    if (startDay === ""){
      setValid(false)
      setStartDayError("*Поле пустое")
    }
    else{
      setValid(true)
      setStartDayError("")
    }

    if (endDay === ""){
      setValid(false)
      setEndDayError("*Поле пустое")
    }
    else{
      setValid(true)
      setEndDayError("")
    }

    if (startDay > endDay){
      setValid(false)
      setEndDay("")
    }

  },[startDay,endDay,startTime,endTime, floor, room, tower])

  const click = () => {
    if (startTimeError === "" && endTimeError === "" && towerError === "" && floorError === "" && roomError === "" && startDayError === "" && endDayError === "" 
    && tower !== "" && floor !== "" && room !== "" && startTime !== "" && endTime !== "" && startDay !== "" && endDay !== ""
    && tower !== " " && floor !== " " && room !== " " && startTime !== " " && endTime !== " " && startDay !== " " && endDay !== " "){
      return true
    }
    else{
      return false
    }
  }

  const validation = () =>{
    if (tower === " "){
      setValid(false)
      setTower("")
    }
    if (floor === " "){
      setValid(false)
      setFloor("")
    }
    if (room === " "){
      setValid(false)
      setRoom("")
    }
    if (startDay === " "){
      setValid(false)
      setStartDay("")
    }
    if (endDay === " "){
      setValid(false)
      setEndDay("")
    }
    if (startTime === " "){
      setValid(false)
      setStartTime("")
    }
    if (endTime === " "){
      setValid(false)
      setEndTime("")
    }
  }

  const clearForm = () =>{
    setTower("")
    setFloor("")
    setRoom("")
    setStartDay("")
    setStartTime("")
    setEndTime("")
    setEndDay("")
    setComment("")
  }

  const disabledDates = () => {
    let today,y,m,d
    today = new Date()
    y = today.getFullYear()
    m = today.getMonth() > 9 ? today.getMonth()+1 : "0"+(today.getMonth()+1)
    d = today.getDate() > 9 ? today.getDate() : "0"+(today.getDate())
    return y+"-"+m+"-"+d
  }

  const disabledTime = () => {
    let today,min,hour
    today = new Date()
    min = today.getMinutes() > 9 ? today.getMinutes() : "0"+(today.getMinutes())
    hour = today.getHours() > 9 ? today.getHours() : "0"+(today.getHours())
    return hour+":"+min
  }

  const dateBlockStart = disabledDates()

  return (
    <div className="main">
      Форма бронирования переговорной
      <div className="first">
        <div className={towerError === "" ? "first_el" : "first_el error"}>
          {towerError}
          <select value={tower} onChange={(e) => setTower(e.target.value)} className={towerError === "" ? "select-css" : "select-css error"}>
            <option value={tower === " " ? " " : ""} disabled defaultChecked={true} key={"default"}>Выберите башню</option>
            <option key={"A"}>A</option>
            <option key={"B"}>B</option>
          </select>
        </div>
        <div className={floorError === "" ? "first_el" : "first_el error"}>
          {floorError}
          <select value={floor} onChange={(e) => setFloor(e.target.value)} className={floorError === "" ? "select-css" : "select-css error"}>
            <option value={floor === " " ? " " : ""} disabled defaultChecked={true}>Выберите этаж</option>
            {floors.map((el) => 
              <option key={el}>
                {el}
              </option>
            )}
          </select>
        </div>
        <div className={roomError === "" ? "first_el" : "first_el error"}>
          {roomError}
          <select value={room} onChange={(e) => setRoom(e.target.value)} className={roomError === "" ? "select-css" : "select-css error"}>
            <option value={room === " " ? " " : ""} disabled defaultChecked={true}>Выберите комнату</option>
            {rooms.map((el) => 
              <option key={el}>
                {el}
              </option>
            )}
          </select>
        </div>
      </div>
      <form>
        <div className={startDayError !== "" || startTimeError !== "" || endDayError !== "" || endTimeError !== "" ? "pick error" : "pick"}>
              <div className="error_item">
                {startDayError}
                <input value={startDay} type="date" min={dateBlockStart} onChange={(e) => setStartDay(e.target.value)} className={startDayError === "" ? "input-css" : "input-css error"} />
              </div>
              <div className="error_item">
                {startTimeError}
                <input value={startTime} type="time" onChange={(e) =>setStartTime(e.target.value)} className={startTimeError === "" ? "input-css" : "input-css error"} />
              </div>
              <div className="error_item">
                {endDayError}
                <input value={endDay} type="date" min={startDay !== "" ? startDay : dateBlockStart} onChange={(e) => setEndDay(e.target.value)} className={endDayError === "" ? "input-css" : "input-css error"} />
              </div>
              <div className="error_item">
                {endTimeError}
                <input value={endTime} type="time" onChange={(e) => setEndTime(e.target.value)} className={endTimeError === "" ? "input-css" : "input-css error"} />
              </div>
        </div>
        <div className="text">
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Введите комментарий к брони"/>
        </div>
        <div className="buttons">
          <button onClick={(e) =>{ 
            e.preventDefault()
            validation()
              if(click()){
              console.log(JSON.stringify(
                {
                  "Башня":tower, 
                  "Этаж":floor, 
                  "Комната":room, 
                  "День начала брони":startDay, 
                  "Время начала брони":startTime, 
                  "День конца брони":endDay, 
                  "Время конца брони":endTime, 
                  "Комментарий":comment}
                ))
            }else{
              alert("Есть ошибки в заполнении формы")
            }}}>
            Отправить
          </button>
          <button onClick={(e) => {e.preventDefault() ;clearForm()}}>
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
