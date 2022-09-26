import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './component/NoteList';
import Search from './component/Search';
import Header from './component/Header';
import { db } from './firebase/firebase-config';
import {addDoc, collection, getDocs} from 'firebase/firestore';
import { async } from '@firebase/util';

const App = () => {
	const [notes, setNotes] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [darkMode, setDarkMode] = useState(false);
    const notesCollection = collection(db , 'notes');

  useEffect(()=>{
    const getNotes = async () => {
      const data = await getDocs(notesCollection);
      setNotes(data.docs.map((doc)=> ({...doc.data() , id: doc.id})));
      
    }
    getNotes();
  },[])

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				
        <NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;