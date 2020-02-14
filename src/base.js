import firebase from 'firebase/app'
import 'firebase/database'
import Rebase from 're-base'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNlqp-E7OQIB_zm3OCn5oCSurTchywG9Q",
  authDomain: "boite-a-recettes-df386.firebaseapp.com",
  databaseURL: "https://boite-a-recettes-df386.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// This is a default export
export default base
