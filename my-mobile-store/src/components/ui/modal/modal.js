
import React from 'react';
import classes from './modal.module.css';
import ReactDOM from 'react-dom'


const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose} />
}
const ModalOverlay = props => {
  return <div className={classes.modal}  >
    <div className={classes.content}>
      {props.children}
    </div>
  </div>
}

const portalElement = document.getElementById('overlays');//this get the overlay div to provide to the portal where will be rendered.

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}

    </>
  );
};

export default Modal;
