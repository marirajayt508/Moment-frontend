import React,{useState,useEffect} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export default function User(props) {
  const [fn,setFn] = useState('')
  const [ln,setLn] = useState('')
  const [ph,setPh] = useState('')
  const [pass,setPass] = useState('')
  const [mail,setMail] = useState('')
  const [city,setCity] = useState('')
  const [cc,setCc] = useState('+91')
  const [error,setError] = useState({})
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
 
const addUserData =  ()=>{
  let data = {
    firstname : fn,
    lastname : ln,
    phone : cc+ph,
    city : city,
    password : pass,
    email : mail
  }
  let temp = true;
  if(!fn.trim())
  {
toast.error("Please Enter First Name")
temp = false;
  }
  if(!ln.trim())
  {
    toast.error("Please Enter Last Name")
    temp = false;
  }
  if(!ph)
  {
    toast.error("Please Enter Phone Number")
    temp = false;
  }
  else if(ph.trim().length !=10)
  {
    toast.error("Please Enter Valid Phone Number")
    temp = false;
  }
  if(!city.trim())
  {toast.error("Please Enter City")
  temp = false;
  }

  if(!mail.trim())
  {
    toast.error("Please Enter Mail")
    temp = false;
  }
  else if(!mail.trim().includes('@'))
  {
    toast.error("Please Enter Proper Mail")
    temp = false;
  }
  if(!pass.trim())
  {
    toast.error("Please Enter Password")
    temp = false;
  }
  else if(!pass.trim())
  {
    toast.error("Please Enter Password above 8 Char")
    temp = false;
  }
if(temp)
{   axios.post("http://localhost:5000/adduser",data).then((res)=>{
    toast.success("User Added")
    navigate("/moment")
    sessionStorage.setItem("user",fn+" "+ln)
  }).catch((e)=>{
    toast.error("Fill all Fields or Check Your Network ")
  })
}}

  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bafed6af-8138-4790-86de-37d02c679ac5?"
          className="img"
        />
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">Sign Up</div>
            <div className="div-5">
              <div className="div-6">
                <div className="column">
                  <div className="div-7">
                    <div className="div-8">First Name</div>
                    <div className="div-9">
                      <div className="div-10">
                     
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9999c710-a2aa-4c40-b058-bb8ae8bbe390?"
                          className="img-2"
                        />
                        <div className="div-11" />
                      </div>
                      <div className="div-12">
                        {/* <div className="div-13"> */}
                          <TextField id="standard-basic" error={error.fn} variant="standard" onChange={(e)=>{
                            setFn(e.target.value)
                          }}/>
                          {/* </div> */}
                        {/* <div className="div-14" /> */}
                      </div>
                    </div>
                    <div className="div-15">Mobile No.</div>
                    <div className="div-16">
                      <div className="div-17">
                     <select className="form-control" onChange={(e)=>setCc(e.target.value)}>
                      <option value="+91">India - +91</option>
                      <option value="+1">US - +1</option>
                     </select>
                        <div className="div-18">
                          {/* <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d52d21d3-78f2-4cc0-b147-e94b20ae4f55?"
                            className="img-3"
                          />
                           */}
                          <div className="div-19">
                          
                            {/* <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/486b39e5-b728-49a9-93c9-ba3b5f724c51?"
                              className="img-4"
                            /> */}
                          </div>
                        </div>
                        {/* <div className="div-21" /> */}
                      </div>
                      <div className="div-30">
                      <TextField id="standard-basic" error={error.pn} type="number" inputProps={{ maxLength: 10 }} variant="standard"  onChange={(e)=>{
                            setPh(e.target.value)
                          }}/>
                        {/* <div className="div-24" /> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column-2">
                  <div className="div-25">
                    <div className="div-26">Last Name</div>
                    <div className="div-27">
                      <div className="div-28">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e095520-077c-4d2a-9953-433f8d27be34?"
                          className="img-5"
                        />
                        <div className="div-29" />
                      </div>
                      <div className="div-30">
                      <TextField id="standard-basic" error={error.ln} variant="standard"  onChange={(e)=>{
                            setLn(e.target.value)
                          }}/>
                        {/* <div className="div-32" /> */}
                      </div>
                    </div>
                    <div className="div-33">Email-ID</div>
                    <div className="div-34">
                      <div className="div-35">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b03d757-1845-420a-91d7-e665d0636a50?"
                          className="img-6"
                        />
                        <div className="div-36" />
                      </div>
                      <div className="div-37">
                      <TextField id="standard-basic" error={error.mail} type="email" variant="standard"  onChange={(e)=>{
                            setMail(e.target.value)
                          }}/>
                        {/* <div className="div-39" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-40">
              <div className="div-41">
                <div className="div-42">City</div>
                <div className="div-43"><TextField id="standard-basic" error={error.city} variant="standard" onChange={(e)=>{
                            setCity(e.target.value)
                          }}/></div>
                {/* <div className="div-44" /> */}
              </div>
              <div className="div-45">
                <div className="div-46">Enter Password</div>
                <div className="div-47">
                  <div className="div-48">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d34c7478-2aa0-4fce-afcd-557cc98b8dd6?"
                      className="img-7"
                  />
                    <div className="div-49" />
                  </div>
                  <div className="div-50">
                 
                    <div className="div-51">
                      <div className="div-52"><TextField id="standard-basic" error={error.pass} type={showPassword ? "text" : "password"} variant="standard"  onChange={(e)=>{
                            setPass(e.target.value)
                          }} /></div>
                      <Button onClick={() => setShowPassword(s => !s)}><img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4f6960c-a31d-4a2d-8fa6-ce87d42d9c37?"
                        className="img-8"
                        
                      /> {showPassword ? "Hide" : 'Show'}</Button>
                    </div>
                    {/* <div className="div-53" /> */}
                  </div>
                </div>
              </div>
            </div>
            <button className="div-54" onClick={()=>{
              addUserData( )
            }}>Submit</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #001b30;
          display: flex;
          flex-direction: column;
        }
        .img {
          aspect-ratio: 1.12;
          object-fit: contain;
          object-position: center;
          width: 105px;
          overflow: hidden;
          align-self: center;
          margin-top: 50px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .img {
            margin-top: 40px;
          }
        }
        .div-2 {
          border-radius: 37px 37px 0px 0px;
          background-color: #fff;
          align-self: stretch;
          display: flex;
          margin-top: 45px;
          width: 100%;
          flex-direction: column;
          padding: 42px 80px 55px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-3 {
          align-self: center;
          display: flex;
          width: 859px;
          max-width: 100%;
          flex-direction: column;
        }
        .div-4 {
          color: #001b30;
          align-self: center;
          white-space: nowrap;
          font: 700 40px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-4 {
            white-space: initial;
          }
        }
        .div-5 {
          align-self: stretch;
          margin-top: 66px;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-6 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-6 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 52%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-7 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-7 {
            margin-top: 40px;
          }
        }
        .div-8 {
          color: #4f4f4f;
          align-self: stretch;
          white-space: nowrap;
          font: 500 14px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-8 {
            white-space: initial;
          }
        }
        .div-9 {
          align-self: stretch;
          display: flex;
          margin-top: 15px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 11px;
        }
        .div-10 {
          align-self: start;
          display: flex;
          flex-direction: column;
          width: 51px;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
        }
        .div-11 {
          background-color: #dbdbdb;
          align-self: stretch;
          margin-top: 11px;
          width: 100%;
          height: 1px;
        }
        .div-12 {
          align-self: start;
          display: flex;
          margin-top: 7px;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: auto;
          width: 303px;
        }
        .div-13 {
          color: #1a1a1a;
          align-self: stretch;
          white-space: nowrap;
          font: 400 15px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-13 {
            white-space: initial;
          }
        }
        .div-14 {
          background-color: #dbdbdb;
          align-self: stretch;
          margin-top: 17px;
          width: 100%;
          height: 1px;
        }
        .div-15 {
          color: #4f4f4f;
          align-self: stretch;
          margin-top: 46px;
          white-space: nowrap;
          font: 500 14px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-15 {
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-16 {
          align-self: stretch;
          display: flex;
          margin-top: 16px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 13px;
        }
        .div-17 {
          align-self: start;
          display: flex;
          flex-direction: column;
        }
        .div-18 {
          align-self: start;
          display: flex;
          margin-left: 10px;
          width: 91px;
          max-width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }
        .img-3 {
          aspect-ratio: 1.55;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex: 1;
        }
        .div-19 {
          align-self: center;
          display: flex;
          align-items: flex-start;
          gap: 7px;
          margin: auto 0;
        }
        .div-20 {
          color: #262626;
          align-self: start;
          font: 400 15px Maven Pro, sans-serif;
        }
        .img-4 {
          aspect-ratio: 2;
          object-fit: contain;
          object-position: center;
          width: 100%;
          fill: #000;
          overflow: hidden;
          flex: 1;
        }
        .div-21 {
          background-color: #dbdbdb;
          align-self: start;
          margin-top: 12px;
          width: 104px;
          height: 1px;
        }
        .div-22 {
          align-self: start;
          display: flex;
          margin-top: 6px;
          flex-direction: column;
          width: 248px;
        }
        .div-23 {
          color: #1a1a1a;
          align-self: stretch;
          white-space: nowrap;
          font: 400 15px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-23 {
            white-space: initial;
          }
        }
        .div-24 {
          background-color: #dbdbdb;
          align-self: stretch;
          margin-top: 16px;
          width: 100%;
          height: 1px;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 48%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-25 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-25 {
            margin-top: 40px;
          }
        }
        .div-26 {
          color: #4f4f4f;
          align-self: stretch;
          white-space: nowrap;
          font: 500 14px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-26 {
            white-space: initial;
          }
        }
        .div-27 {
          align-self: stretch;
          display: flex;
          margin-top: 15px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 11px;
        }
        .div-28 {
          align-self: start;
          display: flex;
          flex-direction: column;
          width: 51px;
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
        }
        .div-29 {
          background-color: #dbdbdb;
          align-self: stretch;
          margin-top: 11px;
          width: 100%;
          height: 1px;
        }
        .div-30 {
          align-self: start;
          display: flex;
          margin-top: 8px;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: auto;
          width: 303px;
        }
        .div-31 {
          color: #1a1a1a;
          align-self: stretch;
          white-space: nowrap;
          font: 400 15px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-31 {
            white-space: initial;
          }
        }
        .div-32 {
          background-color: #dbdbdb;
          align-self: stretch;
          margin-top: 14px;
          width: 100%;
          height: 1px;
        }
        .div-33 {
          color: #4f4f4f;
          align-self: stretch;
          margin-top: 48px;
          white-space: nowrap;
          font: 500 14px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-33 {
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-34 {
          align-self: stretch;
          display: flex;
          margin-top: 15px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 11px;
        }
        .div-35 {
          align-self: start;
          display: flex;
          flex-direction: column;
          width: 51px;
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
        }
        .div-36 {
          background-color: #dbdbdb;
          align-self: stretch;
          margin-top: 7px;
          width: 100%;
          height: 1px;
        }
        .div-37 {
          align-self: start;
          display: flex;
          margin-top: 5px;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: auto;
          width: 303px;
        }
        .div-38 {
          color: #1a1a1a;
          align-self: stretch;
          white-space: nowrap;
          font: 400 15px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-38 {
            white-space: initial;
          }
        }
        .div-39 {
          background-color: #dbdbdb;
          align-self: stretch;
          margin-top: 12px;
          width: 100%;
          height: 1px;
        }
        .div-40 {
          align-self: stretch;
          display: flex;
          margin-top: 40px;
          width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-40 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-41 {
          align-self: start;
          display: flex;
          margin-top: 7px;
          flex-direction: column;
          width: 95px;
        }
        .div-42 {
          color: #4f4f4f;
          align-self: stretch;
          white-space: nowrap;
          font: 500 14px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-42 {
            white-space: initial;
          }
        }
        .div-43 {
          color: #1a1a1a;
          align-self: stretch;
          margin-top: 17px;
          white-space: nowrap;
          font: 400 15px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-43 {
            white-space: initial;
          }
        }
        .div-44 {
          background-color: #dbdbdb;
          align-self: stretch;
          margin-top: 14px;
          width: 100%;
          height: 1px;
        }
        .div-45 {
          align-self: start;
          display: flex;
          flex-direction: column;
        }
        .div-46 {
          color: #4f4f4f;
          align-self: stretch;
          white-space: nowrap;
          font: 500 14px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-46 {
            white-space: initial;
          }
        }
        .div-47 {
          align-self: stretch;
          display: flex;
          margin-top: 16px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 11px;
        }
        .div-48 {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          width: 51px;
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
        }
        .div-49 {
          background-color: #dbdbdb;
          align-self: stretch;
          margin-top: 10px;
          width: 100%;
          height: 1px;
        }
        .div-50 {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: auto;
          width: 303px;
        }
        .div-51 {
          align-self: stretch;
          display: flex;
          width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }
        .div-52 {
          color: #1a1a1a;
          margin: auto 0;
          font: 900 20px Maven Pro, sans-serif;
        }
        .img-8 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          align-self: stretch;
          max-width: 100%;
        }
        .div-53 {
          background-color: #dbdbdb;
          align-self: stretch;
          margin-top: 10px;
          width: 100%;
          height: 1px;
        }
        .div-54 {
          color: #fff;
          align-self: center;
          white-space: nowrap;
          border-radius: 25px;
          background-color: #001b30;
          margin-top: 63px;
          width: 184px;
          max-width: 100%;
          flex-grow: 1;
          padding: 18px 60px 18px 58px;
          font: 700 20px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-54 {
            white-space: initial;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}


