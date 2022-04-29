import { useState, useEffect, useCallback } from 'react'
import { getDataUrl } from './services/getDataUrl'
import '../src/styles/App.css'
import Aos from 'aos'
import Nav from './components/Nav'

function App() {
  const [repositories, setRepositories] = useState([])
  const [languages, setLanguages] = useState([])

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  async function fetchApi() {
    try {
      const data = await getDataUrl('https://api.github.com/users/leonardo-amaral/repos')
      setRepositories(data)
    }
    catch {
      console.log('Error in Fetch')
    }
  }

  async function fetchFunction(url) {
    try {
      const data = await getDataUrl(url)
      setLanguages(data)
    }
    catch {
      console.log('Error in Fetch')
    }
  }

  const callBackFunction = useCallback(async (url) => {
    // fetchFunction(url)
    const data = await getDataUrl(url)
    // setLanguages(data)
  }, [repositories])

  useEffect(() => {
    fetchApi()

  }, [])

  return (
    <>
      <div className="App" data-aos="fade-up">
        <Nav />
        <div className="all">
          <div className="repo">
            {
              repositories.map((repositorie) => {

                return (
                  <div className='box' key={repositorie.name}>
                    <div className='box-repos'>
                      <h1 className='title'>{repositorie.name}</h1>
                      <h2>{repositorie.language}</h2>
                      <h3>{repositorie.description}</h3>
                      <button onClick={() => fetchFunction(repositorie.languages_url)}>aaaaaaaa</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
