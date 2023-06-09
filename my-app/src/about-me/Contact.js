import styles from './Contact.module.css';

export function Contact({ data: { phone, address, email} }) {
    const handleClick = () => {
        alert(`Zapraszam do mnie przy ${address.street} ${address.number}!`)
    }

    return (
        <div className={styles.container}>
            <h3>TEL</h3>
            <p>{phone}</p>
            <h3>ADRES</h3>
            <p>{address.street} {address.number}, {address.city}</p>
            <h3>EMIAL</h3>
            <p>{email}</p>
            <button onClick={handleClick}>Wyślij</button>
        </div>
    )
}
