export const Wrapper = (props) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {props.children}
        </div>
    )
}