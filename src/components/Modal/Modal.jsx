import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, TextField } from '@mui/material';
import './Modal.css'
import Swal from 'sweetalert2';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ModalCustom() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const mostrarAlertaCompra = () => {
        handleClose()
        Swal.fire({
            icon: 'success',
            title: 'Tu compra fue realizada con éxito.',
            text: ' En tu mail recibirás las instrucciones para finalizar el pago ♥ ',
            showConfirmButton: false,
            timer: 2500
          })
    }

    return (
        <div>
            <Button variant="contained" className='buttonFC' onClick={handleOpen}>Finalizar compra</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Formulario de pago
                    </Typography>
                    <Typography id="modal-modal-description" variant="body1" sx={{ mt: 2 }}>
                        Gracias por confiar en VapeLife. Completá el formulario para realizar tu pago
                    </Typography>
                    <FormControl fullWidth className='formControl'>
                        <TextField placeholder='Nombre' variant="outlined" />
                        <TextField placeholder='Apellido' variant="outlined" />
                        <TextField placeholder='Email' variant="outlined" />
                    </FormControl>
                    <div className='buttonControl'>
                        <Button color="success" variant="outlined" onClick={mostrarAlertaCompra} >Confirmar compra</Button>
                        <Button color="error" variant="outlined" onClick={handleClose}>Cancelar</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalCustom;
