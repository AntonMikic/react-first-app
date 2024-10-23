import { useOutletContext } from "react-router-dom"

function AccountsPage() {
    const [accounts,setAccounts] = useOutletContext()
  return (
    <div className="container mx-auto">
        <h1 className="text-4xl p-4">All Accounts</h1>
        <div className="w-1/2 mx-auto">
            {accounts.map(acc => {
                return (
                    <div className="flex gap-3 m-3 p-4 rounded bg-slate-500 text-white text-xl">
                        <p className="border-r pr-3">{acc.name}</p>
                        <p>{acc.email}</p>
                        <p>{acc.phone}</p>
                        <p>{acc.deposit}</p>
                        <p>{acc.cCard}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default AccountsPage