import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useWorks from '../../hooks/useWorks';
import Work from '../Work/Work';

const Works = () => {
    const [works] = useWorks();
    return (
        <Container className='py-5'>
            <h3 className='fw-bold display-6 mb-5 text-center section-title'>Works</h3>
            <Row xs={1} md={3} className="gy-5 md-gx-5">
                {
                    works.map(work =>
                        <Work
                            key={work.id}
                            work={work}
                        ></Work>
                    )
                }
            </Row>
        </Container>
    );
};

export default Works;