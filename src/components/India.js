import axios from 'axios'
import React from 'react'
import {Card} from 'react-bootstrap'
import Statedata from './Statedata'


class India extends React.Component{
    
    constructor(){
        super()
        this.state={
            data:{}
        }
    }

    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{

            console.log(response.data);
            this.setState({data:response.data});
        })
    }

        render(){
        return(
            <div className="row">
                <div className="col-md-12">
                <img src="https://www.countryflags.io/in/shiny/64.png"/>
                <h3>INDIA</h3>
                </div>

                <div className="col-md-12">

                     <div className="row">
                        <div className="col-md-3">
                            <Card style={{ width: '18rem' }} className="badge badge-primary"> 
                                <Card.Body className="text-center">
                                    <Card.Title>TOTAL CASES</Card.Title>
                                    <h3>{this.state.data.cases} (+{this.state.data.todayCases})</h3>
                                    <Card.Text>
                                     
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </div>
                        <div className="col-md-3">
                            <Card style={{ width: '18rem' }} className="badge badge-warning"> 
                                <Card.Body className="text-center">
                                    <Card.Title>ACTIVE</Card.Title>
                                    <h3>{this.state.data.active} (+{this.state.data.todayCases-this.state.data.todayRecovered})</h3>
                                    <Card.Text>
                                     
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </div>
                        <div className="col-md-3">
                            <Card style={{ width: '18rem' }} className="badge badge-success"> 
                                <Card.Body className="text-center">
                                    <Card.Title>RECOVERED</Card.Title>
                                    <h3>{this.state.data.recovered} (+{this.state.data.todayRecovered})</h3>
                                    <Card.Text>
                                     
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </div>
                        <div className="col-md-3">
                            <Card style={{ width: '18rem' }} className="badge badge-danger"> 
                                <Card.Body className="text-center">
                                    <Card.Title>DEATHS</Card.Title>
                                    <h3>{this.state.data.deaths}(+{this.state.data.todayDeaths})</h3>
                                    <Card.Text>
                                     
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </div>

                     </div>

                </div>
                

                <br/>
                <br/><br/><br/><br/><br/>
                <div className="col-md-12">
                    <Statedata/>
                </div>

            </div>
        )
    }
}
export default India;
