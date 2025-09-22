import toast from 'react-hot-toast';

export default function Toast(subject: string, message: string) {
  return toast.custom((t) => (
    <div className="max-w-md w-full bg-gradient-to-br from-MIDDLE to-INDUSTRY shadow-lg rounded-lg flex ">
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src="https://lh3.googleusercontent.com/a/ACg8ocLYkhf8tCaLp3hnQpFzbFTWFQQ3CGyeioOdJ_bchBHUIQQ=s83-c-mo"
              alt=""
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">{subject}</p>
            <p className="mt-1 text-sm text-gray-900/80 ">{message}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-black/20">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center font-medium text-lg text-black/50 focus:outline-none focus:ring-2 focus:ring-MIDDLE"
        >
          OK
        </button>
      </div>
    </div>
  ));
}
