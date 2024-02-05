import React from 'react';
import { useState } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import OnePiecePirates from '../data/OnePiece.js';
import $ from 'jquery';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let x = getRandomInt(OnePiecePirates.length);
if (x == 0) {
    x = getRandomInt(OnePiecePirates.length);
}
const randomPirate = OnePiecePirates[x];
export default function Main() {
    const [selectedOption, setSelectedOption] = useState('');
    const [count, setCount] = useState(0);
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div id="null">
            <div id='forms'>
                <form>
                    <label htmlFor="selectOption">Select an option:</label>
                    <select id="selectOption" className='form-select' value={selectedOption} onChange={handleSelectChange}>
                        <option value=''>Select a pirate</option>
                        {OnePiecePirates.map((pirate, index) => (
                            <option key={index} value={pirate.name}>  {pirate.name} </option>
                        ))}

                    </select>
                    <input type="button" value="Submit" className='btn btn-success' onClick={
                        () => {
                            if (selectedOption == '') {
                                alert('Select a pirate');
                            }
                            else {
                                let a = '';
                                for (let i = 0; i < OnePiecePirates.length; i++) {
                                    if (OnePiecePirates[i].name == selectedOption) {
                                        a = OnePiecePirates[i];
                                    }
                                }
                                setCount(count + 1);
                                console.log(randomPirate.name, selectedOption);
                                if (selectedOption === randomPirate.name) {
                                    document.getElementById('forms').innerHTML = '<h1 style="Color:Green;">DOBRZE</h1>';
                                    $('#pstro').prepend(
                                        `
                                    <tr className='guess '>
                                        <td className="a alfa --bs-success">
                                            <img src=${a.img} alt=${a.name} />
                                        </td>
                                        <td className="a alfa --bs-success">
                                            <p>${a.name}</p>
                                        </td>
                                        <td className="a alfa --bs-success">
                                            <p>${a.haki}</p>
                                        </td>
                                        <td className="a alfa --bs-success">
                                            <p>${a.bounty}</p> 
                                        </td>
                                        <td className="a alfa --bs-success">
                                            <p>${a.age}</p>
                                        </td>
                                        <td className="a alfa --bs-success">
                                            <p>${a.role}</p>
                                        </td>
                                        <td className="a alfa --bs-success">
                                            <p>${a.devilFruit}</p>
                                        </td>
                                        <td className="a alfa --bs-success">
                                            <p>${a.crew}</p>
                                        </td>

                                    </tr>`
                                    );
                                } else {
                                    $('#pstro').prepend(
                                        `
                                    <tr className='guess '>
                                        <td className="a wrong">
                                            <img src=${a.img} alt=${a.name} />
                                        </td>
                                        <td className="a" style="background-color:${a.name == randomPirate.name ? 'rgb(42, 184, 42)' : 'red'};">
                                            <p>${a.name}</p>
                                        </td>
                                        <td className="a"  style="background-color:${a.haki == randomPirate.haki ? 'rgb(42, 184, 42)' : 'red'};">
                                            <p>${a.haki}</p>
                                        </td>
                                        <td className="a"  style="background-color:${a.bounty == randomPirate.bounty ? 'rgb(42, 184, 42)' : 'red'};">
                                            <p>${a.bounty} <br> ${a.bounty == randomPirate.bounty ? '' : a.bounty > randomPirate.bounty ? 'Lower' : 'Higher'}</p>
                                        </td>
                                        <td className="a" style="background-color:${a.age == randomPirate.age ? 'rgb(42, 184, 42)' : 'red'};">
                                            <p>${a.age}<br> ${a.age == randomPirate.age ? '' : a.age > randomPirate.age ? 'younger' : 'older'}</p>
                                        </td>
                                        <td className="a" style="background-color:${a.role == randomPirate.role ? 'rgb(42, 184, 42)' : 'red'};">
                                            <p>${a.role}</p>
                                        </td>
                                        <td className="a style="background-color:${a.devilFruit == randomPirate.devilFruit ? 'rgb(42, 184, 42)' : 'red'};"">
                                            <p>${a.devilFruit}</p>
                                        </td>
                                        <td className="a " style="background-color:${a.crew == randomPirate.crew ? 'rgb(42, 184, 42)' : 'red'};">
                                            <p>${a.crew}</p>
                                        </td>
                                    </tr>`
                                    );
                                    if (count == 5) {
                                        document.getElementById('forms').innerHTML = '<h1 style="Color:Red;">KONIEC</h1>';
                                    }
                                    console.log(randomPirate.name, a.name, a.img, a.haki, a.bounty, a.age, a.role, a.devilFruit, a.crew);
                                }
                            }
                        }} />
                </form>
            </div>
            <div id='guess'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th >Image</th>
                            <th >Name</th>
                            <th >Haki</th>
                            <th >Bounty</th>
                            <th >Age</th>
                            <th >Role</th>
                            <th >Devil Fruit</th>
                            <th>Crew</th>
                        </tr>
                    </thead>
                    <tbody id='pstro'>
                    </tbody>
                </table>
            </div>
        </div>

    );
}