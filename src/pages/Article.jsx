import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
const { Configuration, OpenAIApi } = require("openai");

class Article extends Component{
  constructor()
  {
    super()
    this.state={
      heading: 'The AI response will be shown here',
      response:'Awaiting Response'
    }
  }

  onFormSubmit=e=> {

    e.preventDefault();

    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj.productName)
    
    ////OPENAI
    
    const configuration = new Configuration({
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
    
      openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate a detailed, smart, informative article on ${formDataObj.productName}\n`,
      temperature: 1,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })    
      .then((response) =>{
        this.setState({
          heading: `AI Generated Articles for: ${formDataObj.productName}`,
          response: `${response.data.choices[0].text}`
        })
      });    
  }

  render(){

    return(
      
      <div  className="flex flex-col ml-16 ">
        {/* <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="justify-end card-actions">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div> */}
        <Container>
          <br/>
          <br/>
          <h1 className="flex items-center gap-4 text-3xl font-extrabold tracking-tight mt- dark:text-white text-slate-700">Generate Article</h1>
          <br/>
          <h4> Generate Article for any topic/theme, enter then topic</h4>
          <br/>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Group className="flex-col card-actions" controlId="formBasicEmail" >
              <Form.Label> What Article do you want to generate?</Form.Label>
              <Form.Control
              className="w-full max-w-3xl input input-bordered"
              type="text"
              name="productName"
              placeholder="Enter topic for article"/>

              <span className="label-text-alt">
                Enter as much information possible for accurate article
              </span>
            </Form.Group>

            <Button className="mt-9 btn btn-wide" type="submit">
              Get AI Suggestions
            </Button>

          </Form>

          <br/>
          <br/>

          <Card>
            <Card.Body>
              <Card.Title><h1>{this.state.heading}</h1></Card.Title>
              <hr/>
              <br/>
              <Card.Text>
                <h4>
                  {this.state.response}
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
      )
  }
}

export default Article
