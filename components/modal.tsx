import Link from "next/link";
import { AddTransactionForm } from "./ui/form";

export const Modal = () => {

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">Modal Title</h3>
            <div className="mt-2 px-7 py-3">
              <AddTransactionForm />
            </div>
            <div className="flex justify-center mt-4">
  
              {/* Navigates back to the base URL - closing the modal */}
              <Link
                href="/"
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Close
              </Link>
  
            </div>
          </div>
        </div>
            <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
        <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
        </form>
        </div>
    </div>
    </dialog>
      </div>
    );
  }