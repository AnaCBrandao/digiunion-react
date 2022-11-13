import styles from './Home.module.css'
import savings from '../../img/savings.png'
import LinkButton from '../layout/LinkButton'

function Home() {
     return(
	<div className={styles.homeContainer}>
	  <h1>Bem-vindo ao <span>Digiunion</span></h1>
	  <p>Comece a divulgar ou apoiar projetos agora mesmo!</p>
	  <p id="margem">
		<LinkButton to="/newproject" text="Criar Projeto" />
	  	<LinkButton to="/projects" text="Apoiar Projeto" />
	  </p>
	  <img src={savings} alt="savings"/>
     	</div>
	)
}

export default Home