import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";

import './App.scss';
import store from "./redux/store";
import {Header} from "./components/Header/Header";
import LoadingSpinner from "./components/spinners/LoadingSpinner/LoadingSpinner";

const FormPage = React.lazy(() => import("./components/FormPage/FormPage"));
const PalettePage = React.lazy(() => import("./components/PalettePage/PalettePage"));


function App(){
  return (
  	<BrowserRouter>
			<Provider store={store}>

				<React.Suspense fallback={<LoadingSpinner />}>

					<div className="App">
						<div className="App-wrapper">
							<Header />

							<main className="page-main">
								<h1 className="visually-hidden">Тестовое задание</h1>
								<aside className="sidebar">
									<Routes>
										<Route path='/form' element={ <FormPage /> } />
										<Route path='/palette' element={ <PalettePage /> } />
										<Route path="/" element={<Navigate replace to="/form" />} />
									</Routes>
								</aside>
								<div className="content">
								{/* Тут будет основной контент приложения */}
								</div>
							</main>
						</div>
					</div>

				</React.Suspense>
			</Provider>
		</BrowserRouter>
  );
}

export default App;
