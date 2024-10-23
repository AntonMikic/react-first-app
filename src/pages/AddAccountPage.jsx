
function AddAccountPage() {
  return (
    <div className="container mx-auto">
        <h1 className="text-4xl p-4">Add New Account</h1>
        <div className="w-1/2 mx-auto">
            <form>
                    <input className="border w-full p-2 m-0 rounded mb-3" type="text" id="name" name="name" placeholder="name"/>
                    <input className="border w-full p-2 m-0 rounded mb-3" type="text" id="email" name="email" placeholder="email"/>
                    <input className="border w-full p-2 m-0 rounded mb-3" type="text" id="phone" name="phone" placeholder="phone"/>
                    <input className="border w-full p-2 m-0 rounded mb-3" type="text" id="deposit" name="deposit" placeholder="deposit"/>
                    <input className="border w-full p-2 m-0 rounded mb-3" type="text" id="cCard" name="cCard" placeholder="cCard"/>
                <button className="w-full p-2 border rounded bg-slate-800 text-yellow-50">Save</button>
            </form>
        </div>
    </div>
  )
}

export default AddAccountPage