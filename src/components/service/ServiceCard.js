import styles from '../project/ProjectCard.module.css'

function ServiceCard({id, name, cost, description}) {

    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Valor:</span> R${cost}
            </p>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard