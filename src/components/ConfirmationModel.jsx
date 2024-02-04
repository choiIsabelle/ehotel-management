import Modal from 'react-modal';
import styled from 'styled-components'

const customModalStyles = {
    content: {
      width: 'fit-content',
      height: 'fit-content',
      overflow: 'hidden',
      margin: 'auto',
      marginTop: '15%',
      backgroundColor: 'white'
    },
  };

  const Text = styled.span`
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  `

  const SubContainer = styled.div`
  flex-direction: column;
  display: flex;
  gap: 0.5rem;
  `
  

export const ConfirmationModel=({ isOpen, onRequestClose, message, subMessage })=>{
    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        style={customModalStyles}
        >
          <SubContainer>
            <Text>{message}</Text>
            <p>{subMessage}</p>
            <button onClick={onRequestClose}>Close</button>
          </SubContainer>
        </Modal>
      );
}