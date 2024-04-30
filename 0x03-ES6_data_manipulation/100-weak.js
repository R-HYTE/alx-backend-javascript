export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint object already has a count in weakMap
  let count = weakMap.get(endpoint) || 0;
  count += 1;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count);
}
