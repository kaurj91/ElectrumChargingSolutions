import React, { Component } from 'react';
import Margin from '../../assets/icons/margin.svg';
import MarginSp from '../../assets/icons/margin-phone.svg';
import MarginFp from '../../assets/icons/margin-fp.svg';
import MarginFpDesk from '../../assets/icons/margin-fg-desk.svg';


class HeaderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isMobile: false
        };
    
        this.updatePredicate = this.updatePredicate.bind(this);
      }
      componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
      }
    
      updatePredicate() {
        this.setState({ isMobile: window.innerWidth < 450 });
      }
      
    renderBox(isMobile, path){
        if(path === "/"){
            return (isMobile)?(<MarginFp/>):(<MarginFpDesk/>)
        }else{
            return (isMobile)?(<MarginSp />):(<Margin />)
        }
    }
    render() {
        const { isMobile } = this.state;

        let content = this.props.content
        return (
            (content.path !== "/Products")?(
            <div className="headerComponent">
                <div className={`${content.class} box-container`}>
                    <div className="box">
                            {this.renderBox(isMobile, content.path)}
                            <h1>{content.title}<hr></hr></h1>
                            <div className="contentDesktop">
                                {content.description}
                            </div>
                    </div>
                </div>
                <div className="contentPhone">
                    {content.description}
                </div>
            </div>
            ):(
                <div className="headerComponent">
                <div className={`${content.class}`}>
                    <div className="box">
                        <h1>{content.title}</h1>
                    </div>
                </div>

            </div>
            )
        )
    }
}

export default HeaderContent;
