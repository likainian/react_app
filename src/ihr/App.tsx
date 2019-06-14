import React from 'react';
import logo from '../logo.svg';
import './App.css';
import {FetchHttp} from "../http/FetchHttp";

class App extends React.Component<any,any> {
    componentWillMount() {
        console.log("tttd");
        new FetchHttp().post('/gateway/api/salary/detail/v4',{"month":1514736000000,"part":1})
            .then((res:any)=>{
            console.log("tttthen");
            console.log(res)
            })
        new FetchHttp().get('/gateway/api/company/carousel/v2')
            .then((res:any)=>{
                console.log("tttthen");
                console.log(res)
            })
    }
    render(){
        document.cookie = 'SESSION=NGU5OWYwMzEtYzI1My00N2M2LWJlNTktNDY0NzdjYmI0NWZj' as any;
        console.log(document.cookie);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }

}
export default App;
