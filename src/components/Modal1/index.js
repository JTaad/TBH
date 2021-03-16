import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { Link } from 'gatsby'



ReactModal.setAppElement('#___gatsby')

class Modal1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: true,
    }
  }
  handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Info covid"
        >
          <div className="titleTbh title is-size-3-mobile is-size-3-tablet is-size-2-desktop">
            <h2 className="modalTitle"><span className=" titleTbhEmpty">REOUVERTURE</span><br/><span className="titleTbhFull"></span>LE 2 AVRIL !</h2>
          </div>

<br/>
<p>Nous sommes très heureux de vous retrouver au T Boutique Hôtel, à Arcachon à partir du 2 avril.<br/>Notre équipe est mobilisée pour vous offrir un séjour agréable en toute sécurité.</p>
<br/>
<h3>ET LES RESTAURANTS ALORS ?</h3> 
<p>C’est dans ce but que nous vous proposons une offre de restauration inédite en attendant la réouverture de nos restaurants !</p>
<br/>
<h3>Le petit déjeuner :</h3>
<p>Restez au lit ! le petit déjeuner vient à vous ! en commandant la veille vous serez servis à l’horaire de votre choix d’une boisson chaude, un jus de fruit fraichement pressé, pain et viennoiserie accompagné de beure confiture et miel, une salade de fruits frais, un fromage blanc et granola et enfin un assortiment de charcuterie, fromages. </p>
<br/>
<h3>Le diner :</h3>
<p>Le T est solidaire ! en attendant la réouverture de nos chers restaurants nous travaillons avec eux afin de proposer un buffet chaque soir ! <br/>
Le concept est simple : un menu élaboré chaque jour avec notre restaurant de quartier – tu descends – tu te sers et tu remontes profiter sereinement de ton repas. </p>

<br/> 
<p>Il nous tarde de vous accueillir prochainement !<br/> <br/>
L’équipe du T Boutique Hôtel </p>

          <div className="modalButton" onClick={this.handleModalClose}><div id="contentNavArrowCloseResp" className="title is-3  closeModal"><div>→</div></div></div>
          </ReactModal>
      </div>
    )
  }
}

export default Modal1