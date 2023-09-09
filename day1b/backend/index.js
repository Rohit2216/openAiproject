

const express = require("express");
const app = express();
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
// const cookieParser = require("cookie-parser");

app.use(express.json());
// app.use(cookieParser());
app.use(cors());

const configuration = new Configuration({
  apiKey:"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", // Make sure to set your API key in the environment variable OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => {
  res.send("<h1>Shayari Generator</h1>");
});


app.post("/chat",(req,res)=>{
  let question=req.body.question || 'How to use chatgpt?'
  openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${question}`,
      max_tokens: 4000,
      temperature: 0,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    }).then(response=>{
      return response?.data?.choices?.[0].text;
    }).then((ans)=>{
      const arr=ans?.split("\n").filter(ele=>ele).map(value=>value.trim());
      return arr;
    })
    .then(response=>{
      res.json({
          answer:response,
          prompt:question
      })        
  })
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
