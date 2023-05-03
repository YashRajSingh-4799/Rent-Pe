import { Link } from "react-router-dom"
function Loginpage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-64">

      <h1 className="text-4xl text-center mb-4 ">
        Login Karo
        </h1>

      <form className="max-w-md mx-auto">
        <input type="email" placeholder="you@email.com" />
        <input type="password" placeholder="password" />
        <button className="primary">Login</button>

        <div className="text-center py-2 text-gray-600">
            Dont have an account yet? <Link className="underline text-black" to={'/register'}>Register Now</Link> </div>
      </form>
        </div>
    </div>
  )
}

export default Loginpage
