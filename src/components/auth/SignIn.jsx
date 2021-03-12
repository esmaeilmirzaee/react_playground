function SignIn() {
  return (
    <div className="">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form action="" className="mb-0 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1">
                <input type="email" id='email' name='email' className="" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input type="password" id='password' name='password' className="" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Company size
              </label>
              <div className="mt-1">
                <select type="password" id='password' name='password' className="">
                  <option value="" className="">Select size</option>
                  <option value="1" className="">1 to 10 employees</option>
                  <option value="2" className="">10 to 100 employees</option>
                  <option value="3" className="">More than 100 employees</option>
                </select>
              </div>
            </div>

            <div className="flex items-center hover:font-bold">
              <input type="checkbox" id='terms-and-privacy' name='terms-and-privacy' type='checkbox' className="roundedborder-gray-300 focus:text-indigo-500 focus:ring-indigo-500" />
              <label htmlFor="terms-and-privacy" className="ml-2 block text-sm text-gray-900">
                I agree to the
                <a href="" className="text-indigo-600 hover:text-indigo-500">{' '}Terms</a>
                {' '}and{' '}
                <a href="" className="text-indigo-600 hover:text-indigo-500">{' '}Privacy Policy</a>
              </label>
            </div>

            <div className="">
              <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Sign In</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;