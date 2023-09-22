import React from 'react';
import { Card, Col, ListGroup, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CountryCard = ({country}) => {
    return (

        
        <Col className="mt-5">
          <LinkContainer
            to={`/countries/${country.name.common}`}
            state={{ country: country }}
          >
            <Card className="h-100">
              <Button variant="light" style={{position:'absolute',right:'0', top:'0', background:'transparent', border:'none', fontSize:'xx-large'}}>❤️</Button>
              <Card.Body className="d-flex flex-column">
                <Card.Img alt='' src={country.flags.png} className="mb-3 text-muted" />
                <Card.Title className="mb-3 text-muted">{country.name.common}<Card.Subtitle className="mb-3 text-muted" > ({country.name.official})</Card.Subtitle></Card.Title>
                <Card.Subtitle className="mb-4 text-muted">
                  {country.capital}
                </Card.Subtitle>
                <ListGroup
                  variant="flush"
                  className="flex-grow-1 justify-content-end"
                >
                  <ListGroup.Item>
                    <i className="bi bi-translate me-2"></i>
                    
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <i className="bi bi-cash-coin me-2"></i>
                    
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <i className="bi bi-people me-2"></i>
                    {country.population}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </LinkContainer>
        </Col>
 
    );
};

export default CountryCard;