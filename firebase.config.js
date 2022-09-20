import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDzkXEeAw0n9b8MmxZ03fWj-EXIebtewSk',
	authDomain: 'kami-test-8e401.firebaseapp.com',
	projectId: 'kami-test-8e401',
	storageBucket: 'kami-test-8e401.appspot.com',
	messagingSenderId: '102221878261',
	appId: '1:102221878261:web:059b6b791e02a74b7846bc',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
export default db
