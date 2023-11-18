import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function ButtonSubscribe() {
    const [isSubscribe, setIsSubscribe] = useState(false)
    const notify = () => !isSubscribe ? toast.success(':D you are subscribed') : toast.error(':( you are not subscribed');
    function handleClick() {
        notify()
        return setIsSubscribe(!isSubscribe)
    }

    return (<>
        <button onClick={handleClick} className="w-full h-6 mt-4 flex justify-center items-center bg-red-600 text-black font-bold">
            {
                !isSubscribe ? 'Subscribe' : 'Unsubscribe'
            }
        </button>
        <ToastContainer />
    </>)
}