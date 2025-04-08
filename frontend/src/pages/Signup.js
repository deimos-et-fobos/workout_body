import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Signup = () => {
  const {signup, dispatch} = useAuthContext();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, password);
    
  }

  // useEffect(() => {
  //   const fetchWorkouts = async () => {
  //     const response = await fetch('/api/signup');
  //     const json = await response.json();

  //     if (response.ok) {
  //       dispatch({type: 'SET_WORKOUTS', payload: json})
  //     }
  //   }

  //   fetchWorkouts()
  // }, [dispatch]) // no hay problema con agregar dispatch porque es estable.

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <label>Email:</label>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        // className={emptyFields.includes('email') ? 'error' : ''}
      />

      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        // className={emptyFields.includes('password') ? 'error' : ''}
      />
      <button>Sign up!</button>
    </form>
  )
}

export default Signup;