import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/joaohenriquefernandes.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alguem</strong>
              <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:11'>Cerca de uma hora atrás</time>
            </div>

            <button title='Deletar'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
