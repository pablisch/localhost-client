export default process.env.NODE_ENV === 'deploy'
  ? 'http://localhost:3000' // deployed API base URL
  : 'http://localhost:3000' // localhost base URL