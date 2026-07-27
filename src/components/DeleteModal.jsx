import React from 'react'
import './DeleteModal.css'

function DeleteModal({
    showDeleteModal, verifyPassword, setVerifyPassword, verifyDeletePassword, setShowDeleteModal
}) {
    if(!showDeleteModal) {
            return null;
        }
  return (
    <div className='modal-overlay'>
        
        {
                showDeleteModal && (
                    <div className="modal">
                        <h3>Verify Password</h3>
                        <input type="password" placeholder='Enter Password' value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)} />
                        <br /> <br />
                        <div className="modal-buttons">

                        <button className='verify-btn' onClick={verifyDeletePassword}>Verify</button>
                        <button className='cancel-btn' onClick={() => {
                            setShowDeleteModal(false);
                            setVerifyPassword("");
                        }}>Cancel</button>
                        </div>
                    </div>
                )
            }
    </div>
  )
}

export default DeleteModal