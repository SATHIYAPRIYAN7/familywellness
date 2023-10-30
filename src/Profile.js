import React from 'react'

function Profile() {
  return (
    
    <div className="flex items-center flex-col w-52  h-4/5 bg-slate-800 bg-opacity-60 min-h-screen ">
        <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg" class="rounded-full w-40 mt-5" ></img>
        <h1 class="my-4 bg-slate-800 text-white font-bold text-lg bg-opacity-0">Sathiyapriyan K</h1>
        <div className="bg-slate-800  text-white w-36 mb-4 rounded-xl text-center">Hello,World!</div>
        <div className="border-2 w-2/3"></div>

        <div class="mt-10 flex">
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/786/786017.png" class=" w-5"></img>
            </div>
            <div >
                <p >AGE</p>
                <p>29 years old</p>
            </div>
        </div>
       
    </div>
  )
}

export default Profile