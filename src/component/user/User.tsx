import React, { FormEvent, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { addUser } from "./userAction"


function User() {
  const [myName, setName] = useState("")
  const [myJob, setJob] = useState<string>("")
  const dispatch = useAppDispatch()
  const { name, job, id, isAdded} = useAppSelector(
    (state) => state.user,
  )
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const data = {
      name: myName,
      job: myJob
    }
    dispatch(addUser(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={myName}  onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="job" value={myJob} onChange={(e) => setJob(e.target.value)} />
        <button type="submit">Добавить юзера</button>
      </form>
      {isAdded && <h4>id: {id} name:{name} job:{job}</h4>}
    </div>
  )
}

export default User
