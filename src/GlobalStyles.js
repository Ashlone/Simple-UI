import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
--white: #fff;
--black: #000000;
--fontBig: 2rem;
--fontMedium: 1.5rem;
--fontSmall: 1rem;
}

*{
    box-sizing: border-box;
    text-decoration: none;
    color:var(--black);
    
}

body{
margin: 0;
padding:0;

font-family: 'Poppins', sans-serif;
background: var(--black);


}

h1{
    font-size: var(--fontBig);
    
}
h3{
    font-size: var(--fontMedium);
}

p{
    font-size: var(--fontSmall);
}

`;
