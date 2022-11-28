import React from "react";
import { StyledMenu } from "./styled";
import NextHead from "next/head";

export function Head({ title = "Plants" }) {
    return (
        <NextHead>
            <title>{title}</title>
        </NextHead>
    );
}

export default function Header(){
    return (
        <StyledMenu>
            <div>
                <img src="/images/logo.svg" />
            </div>
            <nav>
                <li>
                    <a href="/">Como fazer</a>
                    /
                </li>
                <li>
                    <a href="/">Ofertas</a>
                    /
                </li>
                <li>
                    <a href="/">Depoimentos</a>
                    /
                </li>
                <li>
                    <a href="/">Vídeos</a>
                    /
                </li>
                <li>
                    <a href="/">Meu Carrinho</a>
                </li>
            </nav>
        </StyledMenu>
    );
}