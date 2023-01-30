const Login = () => {
    return (
        <div className="w-full text-center">
            <p className="m-2 p-2 font-bold text-3xl">Login</p>
            <div>
                <input placeholder="username" className="p-2 m-2 border" />
            </div>
            <div>
                <input placeholder="password" className="p-2 m-2 border" />
            </div>
            <button className="m-2 p-2 px-4 text-white rounded-md bg-blue-400">Submit</button>
        </div>
    )
}

export default Login;