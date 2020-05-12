import React, { useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export const TaskForm = (props)=>{
    const [task, setTask] = useState('')
    const [modal, setModal] = useState(false);
    const {
        buttonLabel,
        className
      } = props;

    const toggle = () => setModal(!modal);

    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
    const handleChanges = (e) => {
        e.preventDefault();
        setTask( e.target.value );
      };


    return(
        <div>
            <Button color="success" onClick={toggle}>ADD</Button>
            <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
                <ModalHeader>Add a Task</ModalHeader>
                <ModalBody>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        props.dispatch({type:'ADD_TASK', payload:task});
                        setTask('');
                        toggle()
                        }}>
                        <input
                            name='task'
                            placeholder='Enter a task'
                            value={task}
                            onChange={handleChanges}/>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(e)=>{
                        e.preventDefault()
                        toggle()
                        props.dispatch({type:'ADD_TASK', payload:task})
                        setTask('');
                        }}>Add</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        
        </div>
    )
}