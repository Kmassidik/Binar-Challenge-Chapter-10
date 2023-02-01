import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class StaticModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidUpdate(prevProps){
    if (prevProps.isShowModal != this.props.isShowModal) {
     this.setState ({
        modal: this.props.isShowModal
     })
    }     
  }

  toggle() {
    this.props.toogleModal(!this.state.modal)
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} className="text-danger fw-bold">Warning</ModalHeader>
          <ModalBody className='text-dark fw-bold'>
            Please Check Your Email/Password Correctly
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Okay</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default StaticModal;