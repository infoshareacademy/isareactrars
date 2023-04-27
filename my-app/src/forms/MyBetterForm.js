import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const MyBetterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        comment: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formData, null, 2))
    }

    const { name, gender, age, comment } = formData;

    return <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Nazwa</label>
        <input id="name" name="name" value={name} onChange={handleChange} />
        <label htmlFor="age">Wiek</label>
        <input id="age" name="age" type="number" value={age} onChange={handleChange} />
        <label htmlFor="gender">Płeć</label>
        <select id="gender" name="gender" value={gender} onChange={handleChange}>
            <option>męzczynza</option>
            <option>kobieta</option>
            <option>inne</option>
        </select>
        <label htmlFor="comment">Komentarz</label>
        <textarea id="comment" name="comment" value={comment} onChange={handleChange} />
        <input type="submit" value="Wyślij" />
    </Form>
}