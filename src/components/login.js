import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SignUp} from '../actions/user'
import firebase from '../Firebase';

 class Login extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('boards');
        this.state={
            email:"",
            fullName: "",
            userName: "",
            password: "",
        }
    }
     onClick = ()=>{
         const {email,
             fullName,
             userName,
             password} = this.state;
        let data = {
            emailPhone:email,
            fullName: fullName,
            userName: userName,
            password: password
        }
        debugger
         this.ref.add(data).then((docRef) => {
             debugger
             // this.setState({
             //     title: '',
             //     description: '',
             //     author: ''
             // });
             // this.props.history.push("/")
         })
             .catch((error) => {
                 debugger
                 console.error("Error adding document: ", error);
             });
        // this.props.SignUp(data);
     }
    render() {
        const {email,
            fullName,
            userName,
            password} = this.state;
        return(
            <div  style={{display:"flex",alignItems:'center',justifyContent:"center"}}>
                <div style={{ backgroundColor: "#eee",
                    border:"1px solid #BFBFBF",
                    width: "25%",
                    margin: "4%",
                    display:"flex",
                    alignItems:"center",
                    flexDirection:'column',
                    justifyContent:"center",
                    padding:10
                    }}>
                    <h1>Instagram</h1>
                    <div>
                    <h2 style={{
                        fontWeight:500,
                        fontSize:17,
                        marginLeft: 40,
                        marginRight: 40,color:"#999",textAlign:"center"}}>Sign up to see photos and videos from your friends.</h2>
                   <form style={{display:'flex',flexDirection:'column'}} method='post'>
                       <div style={{alignContent:"center",display:'flex',
                           justifyContent:"center",marginBottom:8,marginLeft:40,marginRight:40,marginTop:8}}>
                    <button type="button" style={{backgroundColor:"#3897F0", fontWeight:500,padding:"5px 9px",textAlign:"center",
                            borderRadius:4   ,color:"#fff"}}>
                        <span style={{height:"16%",width:'16%',fontWeight:600}}>
                            Log in with Facebook
                        </span>
                    </button>
                       </div>

                       <div style={{display:'flex',flexDirection:'row',margin:"10"}}>
                           <div style={{display:'flex',flexGrow:1,flexShrink:1,height:1,backgroundColor:"#dbdbdb",marginTop:5}}></div>
                           <div style={{display:'flex',flexGrow:0,flexShrink:0,color:'#999',fontWeight:"500",marginLeft: 18,marginRight:18,fontSize:13}}>OR</div>
                           <div style={{display:'flex',flexGrow:1,flexShrink:1,height:1,backgroundColor:"#dbdbdb",marginTop:5}}></div>
                       </div>
                       <div style={{marginTop:5,marginLeft:"40",marginBottom:"6%"}}>
                           <div style={{alignItems:"center",
                               display:"flex",
                               width:"100%",
                               marginTop:5
                             }}>
                                   <input name="emailOrPhone" type="text" style={{flex:1,overflow:"hidden",display:"flex",height:10,padding:5}} placeholder='Mobile Number or Email' value={email} onChange={(email)=>this.setState({email:email.target.value})}/>
                           </div>
                           <div style={{alignItems:"center",
                               display:"flex",
                               width:"100%",marginTop:5
                             }}>
                                   <input name="fullName" type="text" style={{flex:1,overflow:"hidden",display:"flex",height:10,padding:5}} placeholder='Full Name' value={fullName} onChange={(fullName)=>this.setState({fullName:fullName.target.value})}/>
                           </div> <div style={{alignItems:"center",
                               display:"flex",
                               width:"100%",marginTop:5
                             }}>
                                   <input name="userName" type="text" style={{flex:1,overflow:"hidden",display:"flex",height:10,padding:5}} placeholder='UserName' value={userName} onChange={(userName)=>this.setState({userName:userName.target.value})}/>
                           </div>
                           <div style={{alignItems:"center",
                               display:"flex",
                               width:"100%",marginTop:5
                             }}>

                                   <input name="password" type="password" style={{flex:1,overflow:"hidden",display:"flex",height:10,padding:5}} placeholder='password' value={password} onChange={(password)=>this.setState({password:password.target.value})}/>
                           </div>
                           <div style={{alignContent:"center",display:'flex',
                               justifyContent:"center",marginBottom:8,marginLeft:40,marginRight:40,marginTop:8}}>
                               <button type="button" style={{backgroundColor:"#3897F0", fontWeight:500,padding:"5px 9px",textAlign:"center",
                                   borderRadius:4   ,color:"#fff"}} onClick={this.onClick}>
                        <span style={{height:"16%",width:'16%',fontWeight:600}}>
                            Sign Up
                        </span>
                               </button>
                           </div>
                       </div>
                   </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapState = (state) => ({auth: state.auth});

const mapDispatch = (dispatch) => ({
    SignUp
});
export default connect(mapState, mapDispatch)(Login);
