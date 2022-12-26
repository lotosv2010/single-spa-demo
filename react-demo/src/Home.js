import React, { useEffect, useState } from "react"

function useToolsModule() {
  const [toolsModule, setToolsModule] = useState()
  useEffect(() => {
    System.import("@study/tools").then(setToolsModule)
  }, [])
  return toolsModule
}
const Home = () => {
  const toolsModule = useToolsModule()

  useEffect(() => {
    let subjection = null
    if (toolsModule) {
      toolsModule.sayHello("react-demo")
      subjection = toolsModule.sharedSubject.subscribe(console.log)
    }
    return () => subjection?.unsubscribe()
  }, [toolsModule])

  return <div>
    Todos home works
    <button onClick={() => toolsModule.sharedSubject.next('hello hello hello')}>sharedSubject</button>
  </div>
}
export default Home