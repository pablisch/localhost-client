export default process.env.NODE_ENV === 'deploy'
  ? 'http://localhost:3000/api/v1.0' // deployed API base URL
  : 'http://localhost:3000/api/v1.0' // localhost base URL