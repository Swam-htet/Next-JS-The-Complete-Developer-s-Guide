'use client';

// snippet create form
type SnippetCreateFormProps = {
     onSubmit: (data: FormData) => void;
};

const SnippetCreateForm = ({ onSubmit }: SnippetCreateFormProps) => {
     return (
          <form
               onSubmit={(e) => {
                    e.preventDefault();
                    console.log('This is e - ', e);
               }}
          >
               <div className="flex gap-5">
                    <label className="w-12" htmlFor="title">
                         Title
                    </label>
                    <input
                         type="text"
                         className="border rounded p-2 w-full"
                         placeholder="Title"
                    />
               </div>
               <div>
                    <label className="w-12" htmlFor="code">
                         Code
                    </label>
                    <textarea
                         className="border rounded p-2 w-full"
                         placeholder="Code"
                    ></textarea>
               </div>
               <button
                    className="bg-blue-200 hover:bg-blue-300 p-2 rounded"
                    type="submit"
               >
                    Create Snippet
               </button>
          </form>
     );
};

export default SnippetCreateForm;
