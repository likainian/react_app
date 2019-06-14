import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route ,Switch} from 'react-router-dom';
import SalaryDetailPage from "./pages/salary/salarydetailpage";
import SalaryFeedbackPage from "./pages/salary/salaryfeedbackpage";

ReactDOM.render(
    <HashRouter>
        <Switch>
            //测试：http://localhost:3000/#/?month=1514736000000&part=1&name=123
            <Route exact={true} path="/"  component={SalaryDetailPage} />
            <Route exact={true} path="/feedback"  component={SalaryFeedbackPage} />
        </Switch>
    </HashRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
