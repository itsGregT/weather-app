import React from 'react';

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			city: ""
		}

		this.search = this.search.bind(this);
	}

	handleInputChange = (e) => {
		this.setState({city: e.target.value}, () => {
			this.search()
		});
	}

	search = async () => {
	const {city} = this.state;
	if(!city) return
	  const url = 'https://andruxnet-world-cities-v1.p.mashape.com/?query=' + city + '&searchby=city';

	  try {
	    const response = await fetch(url, {
	      method: 'GET',
	      headers: {
	      'X-Mashape-Key': 'elJSzs80GjmshE9NIhftugGztMYXp1OqX9qjsnBm6qPbeA8ktQ',
	      'Accept': 'application/json',
	      'Content-Type': "application/json"
	      }
	    });
	    if(typeof response !== 'string') {
		   const result = await response.json();
		   console.log(result);
		}
	    
	  } catch(error) {
	    console.log('Greg Error ', error);
	  }
	}

	componentDidMount() {
	  
	}
	render() {
		
		return (
			<div>
				<input type="text" value={this.state.value} onChange={this.handleInputChange.bind(this, )} />
			</div>
		);
	}
}

export default Home;