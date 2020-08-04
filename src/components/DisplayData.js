import React from "react";
import { css } from 'emotion';


const color = '#fff';
const  bgColor = '#333';


const DisplayData = ({ tile }) => {
    return (
        <div key={tile.id} className={css`background: #000;`}>
        <div className={css`
            background-position: top center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
            z-index: 1;
            border-radius: 10px;
            background: ${bgColor};
            margin: 10px 0;
            color: ${color};
        `}
        >
            <img src={tile.image} alt={tile.name} className={css`border-radius: 10px;`}/>
            <div className={css`
                margin-top: -65px;
                background: #000;
                padding: 10px;
                z-index: 1;
                position: relative;
                opacity: .5;
                h2{
                    padding: 0;
                    margin: 0;
                    font-size: larger;
                }
            `}>
                <h2>{tile.name}</h2>
                <p>
                    <span>id :{tile.id} - created {tile.created} ago</span>
                </p>
            </div>
            <div className={css`
                padding: 10px 10px 0;
                font-size: 10px;
                p{
                    padding: 5px 0 10px;
                    margin: 10px 0 10px;
                    border-bottom: solid 1px dimgray;
                    span:nth-child(1){
                        text-transform: uppercase;
                    }
                    span:nth-child(2){
                        float:right;
                    }
                }
            `}>
                <p>
                    <span>Status</span>
                    <span>{tile.status}</span>
                </p>
                <p>
                    <span>Species</span>
                    <span>{tile.species}</span>
                </p>
                <p>
                    <span>Gender</span>
                    <span>{tile.gender}</span>
                </p>
                <p>
                    <span>Origin</span>
                    <span>Post-Apocalyptic {tile.origin.name}</span>
                </p>
                <p>
                    <span>Last Location</span>
                    <span>Post-Apocalyptic {tile.origin.name}</span>
                </p>
            </div>
        </div>
    </div>
    );
  };

export default DisplayData;