import React from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { addFavourite, removeFavourite } from "../features/countries/favouritesSlice";

const CountryCard = ({country}) => {
  const favouritesList = useSelector((state)=> state.favourites.favourites);
  const dispatch = useDispatch;
    return (
        <Col className="mt-5">
          <LinkContainer
            to={`/countries/${country.name.common}`}
            state={{ country: country }}
          >
            <Card className="h-100">
            {favouritesList.includes(country.name.common) ? (
                    <i
                    className="bi bi-heart-fill text-danger m-1 p-1"
                    onClick={() => dispatch(removeFavourite(country.name.common))} />
                  ) : (
                    <i
                    className="bi bi-heart text-danger m-1 p-1"
                    onClick={() => dispatch(addFavourite(country.name.common))} />
                  )}
              {/* <Button variant="light" style={{position:'absolute',right:'0', top:'0', background:'transparent', border:'none', fontSize:'xx-large'}}>🤍❤️ </Button> */}
              
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
                    <i className="bi bi-translate me-2"><span style={{paddingLeft:'1rem'}}>{Object.values(country.languages ?? {}).join(", ")}</span>
                     
                    </i>
              
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <i className="bi bi-cash-coin me-2"><span style={{paddingLeft:'1rem'}}>{Object.values(country.currencies || {})
                      .map((currency)=>currency.name)
                      .join(", ")}</span>
                      
                    
                    </i>
                    
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <i className="bi bi-people me-2" ><span style={{paddingLeft:'1rem'}}>{(new Intl.NumberFormat('en-EN').format(country.population))}</span> 
                    </i>
                   
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </LinkContainer>
        </Col>
 
    );
};

export default CountryCard;