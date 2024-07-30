import React from 'react'

//Import do Module css
import styles from './NotFound.module.css'

//Imagem 
import erro404 from '../../assets/erro_404.png'

//Componentes
import DefaultButton from '../../components/DefaultButton'

//React Router
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.contentContainer}>
                <span className={styles.text404}>404</span>
                <h1 className={styles.title}>Ops! Página não encontrada.</h1>
                <p className={styles.paragraph}>Tem certeza de que era isso que você estava procurando? </p>
                <p className={styles.paragraph}>Aguarde alguns instantes e recarregue a página, ou volte para a página inicial.</p>
                <div className={styles.buttonContainer} onClick={() => navigate(-1)}>
                    <DefaultButton size="lg">Voltar</DefaultButton>
                </div>
                <img
                    className={styles.imgDog}
                    src={erro404}
                    alt="Cachorro de óculos e vestido como um humano na frente de um computador"

                />
            </div>
            <div className={styles.whiteSpace}>

            </div>
        </>
    )
}

export default NotFound