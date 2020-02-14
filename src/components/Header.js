import React from 'react';

const Header = ({ pseudo }) => {
    // On check dans une fonction si la 1ère lettre du pseudo est une voyelle. Si oui on renvoit 'd'PSEUDO' sinon on renvoit 'de PSEUDO' (i après le slash rend la regex insensible à la casse)
    const formatPseudo = (pseudo) => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
    return ( 
        <header>
            <h1>La boîte à recettes { formatPseudo(pseudo) }</h1>
        </header>
     );
}
 
export default Header;