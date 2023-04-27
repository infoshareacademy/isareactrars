import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const MyBoostedForm = () => {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            name: '',
            age: '',
            comment: '',
            gender: 'męzczynza'
        }
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data, null, 2))
    }

    return <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nazwa</label>
        <input id="name" {...register('name')} />
        <label htmlFor="age">Wiek</label>
        <input id="age" type="number" {...register('age')} />
        <label htmlFor="gender">Płeć</label>
        <select id="gender" {...register('gender')}>
            <option>męzczynza</option>
            <option>kobieta</option>
            <option>inne</option>
        </select>
        <label htmlFor="comment">Komentarz</label>
        <textarea id="comment" {...register('comment')} />
        <input type="submit" value="Wyślij" />
    </Form>
}
