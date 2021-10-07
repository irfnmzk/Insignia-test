export default function OrderModal({ show = false }) {
  if (!show) return null;

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Customer Email
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-3 sm:col-span-3">
                    <label
                      htmlFor="paid"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Payment Status
                    </label>
                    <select
                      id="paid"
                      name="paid"
                      autoComplete="paid"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="true">Paid</option>
                      <option value="false">Not Paid</option>
                    </select>
                  </div>

                  <div className="col-span-3 sm:col-span-3">
                    <label
                      htmlFor="filled"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Fulfillment Status
                    </label>
                    <select
                      id="filled"
                      name="filled"
                      autoComplete="filled"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="true">Fulfilled</option>
                      <option value="false">Not Fulfilled</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="total"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Total Amount
                    </label>
                    <input
                      type="number"
                      name="total"
                      id="total"
                      className="mt-1 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
