import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import styles from './About.module.css'

export default function About(){
    const [user, setUser] = useState({
        name: "",
        avatar: "",
    })
    
    useEffect(()=> {
        fetch('https://api.github.com/users/DuhCardoso')
        .then(response => response.json())
        .then(data => {
        setUser({
            name: data.name,
            avatar: data.avatar_url
        })
        })
        .catch(erro => console.error(erro))
    }, [])
    
    return(
        <div className={styles.container}>
            <header>
                <h1>Criado Por:</h1>
                <Link to="/">Voltar</Link>
            </header>
            <div>
                <div className={styles.create}>
                    <h2>Rocketseat</h2>
                    <img 
                        src="https://cdn-images-1.medium.com/max/1200/1*TkXVfLTwsHdwpUEjGzdi9w.jpeg"
                        className={styles.avatar}
                    />
                </div>
                <p>Criadora do projeto, apresentado em suas aulas do Discorver</p>
                <a href="https://www.rocketseat.com.br" target="_blank">
                    🔗 
                </a>
            </div>
            <div>
                <div className={styles.create}>
                    <h2>{user.name}</h2>
                    <img src={user.avatar} className={styles.avatar}/>
                </div>
                <p>Aprendeu com o projeto, e criou esta pagina, criando sua rota na URL utilizando a depencencia "React-route-dom"</p>
                <a href="https://github.com/DuhCardoso" target="_blank">
                    🔗 
                </a>
            </div>
        </div>
    )

}