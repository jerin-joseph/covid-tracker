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
                    <div className="flex-container" style={{display:'flex',alignItems:'center',padding:10}}>
                        <div><img src="https://www.countryflags.io/in/shiny/64.png" style={{maxWidth:50,minWidth:50,margin:10}}/> </div>
                        <div style={{marginTop:5}}><h3>INDIA</h3></div>
                    </div>
                </div>

                <div className="col-md-12">

                     <div className="row">
                        <div className="col-md-3">
                            <Card style={{ width: '100%' }} className="badge badge-primary"> 
                                <Card.Body className="text-center">
                                    <Card.Title>TOTAL CASES</Card.Title>
                                    <h3>{this.state.data.cases} <h5>(+{this.state.data.todayCases})</h5></h3>
                                    <Card.Text>
                                     
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </div>
                        <div className="col-md-3">
                            <Card style={{ width: '100%' }} className="badge badge-warning"> 
                                <Card.Body className="text-center">
                                    <Card.Title>ACTIVE</Card.Title>
                                    <h3>{this.state.data.active} <h5>(+{this.state.data.todayCases-this.state.data.todayRecovered})</h5></h3>
                                    <Card.Text>
                                     
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </div>
                        <div className="col-md-3">
                            <Card style={{ width: '100%' }} className="badge badge-success"> 
                                <Card.Body className="text-center">
                                    <Card.Title>RECOVERED</Card.Title>
                                    <h3>{this.state.data.recovered} <h5>(+{this.state.data.todayRecovered})</h5></h3>
                                    <Card.Text>
                                     
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </div>
                        <div className="col-md-3">
                            <Card style={{ width: '100%' }} className="badge badge-danger"> 
                                <Card.Body className="text-center">
                                    <Card.Title>DEATHS</Card.Title>
                                    <h3>{this.state.data.deaths}<h5>(+{this.state.data.todayDeaths})</h5></h3>
                                    <Card.Text>
                                     
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </div>

                     </div>

                </div>
                

                
                <div className="col-md-12" style={{marginTop:30}}>
                    
                    <Statedata/>
                </div>

            </div>
        )
    }
}
export default India;
