import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardText
} from 'reactstrap';

export default class componentName extends Component {
    render() {
        return (
            <section id="wedding" className="container-wedding">
                <div className="content-wedding">
                    <div className="content-name">Atta Halilintar</div>
                    <div className="content-parents">Putra ke-1 dari Bapak Anofial Asmid dan Ibu Lenggogeni Faruk</div>
                    <div className="content-and">&amp;</div>
                    <div className="content-name">Aurel Hermansyah</div>
                    <div className="content-parents">Putri ke-1 dari Bapak Anang Hermansyah dan Ibu Krisdayanti</div>
                </div>
                <Row>
                    <Col sm={12} md={6}>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <h3>Akad</h3>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <CardText>
                                    <div>Masjid Istiqlal</div>
                                    <div>Minggu, 1 Januari 2022</div>
                                    <div>Pukul: 09.00 WIB</div>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <h3>Resepsi</h3>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <CardText>
                                    <div>Gelora Bung Karno</div>
                                    <div>Minggu, 1 Januari 2022</div>
                                    <div>Pukul: 13.00 WIB</div>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </section>
        );
    }
}
