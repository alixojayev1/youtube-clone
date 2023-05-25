import { useState } from "react"
import firebase from '../../firebase';
import loginImg from '../../assets/youtubeicon.svg';
import { BiShowAlt } from 'react-icons/bi';
import '../Login/Login.css';
import { Link } from "react-router-dom"

const Login = () => {
    const [email, setEamil] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email && !password) {
            setError('Malumot Kiriting')
        } else {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
                alert('ROYXATDAN OTINGIZ')
            } catch (error) {
                if (error.code === 'auth/user-not-found') {
                    setError('user topilmadi')
                } else if (error.code === 'auth/wrong-password') {
                    setError('parol xato')
                } else {
                    setError('error.message')
                }
                setEamil('');
                setPassword('');
            }
        }
    }
    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="">
            <div className="register_card px-16 pb-4">
                <img className="card_img" src={loginImg} alt="svg" />
            </div>

            <form className="register_card" onSubmit={handleLogin}>
                <div className="" >
                    <input className="email_e" type="email" value={email} placeholder="email" onChange={(e) => setEamil(e.target.value)} />

                </div>
                <div className="" >
                    <input className="email_e" type={showPassword ? 'text' : 'password'} value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    {error}
                    <br />
                </div>

                <BiShowAlt className="icon_show text-2xl lg:block hidden   " onClick={togglePassword} />

                <div className="register_card">
                    <Link className="btn mt-2 " to='/' type="submit">Register</Link>
                </div>
            </form>
            <div className="register_card mt-4">
                <Link className="mr-6" to="/register">Ro'rxatdan o'tish</Link>
            </div>
        </div>
    )
}

export default Login;