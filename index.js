const { Configuration, OpenAIApi } = require("openai");
const express=require ('express')
const bodyParser=require('body-parser')
const cors =require('cors')
const configuration = new Configuration({
    organization: "org-1IJvbdfW4ligIv0XGQGH1Lzl",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const app = express()
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
const port =3080

app.post('/', async (req, res) =>{
    const {message}=req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 200,
        temperature: 0.8,
      });
      res.json({
        message : response.data.choices[0].text,
      })
    });
    

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});
