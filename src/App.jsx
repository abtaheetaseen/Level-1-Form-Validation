import { useState } from 'react'
import './App.css'
import toast from 'react-hot-toast';

function App() {

  const [selectGuest, setSelectGuest] = useState("");
  const [age, setAge] = useState("");
  const [allData, setAllData] = useState(null);
  console.log(allData)

  const handleAge = (e) => {
    setAge(parseInt(e.target.value))
  } 
  
  const handleSelectGuest = (e) => {
    setSelectGuest(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const visitorsAge = age;
    const attendingWithGuest = selectGuest;
    const guestName = selectGuest === "Yes" ? e.target.guestName.value : "X";

    if(attendingWithGuest === "" || attendingWithGuest === null){
      return toast.error("Please select one for attending with guest")
    }

    if(visitorsAge <= 0){
      return toast.error("Age must be greater than 0")
    }

    const data = {
      name,
      email,
      visitorsAge,
      attendingWithGuest,
      guestName
    }
    setAllData(data);
  }

  return (
    <>
      <div className='flex items-center justify-center min-h-[70vh]'>
        <div>
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">

    <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="name">Name</label>
                <input id="name" type="text" name='name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="email">Email</label>
                <input id="email" type="email" name='email' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="age">Age</label>
                <input id="age" type="number" value={age} onChange={handleAge} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="guest">Attending with guest?</label>
                <select value={selectGuest} onChange={handleSelectGuest} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                        <option>Please select one</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
            </div>

          {
            selectGuest === "Yes" && (
              <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="guestName">Guest Name</label>
              <input id="guestName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
          </div>
            )
          }

        </div>

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
        </div>
      </div>

      <div>
        {
          allData ? 
          <>
            {/* <div className='text-center my-[100px] shadow-xl w-10/12 mx-auto py-5'>
              <div className='mb-5'>
                Form Data
              </div>
              <p>{allData?.name}</p>
              <p>{allData?.email}</p>
              <p>{allData?.visitorsAge}</p>
              <p>{allData?.attendingWithGuest}</p>
              <p>{allData?.guestName}</p>
            </div> */}
            <div className="overflow-x-auto w-10/12 mx-auto mb-[100px]">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Attending With Guest</th>
        <th>Guest Name</th>
      </tr>
    </thead>
    <tbody>

      <tr>
      <th>{allData?.name}</th>
              <th>{allData?.email}</th>
              <th>{allData?.visitorsAge}</th>
              <th>{allData?.attendingWithGuest}</th>
              <th>{allData?.guestName}</th>
      </tr>

    </tbody>
  </table>
</div>
          </> :
          <>
            <div className='text-center w-10/12 mx-auto mb-[100px]'>
              Please fillup the form
            </div>
          </>
        }
      </div>
    </>
  )
}

export default App
