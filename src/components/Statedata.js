import axios from 'axios';
import React from 'react'
import {Accordion,Card,Badge,Button} from 'react-bootstrap'



class Statedata extends React.Component{


    constructor(){
        super();
        this.state={
            stateData:{},
        }

    }

    componentDidMount(){
        axios.get("https://api.covid19india.org/state_district_wise.json").then(response=>{
            // console.log(response.data);
            this.setState({stateData:response.data});
        });
    }

    render(){

        let keys=Object.keys(this.state.stateData);
        // console.log(keys);
        // keys.shift();

        return(
            <div className="row" id="details">
                <div className="col-md-12">
                <Button variant="info" href="#details">
                State-wise Details 
                </Button>
                
                <Accordion >
                    {
                        keys.map((item,key)=>{

                            let districts= this.state.stateData[item].districtData;
                            let district_keys=Object.keys(districts);
                            // console.log(district_keys)
                            // district_keys.shift()

                            let total_active=0;
                            let total_confirmed=0;
                            let total_deaths=0;
                            let total_recovered=0;

                            let district_list=[];
                            for(let x in districts){
                                total_active+= districts[x].active;
                                total_confirmed+= districts[x].confirmed;
                                total_recovered+= districts[x].recovered;
                                total_deaths+= districts[x].deceased;
                                let ob=districts[x];
                                ob["district_name"]=x;
                                district_list.push(ob);
                            }
                            // console.log(district_list);

                            return(
                            
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey={key}>
                                    <b>{item}</b> -  Total cases: {total_confirmed}, Active: {total_active}, Recovered: {total_recovered}, Deaths: {total_deaths}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={key}>
                                    <Card.Body>
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <td>District</td>
                                                    <td>Confirmed</td>
                                                    <td>Active</td>
                                                    <td>Recovered</td>
                                                    <td>Deaths</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    district_list.map((i,k)=>{
                                                        return(
                                                            <tr>
                                                                <td>{i.district_name}</td>
                                                                <td>{i.confirmed}</td>
                                                                <td>{i.active}</td>
                                                                <td>{i.recovered}</td>
                                                                <td>{i.deceased}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                            )
                        })
                    }
                    
                         
                </Accordion>

                </div>


            </div>
        )
    }
}

export default Statedata;
