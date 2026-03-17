import React from 'react';
import NavBar from '../parts/NavBar';
import CaseSummaryNotificationArea from '../parts/caseSummaryParts/CaseSummaryNotificationArea';
import symdekoImage from '../../img/Symdeko_logo.png';
// import orkambiImage from '../../../img/Orkambi_logo.png';
// import kalydecoImage from '../../../img/Kalydeco_logo.png';
import BubbleTrain from '../parts/BubbleTrain';
import Loader from '../parts/Loader';
//import EnrollmentExistsModal from '../parts/EnrollmentExistsModal';
//import PatientInfo from '../parts/enrollmentFormParts/PatientInfo';
//import ManualForm from '../parts/manualFormParts/MedicationInfo';
//import ManualForm from '../parts/ManualForm';
import '../../stylesheets/components/parts/_search.scss';
import { Link } from 'react-router-dom';
import logo from '../../img/Vertex_GPS_logo.svg';

import {
  Card,
  CardBody,
  CardSubtitle,
  Button,
  CardTitle,
  CardImg,
  CardHeader,
  CardFooter,
  CardDeck,
  NavbarBrand
} from 'reactstrap';

import {
  HomeIcon,
  CheckIcon,
  ContentSaveIcon,
  CloseIcon,
  ExclamationIcon
} from 'mdi-react';
var Spinner = require('react-spinkit');

const bubbleItems = [
  {
    status: 'default',
    icon: <CheckIcon />,
    label: 'Defualt Message',
    smallLabel: '11/7'
  },
  {
    status: 'submitted',
    icon: <CheckIcon />,
    label: 'Success Message',
    smallLabel: '11/7'
  },
  {
    status: 'approved',
    icon: <CheckIcon />,
    label: 'Approved Message',
    smallLabel: '11/7'
  },

  {
    status: 'aware',
    icon: <ExclamationIcon />,
    label: 'Aware Message',
    smallLabel: '11/7'
  },
  {
    status: 'denied',
    icon: <CloseIcon />,
    label: 'Denied Message',
    smallLabel: '11/7'
  }
];

const notifyItems = [
  {
    status: 'submitted',
    icon: <ContentSaveIcon />,
    alert: 'Success Message',
    message: 'Thank you, your results are being proccessed.'
  },
  {
    status: 'approved',
    icon: <CheckIcon />,
    alert: 'Approved Message',
    message: 'The submission returned with an "Approved" status.'
  },
  {
    status: 'aware',
    icon: <ExclamationIcon />,
    alert: 'Aware Message',
    message: 'Please be aware, there are changes/updates.'
  },
  {
    status: 'action',
    icon: <CloseIcon />,
    alert: 'Action Required',
    message: 'There are items that need attention.'
  }
];

class KitchenSink extends React.Component {
  state = {
    isModalOpen: false
  };

  toggleModal = () => {
    const {
      state: { isModalOpen }
    } = this;

    this.setState(
      {
        isModalOpen: !isModalOpen
      },
      () => {
        // simulate api request
        setTimeout(() => {
          this.setState({
            isModalOpen
          });
        }, 3000);
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />

        <div className="raw mt-6">Material Design Search / component</div>

        <div className="container mt-6 mb-6">
          <div className="row">
            <div className="main col-md-12">
              <form className="row wizard">
                <div className="sw">
                  <form>
                    <input
                      type="search"
                      className="search"
                      placeholder="Search..."
                    />
                    <button className="go">
                      <span className="entypo-search" />
                    </button>
                    <NavbarBrand tag={Link} to="/homepage">
                      <img
                        src={logo}
                        className="logo"
                        alt="Vertex GPS | Guidaince and Patient Support"
                      />
                    </NavbarBrand>
                  </form>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Loader isOpen={true} />

        <div className="container mt-6 mb-6">
          <div className="row">
            <div className="main col-md-12 text-center pt-5 pb-5">
              <Button className="btn-prmary" onClick={this.toggleModal}>
                Open Modal
              </Button>
              <Spinner name="double-bounce" />
            </div>
          </div>
        </div>

        <div className="raw mt-6">Section / Status Buckets</div>
        <span className="section-header__title status-1">
          Action Required &nbsp;
          <span className="badge badge-secondary">12</span>
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </span>
        <span className="section-header__title status-2">
          Status Updates &nbsp;
          <span className="badge badge-secondary">24</span>
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </span>
        <span className="section-header__title status-3">
          Completed &nbsp;
          <span className="badge badge-secondary">24</span>
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </span>

        <div className="raw">
          PrescriberCenterForm w/ notifyItems / component
        </div>

        <div className="container mt-6 mb-6">
          <div className="row">
            <div className="main col-md-12">
              <form className="row wizard">
                <div className="notify">
                  <CaseSummaryNotificationArea items={notifyItems} />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="raw">PrescriberInfo / component</div>

        <div className="container mt-6 mb-6">
          <div className="row">
            <div className="main col-md-12">
              <form className="row wizard" />
            </div>
          </div>
        </div>

        <div className="raw">Coverage Results / component</div>

        <div className="container mt-6 mb-6">
          <div className="row">
            <div className="main col-md-12">
              <form className="row wizard">
                <div className="summary-details" />
              </form>
            </div>
          </div>
        </div>

        <div className="raw">Summary / component</div>

        <div className="container mt-6 mb-6">
          <div className="row">
            <div className="main col-md-12">
              <div className="row summary">
                <div className="summary-header">
                  <h1>
                    <span>Patient Enrollment: </span>
                    John Splechek
                  </h1>

                  <button className="btn float-right" type="submit">
                    Return <HomeIcon size={18} />
                  </button>
                </div>
                <CaseSummaryNotificationArea items={notifyItems} />
                <h4>Current Status</h4>
                <div className="bubble-train col-12">
                  <BubbleTrain items={bubbleItems} />
                </div>

                <CardDeck className="summary-body">
                  <Card className="summary-content medication-card">
                    <CardHeader>Current Medication</CardHeader>
                    <div className="img-wrapper">
                      <CardImg
                        top
                        width="100%"
                        src={symdekoImage}
                        alt="Card image cap"
                      />
                    </div>
                    <CardBody>
                      <div className="card-status status-2">
                        <p> Dosage Supply Low</p>
                      </div>
                      <CardTitle>SYMDEKO</CardTitle>
                      <CardSubtitle>Drug Summary</CardSubtitle>
                      <dl>
                        <dt>Dose</dt>
                        <dd>09-04-1988</dd>
                      </dl>
                      <dl>
                        <dt>Supply</dt>
                        <dd>56 tablets (28-day supply)</dd>
                      </dl>
                      <dl>
                        <dt>Refills</dt>
                        <dd>2</dd>
                      </dl>
                      <dl>
                        <dt>Special Instructions</dt>
                        <dd>
                          Long-form prescriber notes specifying how to
                          administer or possible allergies.
                        </dd>
                      </dl>
                    </CardBody>
                    <CardFooter>
                      <Button color="link" className="btn-block">
                        More Information
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="summary-content insurance-card">
                    <CardHeader>Current Insurance</CardHeader>
                    <div className="img-wrapper">
                      <CardImg
                        top
                        width="100%"
                        src="https://cvshealth.com/sites/default/files/cvs-caremark-logo.png"
                        alt="Card image cap"
                      />
                    </div>
                    <div className="insurance-text">
                      <h1 className="display mb-0 text-primary">
                        Insurance Name Text
                      </h1>
                    </div>

                    <CardBody>
                      <div className="card-status status-3">
                        <p> No Prior Authorization Required</p>
                      </div>
                      <CardTitle>CVS Caremark</CardTitle>
                      <CardSubtitle>Insurance Summary</CardSubtitle>
                      <dl>
                        <dt>Plan ID</dt>
                        <dd>09-04-1988</dd>
                      </dl>
                      <dl>
                        <dt>Group ID</dt>
                        <dd>0123456789</dd>
                      </dl>
                      <dl>
                        <dt>BIN</dt>
                        <dd>09-04-1988</dd>
                      </dl>
                      <dl>
                        <dt>PCN</dt>
                        <dd>0123456789</dd>
                      </dl>
                    </CardBody>
                    <CardFooter>
                      <Button color="primary" className="btn-block">
                        Initiate Prior Authorization
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="summary-content patient-card">
                    <CardHeader>Patient Details</CardHeader>
                    <CardBody>
                      <dl>
                        <dt>First Name</dt>
                        <dd>John</dd>
                      </dl>
                      <dl>
                        <dt>Last Name</dt>
                        <dd>Splechek</dd>
                      </dl>
                      <dl>
                        <dt>Zip Code</dt>
                        <dd>12345-0000</dd>
                      </dl>
                      <dl>
                        <dt>DOB</dt>
                        <dd>10/31/1999</dd>
                      </dl>
                      <dl>
                        <dt>Gender</dt>
                        <dd>Male</dd>
                      </dl>
                      <dl>
                        <dt>Primary Contact</dt>
                        <dd>-contact info-</dd>
                      </dl>
                      <dl>
                        <dt>Primary Phone</dt>
                        <dd>(555) 777-9999</dd>

                        <dt>Secondary Phone</dt>
                        <dd>(555) 777-9999</dd>
                      </dl>
                      <dl>
                        <dt>Leave Message?</dt>
                        <dd>Yes</dd>
                      </dl>
                      <dl>
                        <dt>Primary Email</dt>
                        <dd>john777@yahoo.com</dd>
                      </dl>
                      <dl>
                        <dt>Language</dt>
                        <dd>Spanish</dd>
                      </dl>
                      <dl>
                        <dt>Preferred Pharmacy</dt>
                        <dd>123 Big Pharmacy Rd. Pittsburgh PA, 15220-2200</dd>
                      </dl>
                    </CardBody>
                    <div className="media">
                      <div className="mr-3 media-left">
                        <div className="initial-bubble">
                          <div className="initial-bubble--text">KM</div>
                        </div>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">Kylie M.</h4>
                        <p>
                          Vertex GPS Case Manager
                          <br />
                          Call (412) 777-8899
                        </p>
                      </div>
                    </div>
                    <CardFooter>
                      <Button
                        color="primary"
                        className="btn-outline-primary btn-block"
                      >
                        Chat
                      </Button>
                    </CardFooter>
                  </Card>
                </CardDeck>
                <div className="buttons col-12">
                  <button className="btn btn-secondary" type="submit">
                    Previous
                  </button>
                  <button className="btn btn-primary float-right" type="submit">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default KitchenSink;
