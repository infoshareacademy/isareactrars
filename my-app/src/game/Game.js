import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLanguageContext } from '../contexts/LanguageContext'

const Score = styled.span`
    color: ${props => props.isRed ? 'red' : 'black'}
`;

export const Game = ({ name }) => {
    const { lang } = useLanguageContext();
    const [points, setPoints] = useState(0);

    const increase = () => { 
        setPoints(points + 5);
    }

    const decrease = () => { 
        setPoints(points - 5);
    }

    useEffect(() => {
        if (points === 50) {
            alert(`Gratulacje wygrałeś w grę ${name}!`);
            setPoints(0);
        }
    }, [points, name, setPoints])

    return (
        <>
            <h3>
                {
                    lang === 'pl'
                        ? `Witaj w grze ${name}!`
                        : `Welcome to the game ${name}!`
                }
            </h3>
            <h4>
                Twoja liczba punktów to: 
                <Score isRed={points < 0}>{points}</Score>!
            </h4>
            <div>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
        </>
    )
}