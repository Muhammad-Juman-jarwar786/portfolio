import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCud6nUQTmzVYWEFEA76yu1IOOojFDwWn8',
  authDomain: 'portfolio-4efd4.firebaseapp.com',
  databaseURL: 'https://portfolio-4efd4-default-rtdb.firebaseio.com/',
  projectId: 'portfolio-4efd4',
  storageBucket: 'portfolio-4efd4.appspot.com',
  messagingSenderId: '503957891375',
  appId: '1:503957891375:web:536f1058bf9baf66a259da',
};

const app = initializeApp(firebaseConfig);
const DataBase = getDatabase(app);
export default DataBase;
