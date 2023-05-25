import { useState } from "react";
import firebase from '../../firebase'
import '../Register/Register.css'
import loginImg from '../../assets/youtubeicon.svg'
import { Link } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email && !password && confirm) {
            setError('Iltimos malumot kiriting')
            return;
        }
        if (password !== confirm) {
            setError('Parol mos kelmadi')
            return;
        }
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
        } catch (error) {
            setError(error)
        }
        setEmail('');
        setPassword('');
        setConfirm('');
    }
    return (
        <div className="container">
           <div className="">
           <div className="register_card px-16 pb-4">
               <img className="" src={loginImg} alt="svg"  />
            </div>
            {error}
            <form className=" " onSubmit={handleSubmit}>
                <div className="register_card" >
                    <input  className="email_e" type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="register_card" >
                    <input   className="email_e" type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="register_card"  >
                    <input   className="email_e"  type="password" value={confirm} placeholder="confirm password" onChange={(e) => setConfirm(e.target.value)} />
                </div>
               <div className="register_card">
               <button className="btn" type="submit">Register</button>
               </div>
            </form>
            <div className="register_card mt-4 ">
            <Link  to="/login">Account bn kirish?</Link>
            
            </div>
           </div>
        </div>
    )

}
export default Register;