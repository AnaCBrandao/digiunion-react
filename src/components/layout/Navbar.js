import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo.png'

function Navbar() {
     return(
        <nav className={styles.navbar}>
	<Container>
	 <ul className={styles.list}>
	   <li className={styles.item}><Link to="/">
	      <img src={logo} alt="Digiunion"/>
	   </Link></li>
           <li className={styles.item}><Link to="/">Home</Link></li>
	   <li className={styles.item}><Link to="/projects">Projects</Link></li>
           <li className={styles.item}><Link to="/about">About</Link></li>
	   <li className={styles.item}><Link to="/contact">Contact</Link></li>
	 </ul>
	</Container>
	</nav>
     )
}

export default Navbar