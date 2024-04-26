export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Dummy API response'), 1000);
  });
}
