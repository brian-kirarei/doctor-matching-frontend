"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaHeartbeat, FaMicrophone } from "react-icons/fa";
import BodySelector from "../components/BodySelector";
import DoctorMap from "../components/DoctorMap";

export default function Diagnose(){

const [mounted,setMounted] = useState(false);
const [symptoms,setSymptoms] = useState("");
const [result,setResult] = useState(null);
const [loading,setLoading] = useState(false);
const [listening,setListening] = useState(false);

useEffect(()=>{
setMounted(true);
},[]);

const addSymptom = (symptom)=>{
setSymptoms(prev => prev + " " + symptom);
};

const analyze = async ()=>{

if(!symptoms) return;

setLoading(true);

try{

const res = await axios.post(
"http://localhost:5000/api/diagnosis",
{symptoms}
);

setResult(res.data);

}catch(err){

console.error(err);

}

setLoading(false);

};

const startVoiceInput = ()=>{

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

if(!SpeechRecognition){
alert("Voice not supported");
return;
}

const recognition = new SpeechRecognition();

recognition.lang="en-US";

recognition.start();

setListening(true);

recognition.onresult=(event)=>{

const text = event.results[0][0].transcript;

setSymptoms(prev => prev + " " + text);

};

recognition.onend=()=>setListening(false);

};

if(!mounted) return null;

return(

<div style={styles.page}>

<h1 style={styles.title}>
<FaHeartbeat/> AI Medical Diagnosis
</h1>

<div style={styles.inputCard}>

<textarea
rows="4"
placeholder="Describe your symptoms..."
value={symptoms}
onChange={(e)=>setSymptoms(e.target.value)}
style={styles.textarea}
/>

<button
onClick={startVoiceInput}
style={styles.voiceButton}
>

<FaMicrophone/>

{listening ? " Listening..." : " Speak Symptoms"}

</button>

<button
onClick={analyze}
style={styles.button}
>
Analyze Symptoms
</button>

</div>

<BodySelector addSymptom={addSymptom}/>

{loading && <p>Analyzing...</p>}

{result && (

<div style={styles.resultBox}>

<h2>Detected Specialty</h2>

<p style={styles.specialty}>
{result.specialty}
</p>

<h2>Recommended Doctors</h2>

<div style={styles.doctorGrid}>

{result.doctors.map((doc)=>(
<div key={doc.id} style={styles.card}>

<h3>{doc.name}</h3>

<p>{doc.hospital_name}</p>

<p>Experience: {doc.experience}</p>

<p>Rating ⭐ {doc.rating}</p>

</div>
))}

</div>

<DoctorMap doctors={result.doctors}/>

</div>

)}

</div>

);

}

const styles={

page:{
padding:"40px",
minHeight:"100vh",
background:"linear-gradient(135deg,#141E30,#243B55)",
color:"white"
},

title:{
textAlign:"center",
marginBottom:"30px"
},

inputCard:{
background:"white",
padding:"25px",
borderRadius:"12px",
maxWidth:"800px",
margin:"auto",
color:"black"
},

textarea:{
width:"100%",
padding:"14px",
borderRadius:"10px",
border:"1px solid #ddd",
marginBottom:"10px"
},

voiceButton:{
background:"#6c5ce7",
border:"none",
padding:"10px",
borderRadius:"8px",
color:"white",
marginRight:"10px",
cursor:"pointer"
},

button:{
background:"#0984e3",
border:"none",
padding:"10px",
borderRadius:"8px",
color:"white",
cursor:"pointer"
},

resultBox:{
marginTop:"30px"
},

specialty:{
fontSize:"22px",
color:"#f1c40f"
},

doctorGrid:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px"
},

card:{
background:"white",
color:"black",
padding:"15px",
borderRadius:"10px"
}

};