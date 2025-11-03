import { useActionState } from "react";

async function increment(previousState, formData) {
  // Simulate an asynchronous operation, e.g., a server call
  await new Promise(resolve => setTimeout(resolve, 500));
  return previousState + 1;
}

export function CounterForm() {
  const [count, actionToTake] = useActionState(increment, 0);
  console.log(count);
  console.log(actionToTake);
  return (
    <form>
      <p>Current count: {count}</p>
      <button  className="bg-amber-100 py-4 px-2 cursor-pointer" formAction={actionToTake}>Increment</button>
    </form>
  );
}