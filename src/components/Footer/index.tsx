import React from "react";
import config from "../../../config.json"
import { BsLinkedin } from 'react-icons/bs';
import { StyledFooter } from "./styled";

export function Footer() {
    return (
        <StyledFooter>
            <p> Desenvolvido por
                <a href={config.github} target="_blank"> Gustavo Joner  <BsLinkedin fontSize={"0.7em"} /></a>
            </p>
        </StyledFooter>
    )
}