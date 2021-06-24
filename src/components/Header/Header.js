import { Row, Col} from 'react-bootstrap';
import {memo} from "react";
const Header = () =>{
    return(
        <Row>
            <Col md={12}>
                <header>
                    <h1>Formulario a rellenar</h1>
                </header>
            </Col>
        </Row>

    );
}

export default memo(Header);