import React from 'react'
import './textField.css'

const TextField = props => {
    return (
        <div className="">
            <input name={props.name} type={props.type} className="textInput" placeholder={props.placeholder}
                   value={props.value}
                   onChange={(value)=>{props.onChange(value)}
                       // (email) =>
                       //     setEmail(email.target.value)
                       // this.setState({email: email.target.value})
                   }/>
        </div>
    )
}

export  {TextField}
