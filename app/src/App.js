import React from 'react';
import ReactDOM from 'react-dom';

import Logo from './components/Logo';
import Whinepad from './components/Whinepad';
import schema from './schema';

import styles from './app.css';

var data = JSON.parse(localStorage.getItem('data'));

if (!data) {
  data = {};
  schema.forEach(item => data[item.id] = item.sample);
  data = [data];
}

export default class App extends React.Component {
	render() {
	  return (
		  <div>
		  	<div className={styles.appheader}>
		  		<Logo />Welcome to Whinepad
		  	</div>
		  	<Whinepad schema={schema} initialData={data} />
		  </div>
		)

	}
}