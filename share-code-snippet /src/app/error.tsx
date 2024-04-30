'use client';

interface ErrorPageProps {
     reset: () => void;
     error: Error;
}

export default function ErrorPage(props: ErrorPageProps) {
     return (
          <div>
               <h1>Error {props.error.message}</h1>
               <p>Oops! Something went wrong.</p>
               <button onClick={props.reset}>Go back</button>
          </div>
     );
}
