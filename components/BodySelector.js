"use client";

export default function BodySelector({ addSymptom }) {

const bodyParts = [
{ name:"Head", symptom:"headache" },
{ name:"Chest", symptom:"chest pain" },
{ name:"Stomach", symptom:"stomach pain" },
{ name:"Throat", symptom:"sore throat" },
{ name:"Back", symptom:"back pain" },
{ name:"Leg", symptom:"leg pain" }
];

return (

<div style={styles.container}>

<h3>Select Body Area</h3>

<div style={styles.grid}>

{bodyParts.map((part)=>(
<button
key={part.name}
onClick={()=>addSymptom(part.symptom)}
style={styles.button}
>
{part.name}
</button>
))}

</div>

</div>

);

}

const styles = {

container:{
marginTop:"20px"
},

grid:{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"10px"
},

button:{
padding:"10px",
borderRadius:"8px",
border:"none",
background:"#00b894",
color:"white",
cursor:"pointer"
}

};