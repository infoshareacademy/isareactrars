import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const MyForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [comment, setComment] = useState('');

    const handleNameChange = (event) => setName(event.target.value);
    const handleAgeChange = (event) => setAge(event.target.value);
    const handleGenderChange = (event) => setGender(event.target.value);
    const handleCommentChange = (event) => setComment(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify({ name, age, gender, comment}, null, 2))
    }
    return <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Nazwa</label>
        <input id="name" value={name} onChange={handleNameChange} />
        <label htmlFor="age">Wiek</label>
        <input id="age" type="number" value={age} onChange={handleAgeChange} />
        <label htmlFor="gender">Płeć</label>
        <select id="gender" value={gender} onChange={handleGenderChange}>
            <option>męzczynza</option>
            <option>kobieta</option>
            <option>inne</option>
        </select>
        <label htmlFor="comment">Komentarz</label>
        <textarea id="comment" value={comment} onChange={handleCommentChange} />
        <input type="submit" value="Wyślij" />
    </Form>
}