import { useState } from 'react';
import { AddModal } from './main';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';


export const AddModalButton = ({ refresh }: { refresh: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => {
        setIsOpen(true)
    }

    const close = () => {
        setIsOpen(false)
    }

    return (
        <>
            <Fab color="primary" sx={{ alignSelf: 'flex-end', marginTop: '15px'}} onClick={open}>
                <Icon>add</Icon>
            </Fab>
            <AddModal 
                refresh={refresh}
                isOpen={isOpen}
                close={close}
            />
        </> 
    )
}