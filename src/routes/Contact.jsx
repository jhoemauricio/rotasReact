import React from 'react'
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div>
        <h1>Páginas de contatos</h1>
        {/* 5 - nested contacts */}

 {/*link passado com id para a rota */}
        <p>
          <Link to="/contact/1">Forma de contato 1</Link>
        </p>
        <p>
          <Link to="/contact/2">Forma de contato 2</Link>
        </p>
        <p>
          <Link to="/contact/3">Forma de contato 3</Link>
        </p>

    </div>
  )
}

export default Contact;