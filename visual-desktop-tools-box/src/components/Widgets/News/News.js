import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';
import axios from 'axios';
import { Card, CardDeck, Row, Container } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numArticles:  0,
      names:        [],
      titles:       [],
      descriptions: [],
      imgUrls:      [],
      articleUrls:  [],
      published:    [],
    }
  }

  componentDidMount() {
    axios.get('/api/news')
      .then(response => {
          this.setState({
            numArticles: response.data.articles.length,

            names: response.data.articles.map(name => name.source.name),
            titles: response.data.articles.map(title=>title.title),
            descriptions: response.data.articles.map(desc=>desc.description),
            imgUrls: response.data.articles.map(imgUrl=>imgUrl.urlToImage),
            articleUrls: response.data.articles.map(url=>url.url),
            published: response.data.articles.map(published=>published.publishedAt)
          })
          console.log(this.state.numArticles);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  renderHeader() {
    return(
      <h4>Loaded {this.state.numArticles} articles.</h4>
    );
  }

  // Reads the number of articles in the state, and renders that many articles
  renderArticles() {
    let articles = [];
    for(let i=0;i<this.state.numArticles;i++) {
      articles.push(
        <Card>
        <div class="card-horizontal">
          <Card.Img
          width={320}
          height={180}
          variant="right"
          src={this.state.imgUrls[i]}
          alt="[Img Not Found]"
          />
          <Card.Body>
            <a href={this.state.articleUrls[i]}><Card.Title>{this.state.titles[i]}</Card.Title></a>
            <span class="badge badge-secondary">{this.state.names[i]}</span>
            <Card.Text>
              {this.state.descriptions[i]}
            </Card.Text>
          </Card.Body>
        </div>

        <Card.Footer>
          <small className="text-muted">Published at: {this.state.published[i]}</small>
        </Card.Footer>
        </Card>
      );
    }
    return(
      articles
    );
  }

  render() {
    return (
      <div>
        <NavBar/>
        {this.renderHeader()}
        {this.renderArticles()}
      </div>
    );
  }
}
