import React from "react";
import styled from "styled-components";
import { signOutAPI } from "../redux/actions";
import { connect } from "react-redux";

function Header(props) {
  return (
    <>
      <Container>
        <Content>
          <Logo>
            <a href="/home">
              <img src="/images/home-logo.svg" />
            </a>
          </Logo>
          <Search>
            <div>
              <input type="text" placeholder="Search" />
              <SearchIcon>
                <img src="/images/search-icon.svg" />
              </SearchIcon>
            </div>
          </Search>
          <Nav>
            <NavListWrap>
              <NavList>
                <a>
                  <img src="/images/nav-home.svg" />
                  <span>Home</span>
                </a>
              </NavList>
              <NavList>
                <a>
                  <img src="/images/nav-network.svg" />
                  <span>My Network</span>
                </a>
              </NavList>
              <NavList>
                <a>
                  <img src="/images/nav-jobs.svg" />
                  <span>jobs</span>
                </a>
              </NavList>
              <NavList>
                <a>
                  <img src="/images/nav-messaging.svg" />
                  <span>Messaging</span>
                </a>
              </NavList>
              <NavList>
                <a>
                  <img src="/images/nav-notifications.svg" />
                  <span>Notification</span>
                </a>
              </NavList>
              <User>
                <a>
                  {props.user && props.user.photoURL ? (
                    <img src={props.user.photoURL} />
                  ) : (
                    <img src="/images/user.svg" alt="" />
                  )}

                  <span>
                    Me
                    <img src="/images/down-icon.svg" />
                  </span>
                </a>
                <SignOut onClick={() => props.signOut()}>
                  <a>Sign Out</a>
                </SignOut>
              </User>
              <Work>
                <a>
                  <img src="/images/nav-work.svg" />
                  <span>
                    Work
                    <img src="/images/down-icon.svg" />
                  </span>
                </a>
              </Work>
            </NavListWrap>
          </Nav>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #eee;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;

  @media (max-width: 767px) {
    padding: 15px;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      -ms-border-radius: 2px;
      -o-border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  -webkit-border-radius: 0 2px 2px 0;
  -moz-border-radius: 0 2px 2px 0;
  -ms-border-radius: 0 2px 2px 0;
  -o-border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: #eee;
    width: 100%;
  }
`;
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      -webkit-transform: scaleX(1);
      -moz-transform: scaleX(1);
      -ms-transform: scaleX(1);
      -o-transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      -webkit-transition: transform 0.2s ease-in-out;
      -moz-transition: transform 0.2s ease-in-out;
      -ms-transition: transform 0.2s ease-in-out;
      -o-transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
const SignOut = styled(NavList)`
  position: absolute;
  top: 45px;
  background: #eee;
  border-radius: 0 0 5px 5px;
  -webkit-border-radius: 0 0 5px 5px;
  -moz-border-radius: 0 0 5px 5px;
  -ms-border-radius: 0 0 5px 5px;
  -o-border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  cursor: pointer;
`;
const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  @media (max-width: 757px) {
    display: none;
  }
`;

// const mapStateToProps = (state) => {
//   return {
//     //   user: state.userState.user,
//   };
// };

// // const dispatchStateToProps = (dispatch) => {
// //   return {
// //     SignOut: () => dispatch(signOutAPI()),
// //   };
// // };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signOut: () => dispatch(signOutAPI()),
//   };
// };

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOutAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
