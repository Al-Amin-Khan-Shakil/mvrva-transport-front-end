// ServiceList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card, Row, Col, Container,
} from 'react-bootstrap';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchServices } from '../../redux/service/servicesSlice';

const ServiceList = () => {
  const dispatch = useDispatch();
  const { data: services, status, error } = useSelector((state) => state.services);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (status === 'loading') {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  // Specify the number of services per item
  const servicesPerItem = 3;

  // Group services into arrays based on the specified number of services per item
  const groupedServices = [];
  for (let i = 0; i < services.length; i += servicesPerItem) {
    groupedServices.push(services.slice(i, i + servicesPerItem));
  }

  return (
    <>
      <h1 className="text-center">OFFERED SERVICES</h1>
      <span className="text-center d-block text-grey">Explore our services from below</span>
      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-body">
        {groupedServices.map((group) => (
          <Carousel.Item key={uuidv4()} className="carousel-bg">
            <Carousel.Caption>
              <Row xs={1} md={2} lg={3} xl={4} className="d-flex justify-content-between card-body">
                {group.map((service) => (
                  <Col key={uuidv4()}>
                    {/* Wrap each card with Link component */}
                    <Link to={`/services/${service.id}`} className="card-link">
                      <Card className="card-sizing">
                        <Card.Img variant="top" src={service.image} alt={service.name} style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                        <Card.Body>
                          <Card.Title className="custom-title-style">
                            <strong>{service.name}</strong>
                          </Card.Title>
                          <Card.Text style={{ color: 'grey', fontSize: '0.8em' }}>
                            {service.description}
                          </Card.Text>
                          <Container className="mt-4 py-3 sc-container d-flex flex-column">
                            <div className="text-center">
                              <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="Visit Twitter profile"
                              >
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                              </a>
                              <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="Visit Facebook profile"
                              >
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                              </a>
                              <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                aria-label="Visit GitHub profile"
                              >
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                              </a>

                            </div>
                          </Container>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ServiceList;