import express from 'express';
import cors  from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

export default app;

app.get('/obtenerPaciente', function(req,res){

    console.log('es un get')
    res.send({msg:'consulta GET funcionando'})

})

app.post('/registroPaciente', function(req,res){
console.log('Esto es un post')
console.log(req.body)
res.send({msg:'consulta POST funcionando'})

})
app.listen(8000,() =>{
    console.log('Server on Port 8000')
})