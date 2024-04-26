export default function guardrail(mathFunction) {
  const queue = [];
  try {
    // Attempt to execute the mathFunction and store the result in the queue
    queue.push(mathFunction());
  } catch (error) {
    // If an error is thrown, store the error message in the queue
    queue.push(String(error));
  } finally {
    // In every case, add the processed message to the queue
    queue.push('Guardrail was processed');
  }
  return queue;
}
