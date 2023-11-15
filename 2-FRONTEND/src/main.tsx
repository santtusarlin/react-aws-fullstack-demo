import React from "react"
import ReactDOM, { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./features/app/App"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PostsPage from "./features/posts/pages/posts-list"
import { SettingsPage } from "./features/settings/pages/settings-page"
import ErrorPage from "./components/error/error-page"
import { Counter } from "./features/counter/Counter"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: PostsPage,
//   },
//   {
//     path: "/settings",
//     Component: SettingsPage,
//   },
//   {
//     path: "/counter",
//     Component: App,
//   },
//   {
//     path: "*",
//     Component: ErrorPage,
//   },
// ])

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PostsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="counter" element={<Counter />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

let container: any = null

document.addEventListener("DOMContentLoaded", function (event) {
  if (!container) {
    container = document.getElementById("root") as HTMLElement
    const root = createRoot(container)
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <Routing></Routing>
        </Provider>
      </React.StrictMode>,
    )
  }
})

// ReactDOM.createRoot(entrypoint!).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Routing></Routing>
//     </Provider>
//   </React.StrictMode>,
