import React,{useState,useEffect,useRef} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { toast } from "react-toastify";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/getBlogSlice';


function Moment(props) {
const [comment,setComment] = useState('')
const [title,setTitle] = useState('')
const [tag,setTag] = useState([])
const [image,setImage] = useState('')
const [tt,setTt] = useState('')

const state = useSelector((state) => state);
useEffect(() => {
  dispatch(getPosts());
}, []);
const tagRef = useRef(null)
const dispatch = useDispatch();
const tagging = ()=>{
if(tt.includes(','))
{
   setTag([...tag,...tt.split(',')])
   setTt('')
}
}
const dtags =(indx)=>{
let tagss = tag.filter((val,ind)=>{
    return tag[ind] != tag[indx]
}) 
setTag(tagss)
}
const setImages = (img)=>{
if(img.type.includes('image'))
{
    setImage(img)
}
else{
    toast.error("Please Select Image Type")
}
// 
}
const mymom = ()=>{
    let formData= new FormData()
    formData.append('title',title)
    formData.append('tags',tag.join(","))
    formData.append("comment",comment)
    formData.append("image",image)
    
    axios.post("http://localhost:5000/moment/addmoment",formData,{
        headers : {"Content-Type" : "multipart/formdata"}
      }).then((res)=>{
        toast.success("Moment Added !!!")
        dispatch(getPosts());
        setTitle('')
        setTag([])
        setImage('')
        setComment('')
        setTt('')
    }).catch((e)=>{
toast.error("Fill all Fields or Check Your Network ")
    })
}
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="column">
              <div className="div-4">
                <div className="div-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab3542a3-59a5-4f47-8acf-837089cdc090?apiKey=6d1c749f762548fe87862eca0024fb18&"
                    className="img"
                  />
                  <div className="div-6">Profile</div>
                </div>
                <div className="div-7">
                  
                  {state.blogs.datas.data && state.blogs.datas.data.length ? <div className="div-8">Moments</div> : <div className="div-8">No Moments</div>}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a5e96fa-2632-402e-beaf-6b7dce41e3c3?apiKey=6d1c749f762548fe87862eca0024fb18&"
                    className="img-2"
                  />
                </div>        
                {
                                      state.blogs.datas.data && state.blogs.datas.data.map((res)=>{
                        return<Button className="div-9">{res.title}</Button>
                    })
                }
                <div className="div-10">
                  <div className="div-11" />
                  <div className="div-12">Add new moment</div>
                </div>
              </div>
            </div>
            <div className="column-2">
              <div className="div-13">
                <div className="div-14">
                  <div className="div-15">
                    <div className="div-22">Title</div>
                            <TextField width="20%"
    variant="standard"
    value={title}
    onChange={(e)=>{
        setTitle(e.target.value)
    }}
/>
                    {/* <div className="div-18" /> */}
                    <div className="div-19">
                      <div className="div-20">
                        <div className="column-3">
                          <div className="div-21">
                            <div className="div-22">Tags (End with comma ',')</div>
                      {
                        tag.map((val,ind)=>{
                            return     val &&  <div className="div-23" onClick={()=>dtags(ind)}>
                            
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c3a7e45-4774-4d25-88bb-2ea8c2ce86cd?apiKey=6d1c749f762548fe87862eca0024fb18&"
                              className="img-3"
                            />{val}
                          </div>
                        })
                      }
                            <TextField width="20%"
    variant="standard"
    value={tt}
   onBlur={()=>tagging()}
    onChange={(e)=>{
        setTt(e.target.value)
    }}
/>
                            {/* <div className="div-25" /> */}
                            <div className="div-26">Comment</div>
                            {/* <TextField minRows={3}
    variant="standard"
    inputProps={{ maxLength: 100 }}
    value={comment}
    onChange={(e)=>{
        setComment(e.target.value)
    }}
/> */}<textarea maxlength="100" value={comment} className="form-control"  onChange={(e)=>{
        setComment(e.target.value)
      }}></textarea>
<span className="fw-bold" style={{color : `${comment.length == 100 ? 'red' : 'black'}`}}>{`${comment.length} / 100`}</span>
{image && 
                            <div className="div-27" >
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f48ebeb5-0c6b-474f-bc8a-ba30fc84eef0?apiKey=6d1c749f762548fe87862eca0024fb18&"
                                className="img-4"
                              />
                              <div className="div-28" >
                                <div className="div-29">
                                  <div className="div-30">{image.name}</div>
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9841209b-4da3-4996-931f-75bada075f21?apiKey=6d1c749f762548fe87862eca0024fb18&"
                                    className="img-5"
                                  />
                                </div>
                                {/* <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/acd0426c-c8b7-4bf8-8672-9ae86a226240?apiKey=6d1c749f762548fe87862eca0024fb18&"
                                  className="img-6"
                                /> */}
                                <div className="div-31">
                                  {/* <div className="div-32">100% done</div>
                                  //TEST */}
                                            <Box sx={{ width: '100%' }}>
      <LinearProgress value={100} /> 100%
    </Box>               <div className="div-33">{image.size} KB</div>
                                </div>
                              </div>
                            </div>}
                            {/* <div className="div-34">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/de0a2e0b-d004-41a1-b299-e08ce8666659?apiKey=6d1c749f762548fe87862eca0024fb18&"
                                className="img-7"
                              />
                              <div className="div-35">
                                <div className="div-36">file.txt</div>
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d1766fb-de25-4d23-b001-ff18dfbd2fd3?apiKey=6d1c749f762548fe87862eca0024fb18&"
                                  className="img-8"
                                />
                                <div className="div-37">
                                  <div className="div-38">45% done</div>
                                  <div className="div-39">2.5 mb</div>
                                </div>
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7a86602-74b5-470b-b80e-f571d8553d70?apiKey=6d1c749f762548fe87862eca0024fb18&"
                                className="img-9"
                              />
                            </div> */}
                          </div>
                        </div>
                        
                            {/* <div className="column-4" >
                        <input type="file" for="file-upload"/>
                          <div className="div-40" id="file-upload">                          
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bf324a6-cbf4-434f-9352-dff84af3eef2?apiKey=6d1c749f762548fe87862eca0024fb18&"
                              className="img-10"
                            />
                            <div className="div-41">Drag and drop file</div>
                            <div className="div-42">OR</div>
                            <div className="div-43">Browse</div>
                          </div>
                        </div> */}
{/* <label class="custom-file-upload"> */}
    
    <label className="column-4" >     
    <input type="file" onChange={(e)=>{
        setImages(e.target.files[0])
    }}/>                   
                          <div className="div-40">                          
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bf324a6-cbf4-434f-9352-dff84af3eef2?apiKey=6d1c749f762548fe87862eca0024fb18&"
                              className="img-10"
                            />
                            <div className="div-41">Drag and drop file</div>
                            <div className="div-42">OR</div>
                            <div className="div-43">Browse</div>
                          </div>
                        </label> 
{/* </label> */}
                        {/* <div className="column-4" >
                        <input type="file" for="file-upload"/>
                          <div className="div-40" id="file-upload">                          
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bf324a6-cbf4-434f-9352-dff84af3eef2?apiKey=6d1c749f762548fe87862eca0024fb18&"
                              className="img-10"
                            />
                            <div className="div-41">Drag and drop file</div>
                            <div className="div-42">OR</div>
                            <div className="div-43">Browse</div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={()=>mymom()} className="div-44">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="div-45">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1fb5347-aae0-4c2d-b038-3d06beb11440?apiKey=6d1c749f762548fe87862eca0024fb18&"
            className="img-11"
          />
          <div className="div-46">
            
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a91d5060-ca1a-48b2-8292-dd69d6a83f6e?apiKey=6d1c749f762548fe87862eca0024fb18&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d5060-ca1a-48b2-8292-dd69d6a83f6e?apiKey=6d1c749f762548fe87862eca0024fb18&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d5060-ca1a-48b2-8292-dd69d6a83f6e?apiKey=6d1c749f762548fe87862eca0024fb18&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d5060-ca1a-48b2-8292-dd69d6a83f6e?apiKey=6d1c749f762548fe87862eca0024fb18&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d5060-ca1a-48b2-8292-dd69d6a83f6e?apiKey=6d1c749f762548fe87862eca0024fb18&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d5060-ca1a-48b2-8292-dd69d6a83f6e?apiKey=6d1c749f762548fe87862eca0024fb18&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d5060-ca1a-48b2-8292-dd69d6a83f6e?apiKey=6d1c749f762548fe87862eca0024fb18&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91d5060-ca1a-48b2-8292-dd69d6a83f6e?apiKey=6d1c749f762548fe87862eca0024fb18&"
              className="img-12"
            />
            {sessionStorage.getItem("user").toUpperCase()}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd866e00-a657-42ef-beda-f5640dfc606b?apiKey=6d1c749f762548fe87862eca0024fb18&"
              className="img-13"
            />
          </div>
        </div>
        <div className="div-47">Add new moment</div>
      </div>
      <style jsx>{`
        .div {
          background-color: #fdfffe;
          display: flex;
          flex-direction: column;
        }
        .div-2 {
          z-index: 1;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
          }
        }
        .div-3 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-3 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        input[type="file"] {
            display: none;
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 19%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-4 {
          box-shadow: 4px 0px 9px 0px rgba(201, 201, 201, 0.09);
          background-color: #fff;
          display: flex;
          width: 100%;
          flex-direction: column;
          margin: 0 auto;
          padding: 24px 20px 419px;
        }
        @media (max-width: 991px) {
          .div-4 {
            margin-top: 26px;
            padding-bottom: 100px;
          }
        }
        .div-5 {
          display: flex;
          margin-right: -20px;
          flex-direction: column;
          align-items: center;
          padding: 0 80px 0 42px;
        }
        @media (max-width: 991px) {
          .div-5 {
            padding: 0 20px;
          }
        }
        .img {
          aspect-ratio: 1.13;
          object-fit: contain;
          object-position: center;
          width: 81px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-6 {
          color: #001b30;
          align-self: start;
          margin-top: 86px;
          white-space: nowrap;
          font: 400 18px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-6 {
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-7 {
          background-color: #001b30;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin: 38px -20px 0 0;
          padding: 18px 19px 18px 42px;
        }
        @media (max-width: 991px) {
          .div-7 {
            padding-left: 20px;
          }
        }
        .div-8 {
          color: #fff;
          font: 700 18px Maven Pro, sans-serif;
        }
        .img-2 {
          aspect-ratio: 1.78;
          object-fit: contain;
          object-position: center;
          width: 16px;
          fill: #fff;
          overflow: hidden;
          align-self: start;
          max-width: 100%;
        }
        .div-9 {
          color: #001b30;
          align-self: center;
          margin-top: 24px;
          white-space: nowrap;
          font: 400 16px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-9 {
            white-space: initial;
          }
        }
        .div-10 {
          align-self: center;
          display: flex;
          width: 150px;
          max-width: 100%;
          align-items: center;
          gap: 12px;
          margin: 23px 0 -84px;
        }
        @media (max-width: 991px) {
          .div-10 {
            margin-bottom: 10px;
          }
        }
        .div-11 {
          border-radius: 50%;
          display: flex;
          width: 7px;
          height: 7px;
          flex-direction: column;
          margin: auto 0;
        }
        .div-12 {
          color: #001b30;
          align-self: stretch;
          white-space: nowrap;
          font: 500 16px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-12 {
            white-space: initial;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 81%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-13 {
          display: flex;
          margin-top: 158px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-13 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-14 {
          box-shadow: 0px 0px 8px 0px rgba(201, 201, 201, 0.25);
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 50px 20px;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
          }
        }
        .div-15 {
          display: flex;
          width: 870px;
          max-width: 100%;
          flex-direction: column;
        }
        .div-16 {
          color: #4f4f4f;
          align-self: stretch;
          white-space: nowrap;
          font: 500 14px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-16 {
            max-width: 100%;
            white-space: initial;
          }
        }
        .div-17 {
          color: #1a1a1a;
          align-self: start;
          white-space: nowrap;
          margin: 23px 0 0 18px;
          font: 400 15px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-17 {
            margin-left: 10px;
            white-space: initial;
          }
        }
        .div-18 {
          background-color: #dbdbdb;
          align-self: stretch;
          margin-top: 14px;
          height: 1px;
        }
        @media (max-width: 991px) {
          .div-18 {
            max-width: 100%;
          }
        }
        .div-19 {
          align-self: stretch;
          margin-top: 47px;
        }
        @media (max-width: 991px) {
          .div-19 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-20 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-20 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 66%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-21 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-21 {
            margin-top: 40px;
          }
        }
        .div-22 {
          color: #4f4f4f;
          align-self: stretch;
          white-space: nowrap;
          font: 500 14px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-22 {
            white-space: initial;
          }
        }
        .div-23 {
          border-radius: 13.5px;
          border: 1px solid var(--Theme-Green-Light, #24be8b);
          align-self: start;
          display: flex;
          width: 86px;
          max-width: 100%;
          align-items: start;
          gap: 15px;
          margin: 11px 0 0 18px;
          padding: 5px 10px;
        }
        @media (max-width: 991px) {
          .div-23 {
            margin-left: 10px;
          }
        }
        .div-24 {
          color: #001b30;
          font: 400 18px Maven Pro, sans-serif;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 14px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-25 {
          background-color: #dbdbdb;
          align-self: stretch;
          margin-top: 9px;
          height: 1px;
        }
        .div-26 {
          color: #4f4f4f;
          align-self: stretch;
          margin-top: 46px;
          white-space: nowrap;
          font: 500 14px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-26 {
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-27 {
          align-self: stretch;
          display: flex;
          margin-top: 26px;
          align-items: start;
          justify-content: space-between;
          gap: 20px;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 42px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-28 {
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-29 {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        .div-30 {
          color: #4f4f4f;
          font: 500 14px Maven Pro, sans-serif;
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 10px;
          overflow: hidden;
          align-self: start;
          max-width: 100%;
        }
        .img-6 {
          aspect-ratio: 95.67;
          object-fit: contain;
          object-position: center;
          width: 287px;
          overflow: hidden;
          margin-top: 8px;
        }
        .div-31 {
          display: flex;
          margin-top: 13px;
          justify-content: space-between;
          gap: 20px;
        }
        .div-32 {
          color: #4f4f4f;
          font: 500 12px Maven Pro, sans-serif;
        }
        .div-33 {
          color: #4f4f4f;
          text-align: right;
          white-space: nowrap;
          font: 500 12px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-33 {
            white-space: initial;
          }
        }
        .div-34 {
          align-self: stretch;
          display: flex;
          margin-top: 30px;
          padding-right: 1px;
          align-items: start;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-34 {
            justify-content: center;
          }
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 42px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-35 {
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-36 {
          color: #4f4f4f;
          white-space: nowrap;
          font: 500 14px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-36 {
            white-space: initial;
          }
        }
        .img-8 {
          aspect-ratio: 84.67;
          object-fit: contain;
          object-position: center;
          width: 254px;
          overflow: hidden;
          margin-top: 11px;
        }
        .div-37 {
          display: flex;
          margin-top: 13px;
          justify-content: space-between;
          gap: 20px;
        }
        .div-38 {
          color: #4f4f4f;
          font: 500 12px Maven Pro, sans-serif;
        }
        .div-39 {
          color: #4f4f4f;
          text-align: right;
          white-space: nowrap;
          font: 500 12px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-39 {
            white-space: initial;
          }
        }
        .img-9 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 10px;
          overflow: hidden;
          max-width: 100%;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 34%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-40 {
          border: 1px dashed #c4c4c4;
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 0 auto;
          padding: 57px 64px 57px 62px;
        }
        @media (max-width: 991px) {
          .div-40 {
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .img-10 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 36px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
        }
        .div-41 {
          color: #001b30;
          align-self: stretch;
          margin-top: 28px;
          white-space: nowrap;
          font: 400 17px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-41 {
            white-space: initial;
          }
        }
        .div-42 {
          color: #001b30;
          align-self: center;
          margin-top: 13px;
          white-space: nowrap;
          font: 900 17px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-42 {
            white-space: initial;
          }
        }
        .div-43 {
          color: #fff;
          white-space: nowrap;
          border-radius: 25px;
          background-color: #001b30;
          align-self: center;
          margin-top: 13px;
          width: 98px;
          max-width: 100%;
          align-items: start;
          padding: 10px 20px;
          font: 700 16px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-43 {
            white-space: initial;
            padding-left: 1px;
          }
        }
        .div-44 {
          color: #fff;
          white-space: nowrap;
          border-radius: 25px;
          background-color: #001b30;
          align-self: center;
          margin-top: 33px;
          width: 195px;
          max-width: 100%;
          align-items: center;
          padding: 18px 20px;
          font: 700 20px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-44 {
            white-space: initial;
          }
        }
        .div-45 {
          box-shadow: 0px 4px 9px 0px rgba(201, 201, 201, 0.09);
          background-color: #fff;
          display: flex;
          margin-top: -768px;
          width: 100%;
          align-items: start;
          justify-content: space-between;
          gap: 20px;
          padding: 15px 34px 15px 291px;
        }
        @media (max-width: 991px) {
          .div-45 {
            max-width: 100%;
            margin-top: -200px;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .img-11 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 28px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-46 {
          display: flex;
          gap: 7px;
        }
        .img-12 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 34px;
          overflow: hidden;
          border-radius: 50%;
          max-width: 100%;
        }
        .img-13 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .div-47 {
          color: #001b30;
          white-space: nowrap;
          box-shadow: 0px 4px 9px 0px rgba(201, 201, 201, 0.09);
          background-color: #fff;
          margin-bottom: 514px;
          width: 100%;
          align-items: start;
          padding: 24px 20px 24px 291px;
          font: 700 20px Maven Pro, sans-serif;
        }
        @media (max-width: 991px) {
          .div-47 {
            white-space: initial;
            max-width: 100%;
            margin-bottom: 40px;
            padding-left: 10px;
          }
        }
      `}</style>
    </>
  );
}




export default Moment;