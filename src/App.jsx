import { useState } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { memo } from 'react'
import { getDataUrl } from './services/getDataUrl'

function App() {
  const [repositories, setRepositories] = useState([])
  const [languages, setLanguages] = useState([])

  async function fetchApi() {
    try {
      const data = await getDataUrl('https://api.github.com/users/leonardo-amaral/repos')
      setRepositories(data)
      console.log(data)
    }
    catch {
      console.log('Error in Fetch')
    }
  }

  async function fetchFunction(url) {
    try {
      const data = await getDataUrl(url)
      setLanguages(data)
      console.log(data)
    }
    catch {
      console.log('Error in Fetch')
    }
  }

  const callBackFunction = useCallback(async (url) => {
    // fetchFunction(url)
    const data = await getDataUrl(url)
    // setLanguages(data)
    console.log(data)

  }, [repositories])

  useEffect(() => {
    fetchApi()

  }, [])

  return (
    <>
      <div className="App">
        <div className="repo">
          {
            repositories.map((repositorie) => {

              return (
                <div key={repositorie.name} >
                  <div className='box-repos' key={repositorie.html_url}>
                    <h1>{repositorie.name}</h1>
                    <button onClick={() => fetchFunction(repositorie.languages_url)}>aaaaaaaa</button>
                    {
                      callBackFunction(repositorie.languages_url)
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
