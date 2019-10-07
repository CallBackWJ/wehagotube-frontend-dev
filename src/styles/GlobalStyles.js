import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    * {
        box-sizing:border-box;
        ::-webkit-scrollbar{
            display: none;
        }
    }
    body #root{ 
        line-height:1.4em;
        height: 100vh;
    }

    hr{
        border: solid 0.5px gainsboro;
    }

    
`;