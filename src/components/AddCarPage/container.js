import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { map } from 'lodash';
import 'react-select/dist/react-select.css';
import { signUpValidate } from './../validate';
import getAllCars from './../../actions/cars';
import { postCar } from '../../actions/postCars';

/* eslint-disable */
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        mark: '',
        model: '',
        year: '',
        style: '',
        color: '',
        transmission: '',
        driveType: '',
        doors: '',
        cylinder: '',
        fuel: '', 
        milage: '',
        vinCode: '',
        comfort: [],
        seats: [],
        safety: [],
        windows: [],
        entertainment: [],
        other: [], 
        firstname:"", 
        lastname: "",
        email: "",
        phoneNumber:"",
        description: ""
     },        
     errors: {}   
    }
    this.marksList = this.marksList.bind(this)
    this.modelsList = this.modelsList.bind(this)
    this.stylesList = this.stylesList.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCeckbox = this.handleCeckbox.bind(this)
    this.onClick = this.onClick.bind(this)
    }
    handleChange = (e) => {
        this.setState({
         ...this.state,
        data: { ...this.state.data, [e.name]: e.value },
        });
    }
    handleInput = (e) => {
        console.log("jhkj", e.target.value)
        this.setState({
            ...this.state,
           data: { ...this.state.data, [e.target.name]: e.target.value },
           })
    }  
    handleCeckbox = (e) => {
        const value = [...this.state.data[e.target.name], e.target.value]
        this.setState({
            ...this.state,
           data: { ...this.state.data, [e.target.name]: value },
           });
    }  
      componentDidMount(){
        this.props.getAllCars();
      }
      marksList(){  
        const marks = []
        const mycar = map(this.props.cars.CarsList, "brand")
        .map(data=>{
         marks.push({ "value": data , "label": data, "name": "mark" })
         });
       return marks
      }
      modelsList(){
        const current =  map(this.props.cars.CarsList, data=>data);
        const models=[];
        const mycar =current.filter(word=>word.brand ===this.state.data.mark) ;
         const carModels = map(mycar, "models")
        mycar.map(data=>data.models.map(data=>{            
            models.push({ "value": data , "label": data, "name": "model" })
            }));
       return models
      }
      stylesList(elem) {
        const arr=[]
      map(this.props.cars[elem], data=> {
                arr.push({"value": data, "label": data , "name": elem })
              })
        return arr
      }
onClick(){
    const errors = signUpValidate(this.state.data);
    this.setState({errors})
    if (Object.keys(errors).length === 0) {
        postCar(this.state.data, () => {
          console.log("ok", this.state.data)
        });
      }    
}
    
  render() {
    const { description, firstname, lastname,email,phoneNumber, entertainment, other, safety, windows,mark, model, year, style, color, transmission, driveType, doors,cylinder, fuel, milage, vinCode, seats } = this.state.data;
    console.log(this.state.data.description)
    return (
        <div>
        <div class="container">
        <div class="add_form">
            <h1>Add Cars for Sale</h1>
            <form action="">
                <fieldset>
                    <legend align="center">Enter Basic Vehicle Info</legend>
                    <div class="threeRows p10 clearAfter">
                    <div class="rows" >
                    <span >Select mark </span>  
                       <Select
                        name="mark"
                        clearable = {false}
                        placeholder="select car model"
                        style={{borderRadius: "0px", height: "43px", color: "red", marginTop:"10px"}}
                        value={mark}
                        onChange={this.handleChange}
                        options={this.marksList()}
                    />
                    </div>
                    <div class="rows"  >
                    <span>Select model </span>  
                       <Select
                        name="model"
                        placeholder="select car model"
                        disabled={!mark}
                        style={{borderRadius: "0px", height: "43px", color: "red", marginTop:"10px"}}
                        value={model}
                        onChange={this.handleChange}
                        options={this.modelsList()}
                    />
                    </div>
                    <div class="rows">
                    <span >Select year </span>  
                    <div style={{marginTop:"10px"}}> 
                       <Select
                        name="year"
                        placeholder="select car year"
                        value={year}
                        style={{borderRadius: "0px", height: "43px", color: "red", marginTop:"10px"}}
                        onChange={this.handleChange}
                        options={this.stylesList("year")}
                    />
                    </div>
                    </div>
                    <div class="rows">
                    <span >Select style </span>  
                       <Select
                        name="form-field-name"
                        placeholder="select car style"
                        value={style}
                        style={{borderRadius: "0px", height: "43px", color: "red", marginTop:"10px"}}
                        onChange={this.handleChange}
                        options={this.stylesList("style")}
                    />
                    </div>
                        <div class="rows">
                            <span>Enter Vin</span>
                            <input
                                type="text"
                                style={{textAlign: "left"}}
                                placeholder="enter vin code"
                                name="vinCode"
                                value={vinCode}
                                onChange={this.handleInput}
                            />
                        </div>
                        <div class="rows">
                            <span>Enter Mileage</span>
                            <input
                                type="text"
                                placeholder="enter mileage"
                                name="milage"
                                value={milage}
                                onChange={this.handleInput}
                            />
                        </div>
                        <div class="rows">
                    <span >Select color </span>  
                       <Select
                        name="color"
                        placeholder="select car color"
                        value={color}
                        style={{borderRadius: "0px", height: "43px", color: "red", marginTop:"10px"}}
                        onChange={this.handleChange}
                        options={this.stylesList("color")}
                    />
                    </div>
                    <div class="rows">
                    <span >Transmission </span>  
                       <Select
                        name="transmission"
                        placeholder="select transmission"
                        value={transmission}
                        style={{borderRadius: "0px", height: "43px", color: "red", marginTop:"10px"}}
                        onChange={this.handleChange}
                        options={this.stylesList("transmission")}
                    />
                    </div>
                    <div class="rows">
                    <span >Drive Type </span>  
                       <Select
                        name="driveType"
                        placeholder="select drive type"
                        value={driveType}
                        style={{borderRadius: "0px", height: "43px", color: "red", marginTop:"10px"}}
                        onChange={this.handleChange}
                        options={this.stylesList("driveType")}
                    />
                    </div>
                    <div class="rows">
                    <span >Number of Doors </span>  
                       <Select
                        name="doors"
                        placeholder="select number of doors"
                        value={doors}
                        style={{borderRadius: "0px", height: "43px", color: "red", marginTop:"10px"}}
                        onChange={this.handleChange}
                        options={this.stylesList("doors")}
                    />
                    </div>
                    <div class="rows">
                    <span >Engine Cylinder </span>  
                       <Select
                        name="cylinder"
                        placeholder="select engine cylinder"
                        value={cylinder}
                        style={{borderRadius: "0px", height: "43px", color: "red", marginTop:"10px"}}
                        onChange={this.handleChange}
                        options={this.stylesList("cylinder")}
                    />
                    </div>                 
                    <div class="rows">
                    <span >Fuel Type </span>  
                       <Select
                        name="fuel"
                        placeholder="select fuel type"
                        value={fuel}
                        style={{borderRadius: "0px", height: "43px", color: "red", marginTop:"10px"}}
                        onChange={this.handleChange}
                        options={this.stylesList("fuel")}
                    />
                    </div>                 
                    </div>
                </fieldset>
                <fieldset>
                    <legend align="center">Select Your Car's Features</legend>
                    <div class="threeRows p10 clearAfter">
                        <div class="rows">
                        <p>Comfort</p>
                        <form>
                        <ul class="check_style">
                        {
                          map(this.props.cars.comfort, data=> {
                                        return( <li>
                                            <label>
                                            <input 
                                        type="checkbox"
                                        name="comfort"
                                        value={data}                                        
                                        onChange={this.handleCeckbox}
                                        />
                                        <p class="check_text">{data}</p>
                                        </label>
                                        </li>
                          )})
                                    }
                                </ul>
                        </form>
                        <p>Seats</p>
                        <form>
                        <ul class="check_style">
                        {
                          map(this.props.cars.seats, data=> {
                                        return( <li>
                                            <label>
                                            <input 
                                        type="checkbox"
                                        name="seats"
                                        value={data}                                        
                                        onChange={this.handleCeckbox}
                                        />
                                        <p class="check_text">{data}</p>
                                        </label>
                                        </li>
                          )})
                                    }
                                </ul>
                        </form>
                        </div>
                        <div class="rows">
                        <p>Safety</p>
                        <form>
                        <ul class="check_style">
                        {
                          map(this.props.cars.safety, data=> {
                                        return( <li>
                                            <label>
                                            <input 
                                        type="checkbox"
                                        name="safety"
                                        value={data}                                        
                                        onChange={this.handleCeckbox}
                                        />
                                        <p class="check_text">{data}</p>
                                        </label>
                                        </li>
                          )})
                                    }
                                </ul>
                        </form>
                        <p>Windows</p>
                        <form>
                        <ul class="check_style">
                        {
                          map(this.props.cars.windows, data=> {
                                        return( <li>
                                            <label>
                                            <input 
                                        type="checkbox"
                                        name="windows"
                                        value={data}                                        
                                        onChange={this.handleCeckbox}
                                        />
                                        <p class="check_text">{data}</p>
                                        </label>
                                        </li>
                          )})
                                    }
                                </ul>
                        </form>
                        </div>
                        <div class="rows">
                        <p>Entertainment</p>
                        <form>
                        <ul class="check_style">
                        {
                          map(this.props.cars.entertainment, data=> {
                                        return( <li>
                                            <label>
                                            <input 
                                        type="checkbox"
                                        name="entertainment"
                                        value={data}                                        
                                        onChange={this.handleCeckbox}
                                        />
                                        <p class="check_text">{data}</p>
                                        </label>
                                        </li>
                          )})
                                    }
                                </ul>
                        </form>
                        <p>Other</p>
                        <form>
                        <ul class="check_style">
                        {
                          map(this.props.cars.other, data=> {
                                        return( <li>
                                            <label>
                                            <input 
                                        type="checkbox"
                                        name="other"
                                        value={data}                                        
                                        onChange={this.handleCeckbox}
                                        />
                                        <p class="check_text">{data}</p>
                                        </label>
                                        </li>
                          )})
                                    }
                                </ul>
                        </form>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend align="center">Enter Your Contact Info</legend>
                    <div>
                        <div class="twoRows">
                            <div class="rows">
                                <span>First Name</span>
                                <input
                                type="text"
                                placeholder="First name"
                                id="firstname"
                                name="firstname"
                                value={firstname}
                                onChange={this.handleInput}
                                />
                                <div className="validate">{this.state.errors.firstname}</div>
                            </div>
                            <div class="rows">
                                <span>Last Name</span>
                                <input
                                type="text"
                                placeholder="Last name"
                                id="lastname"
                                name="lastname"
                                value={lastname}
                                onChange={this.handleInput}
                                />
                                <div className="validate">{this.state.errors.lastname}</div>
                            </div>
                            
                        </div>
                        <div class="twoRows">
                            <div class="rows check_style">
                                <span>Email Address</span>
                                <span class="right_check">
                                    <label>
                                        <input type="checkbox"/>
                                        <p class="check_text">Allow contact via email</p>
                                    </label> 
                                </span>
                                <input
                                type="text"
                                placeholder="Email Address"
                                id="email"
                                name="email"
                                value={email}
                                onChange={this.handleInput}
                                />
                                <div className="validate">{this.state.errors.email}</div>
                            </div>
                            <div class="rows check_style">
                                <span>Phone Number</span>
                                <span class="right_check">
                                    <label>
                                        <input type="checkbox"/>
                                        <p class="check_text">Allow contact via phone</p>
                                    </label> 
                                </span>
                                <input
                                type="text"
                                placeholder="Phone Number"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={this.handleInput}
                                />
                                <div className="validate">{this.state.errors.phoneNumber}</div>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend align="center">Write a Description</legend>
                    <div class="short_message">
                        <textarea name="description" id="" cols="30" rows="10" value={description}
                                onChange={this.handleInput} placeholder="Write something about your car"></textarea>
                    </div>
                </fieldset>

                <fieldset>
                    <legend align="center">Add Photos of Your Car</legend>
                    <div class="img_upload" >
                        <input id="uploadFile" placeholder="Choose File" disabled="disabled"/>
                        <div class="fileUpload btn btn_primary">
                            <span>Upload</span>
                            <input id="uploadBtn" type="file" class="upload"/>
                        </div>
                        <div class="clear"></div>
                        <p>Select the main Image</p>
                        <ul>
                            <li>   
                                <label>
                                    <img src="style/img/add_images/1 (1).jpg" alt="" />
                                    <input type="radio" name="add_img" checked="" value="add"/>
                                    <div class="main_photo">
                                        Main Photo
                                    </div>
                                </label>
                            </li>
                            <li>   
                                <label>
                                    <img src="style/img/add_images/1 (2).jpg" alt=""/>
                                    <input type="radio" name="add_img" value="add"/>
                                    <div class="main_photo">
                                        Main Photo
                                    </div>
                                </label>
                            </li>
                            <li>   
                                <label>
                                    <img src="style/img/add_images/1 (3).jpg" alt="" />
                                    <input type="radio" name="add_img" value="add"/>
                                    <div class="main_photo">
                                        Main Photo
                                    </div>
                                </label>
                            </li>
                            <li>   
                                <label>
                                    <img src="style/img/add_images/1 (4).jpg" alt="" />
                                    <input type="radio" name="add_img" value="add"/>
                                    <div class="main_photo">
                                        Main Photo
                                    </div>
                                </label>
                            </li>
                            <li>   
                                <label>
                                    <img src="style/img/add_images/1 (5).jpg" alt=""/>
                                    <input type="radio" name="add_img" value="add"/>
                                    <div class="main_photo">
                                        Main Photo
                                    </div>
                                </label>
                            </li>
                            <li>   
                                <label>
                                    <img src="style/img/add_images/1 (6).jpg" alt=""/>
                                    <input type="radio" name="add_img" value="add"/>
                                    <div class="main_photo">
                                        Main Photo
                                    </div>
                                </label>
                            </li>
                            <li>   
                                <label>
                                    <img src="style/img/add_images/1 (7).jpg" alt=""/>
                                    <input type="radio" name="add_img" value="add"/>
                                    <div class="main_photo">
                                        Main Photo
                                    </div>
                                </label>
                            </li>
                            <li>   
                                <label>
                                    <img src="style/img/add_images/1 (8).jpg" alt=""/>
                                    <input type="radio" name="add_img" value="add"/>
                                    <div class="main_photo">
                                        Main Photo
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="add_btn">
                        <input type="button" onClick={this.onClick} value="Add car"/>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      cars: state.cars,
    };
  }
  
  export default connect(mapStateToProps, { getAllCars, postCar }) (Container);

