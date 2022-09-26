import { db } from '../firebase/firebase-config';
import { doc, deleteDoc } from 'firebase/firestore';
import {MdDeleteForever} from 'react-icons/md';


const Note = ({id, text , date , handleDeleteNote}) => {
    const deleteNote = async (id)=>{
        const noteDoc = doc(db,'notes',id);
        await deleteDoc(noteDoc);

    }
    return (
        <div className="note">
            <span> {text}</span>
            <div className="note-footer">
                <small> {date}</small>
                <MdDeleteForever onClick={()=> deleteNote(id)} className='delete-icon' size= '1.3em'/>
                
                 </div>
             </div>
    )
}
export default Note;