import styles from '../project/ProjectForm.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import { useState } from 'react'

function ServiceForm({handleSubmit, textBtn, projectData}) {
    const [service, setService] = useState({})
    
    const submit = (e) => {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                text="Autor da doação"
                name="name"
                placeholder="Insira o nome do autor da doação"
                handleOnChange={handleChange}
            />
            <Input 
                type="number" 
                text="Valor"
                name="cost"
                placeholder="Insira o valor da doação"
                handleOnChange={handleChange}
            />
            <Input 
                type="text" 
                text="Descrição"
                name="description"
                placeholder="Descreva a doação"
                handleOnChange={handleChange}
            />
            <SubmitButton
                text={textBtn}
            />
        </form>
    )
}

export default ServiceForm