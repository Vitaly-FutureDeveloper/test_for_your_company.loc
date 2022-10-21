import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
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

					<main className="App">
						<Header />

						<div className="content">
								<Routes>
									<Route path='/*' element={ <FormPage />} />
									<Route path='/pallete' element={ <PalettePage />} />
								</Routes>
						</div>

					</main>

				</React.Suspense>
			</Provider>
		</BrowserRouter>
  );
}

export default App;
