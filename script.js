*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,Helvetica,sans-serif;
}

body{
background:#0f0f0f;
color:white;
padding:40px;
}

.contenedor{
display:flex;
justify-content:center;
align-items:flex-start;
gap:60px;
max-width:1200px;
margin:auto;
flex-wrap:wrap;
}

.producto img{
width:450px;
border-radius:15px;
}

.informacion{
width:360px;
}

h1{
font-size:34px;
margin-bottom:10px;
}

.precio{
font-size:28px;
font-weight:bold;
margin-bottom:25px;
}

label{
display:block;
margin-top:20px;
margin-bottom:8px;
font-weight:bold;
}

select,
input{
width:100%;
padding:12px;
border-radius:8px;
border:none;
font-size:16px;
}

#botonWhatsapp{
display:block;
margin-top:30px;
padding:16px;
background:#25D366;
color:white;
text-align:center;
text-decoration:none;
border-radius:10px;
font-size:18px;
font-weight:bold;
transition:.3s;
}

#botonWhatsapp:hover{
background:#1da851;
}
