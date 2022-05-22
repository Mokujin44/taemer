import { useState } from "react"
import { Button, Card, Container, FormControl, InputGroup } from "react-bootstrap"

function Timer() {
   let [time, setTime] = useState()
   const [start, setStart] = useState(false)
   const [done, setDone] = useState(false)

   function onStart() {
      setTime(time -= 1)
   }

   function timer() {
      setStart(true)
      setTimeout(
         setInterval(onStart, 1000),
         1000
      )
   }

   function onStop() {
      setDone(true)
      setTime('')
   }

   if (time === 0) return onStop()

   return (
      <Container className='w-50'>
         {
            !start ?
               <Card>
                  <Card.Body>
                     <Card.Title>Timer</Card.Title>
                     <Card.Text>
                        Введите время (в секундах)
                     </Card.Text>
                     <InputGroup className="mb-3">
                        <FormControl placeholder="Время" onChange={
                           (event) => setTime(event.target.value)
                        } />
                     </InputGroup>
                     {
                        time > 0 ?
                           <Button onClick={timer} variant="primary">Начать!</Button>
                           :
                           <Button onClick={timer} variant="disabled" disabled>Начать!</Button>
                     }
                  </Card.Body>
               </Card>
               :
               <Card>
                  <Card.Body>
                     {!done ? <p>Timer: {time}</p> : <p>Готово!!!</p>}
                  </Card.Body>
               </Card>
         }
      </Container>
   )
}

export default Timer