let lagouContainer = null
export const bootstrap = async function () {
  console.log("应用正在启动")
}
export const mount = async function () {
  console.log("应用正在挂载")
  lagouContainer = document.createElement("div")
  lagouContainer.innerHTML = "Hello JSDemo"
  lagouContainer.id = "lagouContainer"
  document.body.appendChild(lagouContainer)
}
export const unmount = async function () {
  console.log("应用正在卸载")
  document.body.removeChild(lagouContainer)
}