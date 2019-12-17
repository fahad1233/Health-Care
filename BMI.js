import React, { Component } from 'react'

 class BMI extends Component {

  constructor(props) {
    super(props);
    this.state = { bmi: 0, message: '', optimalweight: '', time: new Date().toLocaleTimeString() };
    this.submitMe = this.submitMe.bind(this);
    this.heightchange = this.heightchange.bind(this);
    this.weightchange = this.weightchange.bind(this);
    this.change = this.change.bind(this);  
    this.ticker = this.ticker.bind(this); 
    this.blur = this.blur.bind(this); 
    this.calculateBMI = this.calculateBMI.bind(this); 
 }


 heightchange(e){
   this.setState({height: e.target.value});
   e.preventDefault();
 }

 blur(e){
  this.calculateBMI();
 }
  weightchange(e){
   this.setState({weight: e.target.value});
   e.preventDefault();
 }

 calculateBMI(){

     var heightSquared = (this.state.height/100  * this.state.height/100);
     var bmi = this.state.weight / heightSquared;
     var low = Math.round(18.5 * heightSquared);                                                         
     var high = Math.round(24.99 * heightSquared);    
     var message = "";
     if( bmi >= 18.5  && bmi <= 24.99 ){
         message = "You are in a healthy weight range...";
     }
     else if(bmi >= 25 && bmi <= 29.9){
       message = "You are overweight...";
     }
     else if(bmi >= 30){
         message ="You are obese...";
     }
     else if(bmi < 18.5){
       message = "You are under weight...";
     }
     this.setState({message: message});  
     this.setState({optimalweight: "Your suggested weight range is between "+low+ " - "+high});    
     this.setState({bmi: Math.round(bmi * 100) / 100});   

 }

 submitMe(e) {
    e.preventDefault();
    this.calculateBMI();
 }

 ticker() {
   this.setState({time: new Date().toLocaleTimeString()})
 }

 componentDidMount(){
   setInterval(this.ticker, 60000);
 }

 change(e){
   e.preventDefault();
   console.log(e.target);
   this.setState({name: e.target.value});
 }



  render() {
    return (
      <div>
<br /><br /><br /><br /><br />

<div className="col-md-6 col-lg-6">
  <div className="our_ability_img">
    <img src="img/Cartoon_Doctor.jpg" alt="" />
  </div>
</div>
<br />
      <div className="card">
        <div className="card-header text-center">
          <h1>BMI Calculator</h1>
        </div>
          <form onSubmit={this.submitMe} className="w-50 m-auto" onsubmit="return false">
          <br /><br />
			  <div className="form-group">
			 <label>
             Enter Your Height in CM :  
            </label>
            <br />
            <input type="text" name="height" placeholder="Height in CM" className="form-control" value={this.state.height} onBlur={this.blur} onChange={this.heightchange}   />
             </div>
			  <div className="form-group">
			 <label>
             Enter Your Weight in KG :  
            </label>
            <br />
            <input type="text" name="weight" placeholder="Weight in KG" className="form-control" value={this.state.weight} onChange={this.weightchange}    />
            </div>
            <br /><br />
            <button type="submit" className="btn btn-success" onclick="getbmivalue()">Check BMI</button>
            <br /><br />
  	<h2> 
      <label>{this.state.checked} Hello {this.state.name}, It's currently  {this.state.time} in your Current Location. Your BMI is {this.state.bmi} </label>
              <label>{this.state.message}</label>
              <label>{this.state.optimalweight}</label>
             </h2>
         
          </form>
          <br /><br />
      </div>
      <div className="card-footer text-center"><h2> A healthy BMI ranges between <em>19 and  25. </em> </h2></div>
      <br /><br /><br /><br /><br />
      </div>

    )
  }
}

export default BMI
