import React from 'react';
import { Container, Row } from 'react-bootstrap';
import usePackages from '../../hooks/usePackages';
import Package from '../Package/Package';

const Packages = () => {
    const [packages] = usePackages();
    return (
        <Container className='py-5'>
            <h3 className='fw-bold display-6 mb-4 text-center section-title'>Packages</h3>
            <Row xs={1} md={3} className="g-4">
                {
                    packages.map(pack =>
                        <Package
                            key={pack.id}
                            pack={pack}
                        ></Package>
                    )
                }
            </Row>
        </Container>
    );
};

export default Packages;