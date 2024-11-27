import style from './Main.module.css'

export default function Main() {
  return (
    <main>
      <div className={style.container}>
        <div className={style.card}>
          <div>
            <img className={style.img} src='https://picsum.photos/200' />
          </div>

          <div className={style.description}>
            <h2>Titolo del post</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laborum. Quia, debitis. Ullam id natus fugit sed, ducimus dignissimos dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aut labore illum molestias deserunt sequi nulla! Dolores, iusto unde odio dolor a inventore praesentium ut distinctio, voluptates reprehenderit impedit reiciendis.</p>
            <button className={style.button}> Leggi di più</button>
          </div>

        </div>
      </div>

    </main >
  )
}