import axios from 'axios'
import React from 'react'
import {Card} from 'react-bootstrap'


class World extends React.Component{

    constructor(){
        super()
        this.state={
            data:{}
        }
    }

    componentDidMount(){
        axios.get("https://disease.sh/v3/covid-19/all").then(response=>{
            this.setState({data:response.data})
            //console.log(this.state.data);
    })
    }

    render(){

        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="flex-container" style={{display:'flex',alignItems:'center',padding:10}}>
                        <div><img src="globe.png" alt="WORLD" style={{maxWidth:50,minWidth:50,margin:10}}/> </div>
                        <div style={{marginTop:5}}><h3>GLOBAL</h3></div>
                    </div>
                
                
                </div>

                <div className="col-md-12">

                     <div className="row">
                        <div className="col-md-3">
                            <Card style={{ width: '100%' }} className="badge badge-primary"> 
                                <Card.Body className="text-center">
                                    <Card.Title>TOTAL CASES</Card.Title>
                                    <h3>{this.state.data.cases}</h3> <h5>(+{this.state.data.todayCases})</h5>
                                    <Card.Text>
                                     
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </div>
                        <div className="col-md-3">
                            <Card style={{ width: '100%' }} className="badge badge-warning"> 
                                <Card.Body className="text-center">
                                    <Card.Title>ACTIVE</Card.Title>
                                    <h3>{this.state.data.active} </h3><h5>(+{this.state.data.todayCases-this.state.data.todayRecovered})</h5>
                                    <Card.Text>
                                     
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </div>
                        <div className="col-md-3">
                            <Card style={{ width: '100%' }} className="badge badge-success"> 
                                <Card.Body className="text-center">
                                    <Card.Title>RECOVERED</Card.Title>
                                    <h3>{this.state.data.recovered} </h3><h5>(+{this.state.data.todayRecovered})</h5>
                                    <Card.Text>
                                     
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </div>
                        <div className="col-md-3">
                            <Card style={{ width: '100%' }} className="badge badge-danger"> 
                                <Card.Body className="text-center">
                                    <Card.Title>DEATHS</Card.Title>
                                    <h3>{this.state.data.deaths}</h3><h5>(+{this.state.data.todayDeaths})</h5>
                                    <Card.Text>
                                    
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </div>

                        

                     </div>

                </div>
            </div>
        )
    }

}
export default World;