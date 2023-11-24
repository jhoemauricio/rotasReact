import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const ContactDetails = () => {

    //obtem id vindo da rota
    const { id } = useParams();


    const navigate = useNavigate();
    //funcao que redireciona para rota Home
    const handleContact = () => {
        console.log("Contato enviado!")
        return navigate("/");
    }

    return (
        <div>
            {/*Exibe o id vindo da rota*/}
            <h1>Exibindo mais informacoes do contao: {id}</h1>
            <button onClick={handleContact}>Enviar mensagem</button>
        </div>
    )
}

export default ContactDetails;