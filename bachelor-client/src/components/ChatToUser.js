import { PaperClipIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="mx-auto w-full h-[70vh] mb-[5vh] sm:px-6 lg:px-8 overflow-y-scroll">
        Content
      </div>
      <div className="flex items-start space-x-4">
        <div className="min-w-0 flex-1">
          <form onSubmit={onSubmit}>
            <div className="border-b border-gray-200 focus-within:border-indigo-600">
              <label htmlFor="comment" className="sr-only">
                Text your message
              </label>
              <textarea
                rows={3}
                name="comment"
                id="comment"
                className="block px-10 w-full resize-none border-0 border-b border-transparent p-0 pb-2 focus:border-indigo-600 focus:ring-0 sm:text-sm"
                placeholder="Text your message..."
                defaultValue={""}
              />
            </div>
            <div className="flex justify-between pt-2">
              <div className="flex items-center space-x-5">
                <div className="flow-root">
                  <button
                    type="button"
                    className="-m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                  >
                    <PaperClipIcon className="h-6 w-6" aria-hidden="true" />
                    <span className="sr-only">Attach a file</span>
                  </button>
                </div>
                <div className="flow-root"></div>
              </div>
              <div className="flex-shrink-0">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
