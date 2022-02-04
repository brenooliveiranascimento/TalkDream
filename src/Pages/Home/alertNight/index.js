import React from 'react';
import { Container, Area, BtnOk, Texto } from './styles';

export default function AlertNight({close}){
    function fechar(){
        close()
    }
    return(
        <Container
        >
            <Area>
                <Texto>
                 tome cuidado com os MarePups! são criaturinhas roxas que atraem pesadelos e energia negativa, caso veja um.... Mete a mão.
                </Texto>

                <Texto 
                style={{
                    fontSize:16,
                    marginTop:10
                }}
                >
                    para cada um pego é somado um indice que poderá ser utilizado no mercado
                </Texto>
                <BtnOk
                onPress={fechar}
                > 
                    <Texto>
                        sair
                    </Texto>
                </BtnOk>
            </Area>
        </Container>
    );
}