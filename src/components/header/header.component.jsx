import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { ReactComponent as Logo } from '../../assets/logo.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

export const Header = () => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo'  />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>

    </OptionsContainer>
    
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
