import Modal from './UI/Modal';
import classes from './addPostModal.module.css';

const AddPostModal = (props) =>{
    return (
        <Modal onClose={props.toggleModal}>
			<div>
				<div className={classes.heading}>
					<p>Paste your instagram post URL to add it to the campaign</p>
				</div>
                <div className={classes.body}>
                    <label>URL :</label> <input className="form-control" placeholder="Enter URL here" />
                </div>
				<div className={classes.footer}>
					<button className="btn btn-warning" onClick={props.toggleModal}>Cancel</button>
					<button className="btn btn-success" onClick={props.toggleModal}>Submit</button>
				</div>
			</div>
		</Modal>
    )
}

export default AddPostModal;