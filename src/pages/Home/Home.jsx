import { Link } from "react-router-dom"
import React, {useState, useEffect} from "react"

import styles from './Home.module.css'
import { Card } from '../../components/Card'

export default function Home() {
  const [studentName, setStudentName] = useState("")
  const [students, setStudents] = useState([])
  

  function handleAddStudent(){
    const newStudent= {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-bt', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudents(prevState => [...prevState, newStudent])
  }

  

  return (
    <div className={styles.container}>
      <header>
        <h1>Lista de Presença</h1>
        <Link to="/sobre">Sobre</Link>
      </header>
      


      <input type="text" placeholder="Digite o nome..." onChange={(e) => setStudentName(e.target.value)}/>

      <button type="button" onClick={handleAddStudent}> 
        Adicionar
      </button>

      {
        students.map(student => <Card name={student.name} time={student.time} />)
      }

    </div>
  )
}


