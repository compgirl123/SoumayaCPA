import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import background from "../../pictures/2022-02-24.png";
import './Home.scss';
import cpa from "../../pictures/CPA-Logo.jpeg";
import soumaya from "../../pictures/SoumayaPic.jpg";
import { Button } from 'react-bootstrap';
import { LocationOn, Call, Email, CheckCircleOutline, CloudDownload, MonetizationOn, MarkEmailRead } from '@mui/icons-material'; // Import Material Icons

const HomePage = () => (
  <div>
    <div id="home">
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">A.A.S.T Services</Navbar.Brand>
          <div style={{ height: 50, width: 160 }}>
          </div>
          <Navbar.Toggle />
        </Navbar>

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Soumaya Arraouf, CPA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Acceuil</Nav.Link>
                <Nav.Link href="#services">Nos Services</Nav.Link>
                <Nav.Link href="#forms">Formulaires</Nav.Link>
                <Nav.Link href="#about-section">A propos de nous</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </>
    </div>


    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: window.screen.height - 275 }}>
      <h1 className="header">Votre Déclaration de revenu</h1>
      <br />
      <h1 className="header">C'est du serieux</h1>
    </div>

    <div id="services" >
      <h1 class="title">Nos Services</h1>
      <br />

      <div class="row">
        <div class="column" style={{ backgroundColor: "#004fba", color: '#e3e8e7' }}>
          <h2 class="title">IMPÔTS</h2>
          <span class="material-icons" id="test">  <MonetizationOn fontSize="large" /> {/* Use MonetizationOn component from Material-UI */} </span>
          <ul class="testa">
            <li>Déclarations d'impôts des particuliers</li>
            <li>Impôts des sociétés</li>
            <li>Travailleurs autonomes</li>
            <li>Propriétés à revenu</li>
          </ul>
        </div>
        <div class="column" style={{ backgroundColor: "#006fba", color: '#e3e8e7' }}>
          <h2 class="title">COMPTABILITÉ</h2>
          <span class="material-icons" id="test"> <CheckCircleOutline fontSize="large" /> {/* Use CheckCircleOutline component from Material-UI */}</span>
          <ul class="testa">
            <li>Tenue de livres</li>
            <li>Rapport TPS/TVQ</li>
            <li>Création d'entreprises</li>
            <li>Paie et remises gouvernementales</li>
          </ul>
        </div>
        <div class="column" style={{ backgroundColor: "#008fba", color: '#e3e8e7' }}>
          <h2 class="title">TED</h2>
          <span class="material-icons" id="test"> <MarkEmailRead fontSize="large" /> {/* Use MarkEmailRead component from Material-UI */}</span>
          <ul class="testa">
            <li>Transfer Electronique de Données</li>
          </ul>
        </div>
      </div>
    </div>

    <div id="forms" style={{ backgroundColor: '#FFFFFF', backgroundSize: 'cover', height: 500 }}>
      <h1 class="title">Formulaires Questionnaires</h1>
      <br />

      <div class="column2" style={{ backgroundColor: "#004fba", color: '#e3e8e7' }}>
        <h4 class="title"> Nouveau Client</h4>
        <br /><br /><br />
        <span class="material-icons" id="test"><CloudDownload fontSize="large" /> {/* Use CloudDownload component from Material-UI */}</span>

        <Button as="a" variant="light" id="test2" href="https://drive.google.com/uc?export=download&id=1oY3H62FgOjSLJmsYTLhi20pTtrPpnPRD" target="_blank">Télécharger le fichier</Button>

      </div>
      <div class="column2" style={{ backgroundColor: "#005fba", color: '#e3e8e7' }}>
        <h4 class="title">Client Existant </h4>
        <br /><br /><br />
        <span class="material-icons" id="test"><CloudDownload fontSize="large" /> </span>
        <Button as="a" variant="light" id="test2" href="https://drive.google.com/uc?export=download&id=1AD_H00-ajhneQ8HuQsSK1A8EURrv8EZk" target="_blank">Télécharger le fichier</Button>
      </div>

      <div class="column2" style={{ backgroundColor: "#006fba", color: '#e3e8e7' }}>
        <h4 class="title">Travailleur Autonome</h4>
        <br /><br /><br />
        <span class="material-icons" id="test"><CloudDownload fontSize="large" /> </span>
        <Button as="a" variant="light" id="test2" href="https://drive.google.com/uc?export=download&id=1iH4FZr24hK-3J89436Xc8f9WtdooQo4m" target="_blank">Télécharger le fichier</Button>
      </div>

      <div class="column2" style={{ backgroundColor: "#007fba", color: '#e3e8e7' }}>
        <h4 class="title">Dépense d'emploi</h4>
        <br /><br /><br />
        <span class="material-icons" id="test"><CloudDownload fontSize="large" /> </span>
        <Button as="a" variant="light" id="test2" href="https://drive.google.com/uc?export=download&id=1iH4FZr24hK-3J89436Xc8f9WtdooQo4m" target="_blank">Télécharger le fichier</Button>
      </div>

      <div class="column2" style={{ backgroundColor: "#008fba", color: '#e3e8e7' }}>
        <h4 class="title">Immeubles a revenu </h4>
        <br /><br /><br />
        <span class="material-icons" id="test"><CloudDownload fontSize="large" /> </span>

        <Button as="a" variant="light" id="test2" href="https://drive.google.com/uc?export=download&id=1ntoP9HIsRMTSpuJBS6JK13G3IroR62hm" target="_blank">Télécharger le fichier</Button>
      </div>
    </div>


    <h2 style={{ textAlign: "center", padding: 40 }} class="title">A propos de nous <br /><br /> Notre équipe</h2>
    <div id="about-section">
      <div class="column6">
        <div class="card">
          <img src={soumaya} alt="Soumaya" style={{ width: "25%" }}></img>

            <h2 style={{ textAlign: "center"}} >Soumaya Arraouf</h2>
            <p class="title">CPA - COMPTABLE PROFESSIONNELLE AGRÉÉE</p>
            <p style={{ textAlign: "center", padding: 10 }}>514-627-3222</p>
            <p style={{ textAlign: "center", padding: 10 }}>arraouf.soumaya@yahoo.fr</p>

        </div>
      </div>
    </div>

    <h1 class="title">Contact</h1>
    <div class="column4">
      <div class="title"><iframe width="800" height="650" title ="location" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJw2E76jkZyUwRUQgFdbtJl74&key=AIzaSyBOWprADKdjysjHzCGAW-3KDAD0FxMZEYw"></iframe></div>
    </div>

    <div class="column4">
    <h4 class="title">
        <LocationOn /> {/* Use LocationOn component from Material-UI */}
        Addresse
      </h4>
      <p class="title">1850 Rue Everett, Montreal, QC H2E 1N9</p>

      <h4 class="title">
        <Call /> {/* Use Call component from Material-UI */}
        Téléphone
      </h4>
      <p class="title">514-627-3222 <br/> 514-441-3038</p>

      <h4 class="title">
        <Email /> {/* Use Email component from Material-UI */}
        Email
      </h4>
      <p class="title">arraouf.soumaya@yahoo.fr <br /></p>
    </div>
  </div>

);



export default HomePage;
